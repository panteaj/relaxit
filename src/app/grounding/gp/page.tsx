"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaHome } from "react-icons/fa";

export default function useGrounding() {
  const router = useRouter();
  const handleClickHome = () => {
    router.push("/");
  };
  const handleClickNext = () => {
    router.push("/focus");
  };

  // Create state to hold the input values
  const [inputs, setInputs] = useState({
    name: "",
    age: "",
    location: "",
    workingOn: "",
    wokeUp: "",
    breakfast: "",
    fear: "",
    overcomeBy: "",
    greatWorkOn: "",
  });

  // Handle change in input fields
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleClickBack = () => {
    router.back();
  };
  const handleOverview = () => {
    router.push("/stresscoper/menu");
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
            onClick={handleClickHome}
            style={{
              color: "#FFFFFF",
              marginRight: "10px",
              fontSize: "45px",
              cursor: "pointer",
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
          marginTop: "100px", // Increase top margin to push content below the fixed navbar
          textAlign: "center",
          flexGrow: "1",
          color: "#5C5470",
          width: "80%", // Set a max width for inner content
        }}
      >
        <h1
          style={{ color: "#000000", fontSize: "40px", marginBottom: "20px" }}
        >
          Grounding Exercises
        </h1>
        <p
          style={{
            color: "#000000",
            fontFamily: "serif",
            fontSize: "20px",
            margin: "20px 0",
          }}
        >
          Remind yourself of who you are and what you can do, fill in the blanks
          with whatever fits you.
        </p>
        <div
          style={{
            color: "#000000",
            fontFamily: "serif",
            fontSize: "20px",
            margin: "0 auto",
          }}
        >
          <form>
            My name is{" "}
            <input
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              style={{
                marginRight: "5px",
                border: "1px solid black",
                padding: "2px",
                boxSizing: "border-box",
                marginBottom: "10px",
              }}
            />
            , and I am{" "}
            <input
              type="text"
              name="age"
              value={inputs.age}
              onChange={handleChange}
              style={{
                marginRight: "5px",
                border: "1px solid black",
                padding: "2px",
                boxSizing: "border-box",
              }}
            />
            years old. I am currently at{" "}
            <input
              type="text"
              name="location"
              value={inputs.location}
              onChange={handleChange}
              style={{
                marginRight: "5px",
                border: "1px solid black",
                padding: "2px",
                boxSizing: "border-box",
                marginBottom: "10px",
              }}
            />
            . Today I am working on{" "}
            <input
              type="text"
              name="workingOn"
              value={inputs.workingOn}
              onChange={handleChange}
              style={{
                marginRight: "5px",
                border: "1px solid black",
                padding: "2px",
                boxSizing: "border-box",
                marginBottom: "10px",
              }}
            />
            . This morning I woke up at{" "}
            <input
              type="text"
              name="wokeUp"
              value={inputs.wokeUp}
              onChange={handleChange}
              style={{
                marginRight: "5px",
                border: "1px solid black",
                padding: "2px",
                boxSizing: "border-box",
                marginBottom: "10px",
              }}
            />
            . I ate{" "}
            <input
              type="text"
              name="breakfast"
              value={inputs.breakfast}
              onChange={handleChange}
              style={{
                marginRight: "5px",
                border: "1px solid black",
                padding: "2px",
                boxSizing: "border-box",
                marginBottom: "10px",
              }}
            />
            for breakfast. I fear that{" "}
            <input
              type="text"
              name="fear"
              value={inputs.fear}
              onChange={handleChange}
              style={{
                marginRight: "5px",
                border: "1px solid black",
                padding: "2px",
                boxSizing: "border-box",
                marginBottom: "10px",
              }}
            />
            for today. But I know that by{" "}
            <input
              type="text"
              name="overcomeBy"
              value={inputs.overcomeBy}
              onChange={handleChange}
              style={{
                marginRight: "5px",
                border: "1px solid black",
                padding: "2px",
                boxSizing: "border-box",
              }}
            />
            I can overcome that. Today I will do great work on{" "}
            <input
              type="text"
              name="greatWorkOn"
              value={inputs.greatWorkOn}
              onChange={handleChange}
              style={{
                border: "1px solid black",
                padding: "2px",
                boxSizing: "border-box",
              }}
            />
            . It will be a good day.
          </form>
        </div>
      </div>
      <div
        style={{ position: "fixed", bottom: "20px", right: "20px" }}
        className="hover:scale-105 hover:shadow-xl"
      >
        <button
          onClick={handleClickNext}
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
          Next
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
