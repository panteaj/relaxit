"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { FaHome } from "react-icons/fa";

type TaskLists = {
  Monday: string[];
  Tuesday: string[];
  Wednesday: string[];
  Thursday: string[];
  Friday: string[];
  Saturday: string[];
  Sunday: string[];
  Notes: string[];
};

const Todo: React.FC = () => {
  const router = useRouter();
  const [showLines, setShowLines] = useState(false);
  const [tasks, setTasks] = useState<TaskLists>({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
    Notes: [],
  });
  const [newTask, setNewTask] = useState<{ [key in keyof TaskLists]?: string }>(
    {}
  );

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowLines(event.target.checked);
  };
  const handleClickBack = () => {
    router.back();
  };
  const handleOverview = () => {
    router.push("/stresscoper/overview");
  };
  const handleClick1 = () => {
    router.push("/");
  };

  const handleAddTask = (day: keyof TaskLists) => {
    const taskToAdd = newTask[day]?.trim();
    if (taskToAdd) {
      setTasks((prevTasks) => ({
        ...prevTasks,
        [day]: [...prevTasks[day], taskToAdd],
      }));
      setNewTask((prevNewTask) => ({
        ...prevNewTask,
        [day]: "",
      }));
    }
  };

  const handleTaskInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    day: keyof TaskLists
  ) => {
    const { value } = event.target;
    setNewTask((prevNewTask) => ({
      ...prevNewTask,
      [day]: value,
    }));
  };

  const handleKeyPress = (
    event: KeyboardEvent<HTMLInputElement>,
    day: keyof TaskLists
  ) => {
    if (event.key === "Enter") {
      handleAddTask(day);
    }
  };
  const dayColors = {
    Monday: "#A0F6D2",
    Tuesday: "#B1E8ED",
    Wednesday: "#F191E2",
    Thursday: "#FF8686",
    Friday: "#FFF38E",
    Saturday: "#FFCF87",
    Sunday: "#C882FF",
    Notes: "#FFAAA7",
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

      <div style={{ marginTop: "100px", textAlign: "center", width: "100%" }}>
        <h1 style={{ color: "#000000", fontSize: "40px" }}>
          StressCoper: To Do
        </h1>
        <label style={{ marginRight: "20px" }}>
          Show lines
          <input
            type="checkbox"
            checked={showLines}
            onChange={handleCheckboxChange}
            style={{ marginLeft: "10px" }}
          />
        </label>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {Object.keys(tasks).map((day) => (
            <div
              key={day}
              style={{
                backgroundColor: dayColors[day as keyof TaskLists],
                borderRadius: "16px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                margin: "5px",
                flex: "1 0 18%",
                maxWidth: "18%",
                padding: "1rem",
              }}
            >
              <h2 style={{ textAlign: "center" }}>{day}</h2>
              {tasks[day as keyof TaskLists].map((task, index) => (
                <div
                  key={index}
                  style={{
                    textDecoration: showLines ? "line-under" : "none",
                    padding: "10px",
                    margin: "10px 0",
                    background: "white",
                    borderRadius: "8px",
                  }}
                >
                  {task}
                </div>
              ))}
              <input
                type="text"
                value={newTask[day as keyof TaskLists] || ""}
                onChange={(event) =>
                  handleTaskInputChange(event, day as keyof TaskLists)
                }
                onKeyPress={(event) =>
                  handleKeyPress(event, day as keyof TaskLists)
                }
                placeholder="Enter a task"
                style={{
                  width: "100%",
                  padding: "10px",
                  margin: "10px 0",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                }}
              />
              <button
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  background: "#f0f0f0",
                }}
                onClick={() => handleAddTask(day as keyof TaskLists)}
              >
                + Add Task
              </button>
            </div>
          ))}
        </div>
      </div>

      <footer style={{ position: "fixed", right: "20px", bottom: "20px" }}>
        <button
          onClick={() => router.push("/grounding")}
          style={{
            backgroundColor: "#548E87",
            color: "#FFFFFF",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Next
        </button>
      </footer>
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
};

export default Todo;
