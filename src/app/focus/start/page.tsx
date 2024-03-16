// stressCoper.tsx
"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaHome, FaPause, FaPlay, FaSquare } from "react-icons/fa";

export default function StressCoper() {
  const router = useRouter();
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [isStopped, setIsStopped] = useState(false);

  useEffect(() => {
    let timerId: string | number | NodeJS.Timeout | undefined;
    if (isRunning && !isStopped) {
      timerId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    const handleOverview = () => {
      router.push("/stresscoper/overview");
    };

    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [isRunning, isStopped]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handlePauseResume = () => {
    setIsRunning(!isRunning);
  };

  const handleStop = () => {
    setIsStopped(true);
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsStopped(false);
    setIsRunning(true);
    setTime(0); // Reset time to 0
  };

  const pausePlayIcon = isRunning ? (
    <FaPause
      onClick={handlePauseResume}
      style={{ fontSize: "45px", color: "#000000", cursor: "pointer" }}
    />
  ) : (
    <FaPlay
      onClick={handlePauseResume}
      style={{ fontSize: "45px", color: "#000000", cursor: "pointer" }}
    />
  );

  const stopIcon = (
    <FaSquare
      onClick={handleStop}
      style={{ fontSize: "45px", color: "red", cursor: "pointer" }}
    />
  );

  const backButton = (
    <button
      onClick={() => router.back()}
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
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
  );

  const nextButton = (
    <button
      onClick={() => router.push("/")}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#548E87",
        color: "#FFFFFF",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        cursor: "pointer",
      }}
    >
      Next
    </button>
  );

  return (
    <main
      style={{
        backgroundColor: "#FBFFE0",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
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
            onClick={() => router.push("/")}
            style={{
              cursor: "pointer",
              marginRight: "10px",
              fontSize: "45px",
              color: "#FFFFFF",
            }}
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
        </div>
      </nav>

      <div style={{ marginTop: "100px", textAlign: "center" }}>
        <h1 style={{ color: "#000000", fontSize: "40px" }}>Time to focus</h1>
      </div>

      <div style={{ marginTop: "80px", textAlign: "center", flexGrow: "1" }}>
        {isStopped ? (
          <div>
            {/* Stopped state UI */}
            <p>Want to play a quiz during the break?</p>
            <button onClick={handleReset}>Yes -&gt;</button>
            {/* Implement your quiz or stopped state UI here */}
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Timer display */}
            <div
              style={{
                backgroundColor: "#B1E8ED",
                width: "100%",
                position: "relative",
                height: "150px",
              }}
            >
              <div
                style={{
                  width: "0",
                  height: "0",
                  borderTop: "75px solid transparent",
                  borderBottom: "75px solid transparent",
                  borderLeft: "150px solid #8FDDE7",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "0",
                  right: "0",
                  marginLeft: "auto",
                  marginRight: "auto",
                  transform: "translateY(-50%)",
                  fontSize: "30px",
                  fontFamily: "monospace",
                }}
              >
                {formatTime()}
              </span>
            </div>
            {/* Control buttons */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              {pausePlayIcon}
              {stopIcon}
            </div>
          </div>
        )}
      </div>

      {/* Back and Next buttons */}
      {backButton}
      {nextButton}
    </main>
  );
}
