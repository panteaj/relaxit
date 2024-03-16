"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";

export default function breathe() {
  const router = useRouter();
  const [circleSize, setCircleSize] = useState(50); // Initial size of the circle
  const [isExpanding, setIsExpanding] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);

  const handleClick1 = () => {
    router.push("/");
  };
  const handleOverview = () => {
    router.push("/stresscoper/overview");
  };

  const handleClick2 = () => {
    router.push("/gratitude");
  };
  const handleClickBack = () => {
    router.back();
  };
  const handleStartClick = () => {
    setIsAnimating(true);
  };

  const handleStopClick = () => {
    setIsAnimating(false);
  };

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (isAnimating) {
      interval = setInterval(() => {
        setCircleSize((prevSize) => {
          if (isExpanding) {
            if (prevSize >= 200) {
              setIsExpanding(false);
              return prevSize;
            }
            return prevSize + 5;
          } else {
            if (prevSize <= 50) {
              setIsExpanding(true);
              return prevSize;
            }
            return prevSize - 5;
          }
        });
      }, 100); // Adjust the interval for smoother animation
    }

    return () => clearInterval(interval); // Clean up the interval
  }, [isAnimating, isExpanding]);

  const textSize = `${circleSize * 0.25}px`;

  return (
    <main
      style={{
        backgroundColor: "#FBFFE0",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <nav
        style={{
          backgroundColor: "#B1E8ED",
          padding: "10px",
          textAlign: "center",
          width: "100%",
          position: "fixed",
          top: "0",
          zIndex: "1000",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaHome
            onClick={handleClick1}
            style={{ color: "#FFFFFF", marginRight: "10px", fontSize: "45px" }}
          />
          <h1
            style={{
              fontSize: "45px",
              margin: "0",
              color: "#FFFFFF",
              flexGrow: "1",
            }}
          >
            RelaxIt
          </h1>
          <button
            onClick={handleOverview}
            style={{
              backgroundColor: "#B1E8ED",
              color: "#000000",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Overview
          </button>
        </div>
      </nav>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 234px)", // Adjusted to center vertically and make space for buttons
          marginTop: "50px", // Move the circle down by 50px
        }}
      >
        <div
          style={{
            width: circleSize,
            height: circleSize,
            borderRadius: "50%",
            backgroundColor: "#F6E97F",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: textSize,
            fontWeight: "bold",
            transition: "width 1s, height 1s, font-size 1s",
          }}
        >
          Breathe
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px", // Add space between circle and buttons
        }}
      >
        <button
          onClick={handleStartClick}
          style={{
            backgroundColor: "#548E87",
            color: "#FFFFFF",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            marginRight: "10px",
          }}
        >
          Start
        </button>
        <button
          onClick={handleStopClick}
          style={{
            backgroundColor: "#FF6B6B",
            color: "#FFFFFF",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        >
          Stop
        </button>
      </div>

      <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
        <button
          style={{
            backgroundColor: "#548E87",
            color: "#FFFFFF",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        >
          <span onClick={handleClick2} style={{ transition: "0.3s" }}>
            Next{" "}
          </span>
        </button>
      </div>
      <div style={{ position: "fixed", bottom: "20px", left: "20px" }}>
        <button
          onClick={handleClickBack}
          style={{
            backgroundColor: "#548E87",
            color: "#FFFFFF",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Back
        </button>
      </div>
    </main>
  );
}
