"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";

export default function useBreathe() {
  const router = useRouter();
  const [circleSize, setCircleSize] = useState(70); // Initial size of the circle
  const [isExpanding, setIsExpanding] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);
  const [breathText, setBreathText] = useState("Breathe In"); // State to manage the text

  const handleClick1 = () => {
    router.push("/");
  };
  const handleOverview = () => {
    router.push("/stresscoper/menu");
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
          // Check if expanding
          if (isExpanding) {
            if (prevSize >= 200) {
              // Pause at max size, then start contracting
              setTimeout(() => {
                setIsExpanding(false);
                setBreathText("Breathe Out"); // Change text after pause
              }, 1000); // 1 second pause
              return prevSize;
            }
            return prevSize + 150 / 30; // Adjust step size for smooth animation
          }
          // Check if contracting
          else {
            if (prevSize <= 70) {
              // Pause at min size, then start expanding
              setTimeout(() => {
                setIsExpanding(true);
                setBreathText("Breathe In"); // Change text after pause
              }, 1000); // 1 second pause
              return prevSize;
            }
            return prevSize - 150 / 30; // Adjust step size for smooth animation
          }
        });
      }, 100); // Execute every 100ms for smoother transition
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isAnimating, isExpanding]);

  const textSize = `${circleSize * 0.2}px`;

  return (
    <main
      style={{
        backgroundColor: "#FBFFE0",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        //backgroundImage: "url('/back/medi.webp')",
        //backgroundSize: "cover",
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
            Menu
          </button>
        </div>
      </nav>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 234px)",
          marginTop: "100px",
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

            textAlign: "center",
          }}
        >
          {breathText} {/* Displaying the dynamic text */}
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
          className="hover:scale-105 hover:shadow-xl"
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
          className="hover:scale-105 hover:shadow-xl"
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
          className="hover:scale-105 hover:shadow-xl"
        >
          <span onClick={handleClick2} style={{ transition: "0.3s" }}>
            Next{" "}
          </span>
        </button>
      </div>
      <div
        style={{ position: "fixed", bottom: "20px", left: "20px" }}
        className="hover:scale-105 hover:shadow-xl"
      >
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
