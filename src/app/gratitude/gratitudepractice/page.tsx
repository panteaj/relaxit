// stressCoper.tsx
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
const postItStyle = {
  backgroundColor: "#ffff88", // Post-it note color
  border: "1px solid #ffed88", // Slightly darker border for depth
  boxShadow: "5px 5px 7px rgba(0,0,0,0.1)", // Soft shadow for a "lifted" look
  padding: "10px", // Padding inside the note
  fontFamily: '"Comic Sans MS", cursive, sans-serif', // Optional: gives a handwritten look
  fontSize: "16px", // Adjust font size according to preference
  lineHeight: "1.5", // Line height for better readability
  transform: "rotate(3deg)", // Slight rotation for a casual placement look
  margin: "0 0 20px 0", // Margin to separate multiple notes
  width: "calc(100% - 20px)", // Adjust width according to padding
  height: "200px", // Fixed height for uniformity
};

export default function Gratitude() {
  const router = useRouter();
  const [noteTitles, setNoteTitles] = useState<{
    [key: string]: { title: string; color: string };
  }>({
    note1: { title: "Edit title here", color: "#ffff88" },
    note2: { title: "Edit title here", color: "#ffff88" },
    note3: { title: "Edit title here", color: "#ffff88" },
  });

  const colorOptions = [
    "#ffff88", // Yellow
    "#ffabab", // Pink
    "#8fe388", // Green
    "#85e3ff", // Blue
    "#d9afff", // Purple
  ];

  const handleTitleChange = (noteId: string, newTitle: string) => {
    setNoteTitles({
      ...noteTitles,
      [noteId]: { ...noteTitles[noteId], title: newTitle },
    });
  };

  const handleColorChange = (noteId: string, newColor: string) => {
    setNoteTitles({
      ...noteTitles,
      [noteId]: { ...noteTitles[noteId], color: newColor },
    });
  };

  const handleClick1 = () => {
    router.push("/");
  };
  const handleClick2 = () => {
    router.push("/todo");
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
      <div style={{ marginTop: "80px", textAlign: "center", flexGrow: "1" }}>
        <h1
          style={{ color: "#000000", fontSize: "40px", marginBottom: "40px" }}
        >
          StressCoper: Gratitude Practice
        </h1>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {Object.entries(noteTitles).map(
            ([noteId, { title, color }], index) => (
              <div
                key={noteId}
                style={{
                  flex: "1",
                  marginRight: index < 2 ? "10px" : "0",
                  marginBottom: "10px",
                }}
              >
                <div
                  contentEditable
                  suppressContentEditableWarning={true}
                  onBlur={(e) => handleTitleChange(noteId, e.target.innerText)}
                  style={{
                    color: "#000000",
                    fontSize: "24px",
                    marginBottom: "20px",
                    padding: "5px",
                    minHeight: "32px",
                    outline: "none",
                  }}
                >
                  {title}
                </div>
                <textarea
                  style={{
                    ...postItStyle,
                    backgroundColor: color, // Dynamic color based on state
                    borderColor: color,
                  }}
                ></textarea>
                <div style={{ marginTop: "10px" }}>
                  {colorOptions.map((optionColor) => (
                    <button
                      key={optionColor}
                      onClick={() => handleColorChange(noteId, optionColor)}
                      style={{
                        backgroundColor: optionColor,
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        marginRight: "5px",
                        border:
                          optionColor === color ? "2px solid black" : "none", // Highlight selected color
                      }}
                    />
                  ))}
                </div>
              </div>
            )
          )}
        </div>
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
            Next{" "}
          </span>
        </button>
      </div>
      <div
        style={{ position: "fixed", bottom: "20px", left: "20px" }}
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
          <span onClick={handleClickBack} style={{ transition: "0.3s" }}>
            Back{" "}
          </span>
        </button>
      </div>
    </main>
  );
}
