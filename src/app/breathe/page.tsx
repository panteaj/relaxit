"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowRight, FaHome } from "react-icons/fa";

export default function useBreathe() {
  const router = useRouter();
  const [circleSize, setCircleSize] = useState(300);
  const [step, setStep] = useState(0); // Tracks which step of the instructions the user is on

  // Function to determine the text based on the step
  const getCircleText = () => {
    if (step === 0) {
      return "Let us take a moment and empty the mind. Think about your breathing.";
    } else {
      return "Follow the circle and breathe stay here for as long as you need. To move on, press begin.";
    }
  };

  const handleClick1 = () => {
    router.push("/");
  };
  const handleOverview = () => {
    router.push("/stresscoper/menu");
  };

  const handleClick2 = () => {
    router.push("/breathe/breathestart");
  };
  const handleClickBack = () => {
    router.back();
  };

  return (
    <main
      style={{
        backgroundColor: "#FBFFE0",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // backgroundImage: "url('/back/meditate.webp')",

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
            className="hover:scale-105 hover:shadow-xl"
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
      <div>
        <h1
          style={{
            color: "#000000",
            fontSize: "40px",
            justifyContent: "center",
            marginTop: "100px",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          Breathing{" "}
        </h1>{" "}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 234px)",
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
            fontSize: "23px",
            fontWeight: "bold",
            transition: "width 1s, height 1s, font-size 1s",
            textAlign: "center",
          }}
        >
          {getCircleText()}
        </div>{" "}
        {step === 0 && (
          <FaArrowRight
            onClick={() => setStep(step + 1)}
            className="blink"
            style={{ fontSize: "60px" }}
          />
        )}
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "10px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <span
          onClick={() => setStep(0)}
          style={{
            height: "10px",
            width: "10px",
            backgroundColor: step === 0 ? "#548E87" : "#bbbbbb",
            borderRadius: "50%",
            display: "inline-block",
            margin: "0 5px",
            cursor: "pointer",
          }}
        ></span>
        <span
          onClick={() => setStep(1)}
          style={{
            height: "10px",
            width: "10px",
            backgroundColor: step === 1 ? "#548E87" : "#bbbbbb",
            borderRadius: "50%",
            display: "inline-block",
            margin: "0 5px",
            cursor: "pointer",
          }}
        ></span>
      </div>
      <div
        style={{ position: "fixed", bottom: "20px", right: "20px" }}
        className="hover:scale-105 hover:shadow-xl"
      >
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
            Begin{" "}
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
