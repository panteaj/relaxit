// EnhancedPomodoroTimer.tsx
"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaCoffee,
  FaHome,
  FaPause,
  FaPlay,
  FaRedo,
} from "react-icons/fa";

export default function EnhancedPomodoroTimer() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(0);
  const [mode, setMode] = useState("work"); // Modes: 'work', 'shortBreak', 'longBreak'
  const [isRunning, setIsRunning] = useState(false);
  const [cycles, setCycles] = useState(0);

  const workDuration = 25 * 60;
  const shortBreakDuration = 5 * 60;
  const longBreakDuration = 15 * 60;
  const maxCyclesBeforeLongBreak = 4;

  useEffect(() => {
    let intervalId: NodeJS.Timeout | number;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => {
          const currentDuration = getCurrentDuration();
          // Increment the timer
          if (prevSeconds < currentDuration - 1) {
            return prevSeconds + 1;
          } else {
            // Time for the next mode
            if (mode === "work") {
              // End of a work session
              const newCycles = cycles + 1;
              setCycles(newCycles);
              // Determine if it's time for a long break or a short break
              setMode(
                newCycles % maxCyclesBeforeLongBreak === 0
                  ? "longBreak"
                  : "shortBreak"
              );
            } else {
              // End of a break, start a new work session
              setMode("work");
              // If it was a long break, reset the cycles count
              if (mode === "longBreak") {
                setCycles(0);
              }
            }
            return 0; // Reset seconds for the next mode
          }
        });
      }, 1000) as unknown as number;
    }

    return () => clearInterval(intervalId as number);
  }, [isRunning, mode, cycles, maxCyclesBeforeLongBreak]);

  const switchMode = () => {
    if (mode === "work") {
      const newCycles = cycles + 1;
      setCycles(newCycles);
      setMode(
        newCycles % maxCyclesBeforeLongBreak === 0 ? "longBreak" : "shortBreak"
      );
    } else {
      setMode("work");
    }
  };

  const getCurrentDuration = () => {
    switch (mode) {
      case "work":
        return workDuration;
      case "shortBreak":
        return shortBreakDuration;
      case "longBreak":
        return longBreakDuration;
      default:
        return workDuration;
    }
  };

  const formatTime = () => {
    const totalSeconds = getCurrentDuration() - seconds;
    const minutes = Math.floor(totalSeconds / 60);
    const secondsLeft = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secondsLeft
      .toString()
      .padStart(2, "0")}`;
  };

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
    setCycles(0);
    setMode("work");
  };

  const modeIcon = () => {
    switch (mode) {
      case "work":
        return <FaBriefcase style={{ fontSize: "24px" }} />;
      case "shortBreak":
        return <FaCoffee style={{ fontSize: "24px" }} />;
      case "longBreak":
        return <FaHome style={{ fontSize: "24px" }} />;
      default:
        return null;
    }
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
          zIndex: 1000,
        }}
      >
        <h1
          style={{
            fontSize: "45px",
            margin: "0",
            color: "#FFFFFF",
          }}
        >
          {modeIcon()}
          Pomodoro Timer
        </h1>
      </nav>

      <div
        style={{
          marginTop: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        <h2 style={{ fontSize: "60px", color: "#333" }}>{formatTime()}</h2>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaPlay
            onClick={handleStartPause}
            style={{
              fontSize: "45px",
              color: isRunning ? "grey" : "#548E87", // Grey out if running
              cursor: "pointer",
              marginRight: "20px",
            }}
          />
          <FaPause
            onClick={handleStartPause}
            style={{
              fontSize: "45px",
              color: !isRunning ? "grey" : "#548E87", // Grey out if not running
              cursor: "pointer",
              marginRight: "20px",
            }}
          />
          <FaRedo
            onClick={handleReset}
            style={{
              fontSize: "45px",
              color: "#548E87",
              cursor: "pointer",
            }}
          />
        </div>
      </div>

      {/* Additional Functional Buttons for User Guidance */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          position: "fixed",
          bottom: "20px",
        }}
      >
        <button
          onClick={() => router.back()}
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

        <button
          onClick={() => router.push("/")}
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
          Home
        </button>
      </div>
    </main>
  );
}
