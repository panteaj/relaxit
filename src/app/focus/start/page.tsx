// stressCoper.tsx
"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaHome,
  FaPause,
  FaPlay,
  FaRedo,
  FaRegPauseCircle,
  FaSquare,
} from "react-icons/fa";

export default function StressCoper() {
  const router = useRouter();
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [isStopped, setIsStopped] = useState(false);
  const [showQuizPrompt, setShowQuizPrompt] = useState(false);
  const [focusedTime, setFocusedTime] = useState("");

  const quizURLs = [
    "https://www.buzzfeed.com/grouchyovercoat71/potato-chip-flavor-quiz",
    "https://www.buzzfeed.com/soupandcatlover/disney-characters-bad-drawings-quiz",
    "https://www.buzzfeed.com/tayloraowens/letterboxd-four-favorites-actors-trivia-quiz",
    // Add more quiz URLs as needed
  ];
  useEffect(() => {
    let timerId: string | number | NodeJS.Timeout | undefined;
    if (isRunning && !isStopped) {
      timerId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && !isStopped) {
      setShowQuizPrompt(true);
    } else {
      setShowQuizPrompt(false);
    }

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
  const handleResume = () => {
    setIsRunning(true);
    setShowQuizPrompt(false);
  };
  const handleTakeQuiz = () => {
    const randomQuizUrl = quizURLs[Math.floor(Math.random() * quizURLs.length)];
    window.open(randomQuizUrl, "_blank");
  };

  const handleStop = () => {
    setFocusedTime(formatTime()); // Capture the focused time before stopping
    setIsStopped(true);
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsStopped(false);
    setIsRunning(true);
    setTime(0);
    setFocusedTime("");
    setShowQuizPrompt(false); // Hide the quiz prompt on reset
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
      className="hover:scale-105 hover:shadow-xl"
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
      className="hover:scale-105 hover:shadow-xl"
    >
      Next
    </button>
  );
  const largePauseSignStyle: React.CSSProperties = {
    marginTop: "20px",
    fontSize: "250px", // Size of the pause icon
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "rgba(160,246,210,1)", // Light color for the pause icon
    zIndex: 0, // Ensure it's behind the timer text, use a number instead of a string
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
          <button
            onClick={() => router.push("/stresscoper/menu")}
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

      <div style={{ marginTop: "100px", textAlign: "center" }}>
        <h1 style={{ color: "#000000", fontSize: "40px" }}>Time to focus</h1>
      </div>

      <div style={{ marginTop: "80px", textAlign: "center", flexGrow: "1" }}>
        {" "}
        {isStopped ? (
          <div style={{ textAlign: "center" }}>
            <h2>Congrats, your focused time is {focusedTime}</h2>
            <FaRedo
              onClick={handleReset}
              style={{
                fontSize: "45px",
                color: "#000000",
                cursor: "pointer",
                marginTop: "20px", // Spacing between the message and the button
              }}
            />
          </div>
        ) : showQuizPrompt ? (
          <div style={{ textAlign: "center" }}>
            <FaRegPauseCircle style={largePauseSignStyle} />
            <div
              style={{
                position: "relative", // For z-index stacking context
                zIndex: 1, // Ensures the text is above the pause icon
              }}
            >
              {" "}
              <h1 style={{ fontSize: "40px", fontFamily: "monospace" }}>
                {formatTime()}
              </h1>
              <h2 style={{ textAlign: "center" }}>
                Want to play a quiz during the break?
              </h2>
            </div>

            <button
              onClick={handleTakeQuiz}
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                position: "relative", // For z-index stacking context
                zIndex: 1,
              }}
            >
              Yes -&gt;
            </button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                position: "absolute",
                marginTop: "30px",
                marginLeft: "6%",

                // Center the buttons
              }}
            >
              {!isStopped && (
                <>
                  {isRunning ? (
                    <FaPause
                      onClick={handlePauseResume}
                      style={{
                        fontSize: "45px",
                        color: "#000000",
                        cursor: "pointer",
                        marginRight: "20px", // Add spacing between buttons
                      }}
                    />
                  ) : (
                    <FaPlay
                      onClick={handleResume}
                      style={{
                        fontSize: "45px",
                        color: "#000000",
                        cursor: "pointer",
                        marginRight: "20px", // Add spacing between buttons
                      }}
                    />
                  )}
                  <FaSquare
                    onClick={handleStop}
                    style={{
                      fontSize: "45px",
                      color: "red",
                      cursor: "pointer",
                    }}
                  />
                </>
              )}
            </div>
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
                backgroundColor: "#FBFFE0",
                width: "100%",
                position: "relative",
                height: "200px", // Adjust height as needed
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: "1",
              }}
            >
              <div
                style={{
                  width: "0",
                  height: "0",
                  borderTop: "100px solid transparent", // Adjust the size to match the design
                  borderBottom: "100px solid transparent", // Adjust the size to match the design
                  borderLeft: "200px solid #A0F6D2", // Adjust the size to match the design
                  position: "absolute",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  fontSize: "30px",
                  fontFamily: "monospace",
                  zIndex: 1,
                  alignItems: "center",
                }}
              >
                <h1 style={{ fontSize: "40px" }}>{formatTime()}</h1>
              </span>
            </div>
            {/* Control buttons */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "20px",
                zIndex: "1",
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
