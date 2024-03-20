// stressCoper.tsx
"use client";
import { useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa";

export default function StressCoper() {
  const router = useRouter();
  const handleClick1 = () => {
    router.push("/");
  };
  const handleClick2 = () => {
    router.push("/mindfulness");
  };
  const handleClickBack = () => {
    router.back();
  };

  return (
    <main
      style={{
        fontFamily: "'Open Sans', sans-serif",
        backgroundImage: "url('/background1.webp')",
        backgroundSize: "cover",
        backgroundColor: "#FBFFE0",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#000000",
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
        </div>
      </nav>

      <div
        style={{
          marginTop: "100px", // Adjusted to lower the content below the nav
          textAlign: "center",
          flexGrow: "1",
          maxWidth: "800px",
          backgroundColor: "rgba(255, 255, 224, 0.9)", // Semi-transparent background for the text container
          padding: "20px", // Add padding around the text
          borderRadius: "10px", // Rounded corners for the text container
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            color: "#000000",
            fontSize: "40px",
          }}
        >
          Mindfulness
        </h1>
        <p>
          {" "}
          In this section, you will find a variety of strategies and exercises
          to help you manage stress. Explore breathing techniques, guided
          meditations, and more to find what works best for you.
        </p>
      </div>
      <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
        <button
          style={{
            backgroundColor: "#A0F6D2",
            color: "#000000",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
          }}
          className="shadow-lg transition-transform hover:scale-105 hover:shadow-xl bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          <span onClick={handleClick2} style={{ transition: "0.3s" }}>
            Begin{" "}
          </span>
        </button>
      </div>
      <div style={{ position: "fixed", bottom: "20px", left: "20px" }}>
        <button
          onClick={handleClickBack}
          style={{
            backgroundColor: "#A0F6D2",
            color: "#000000",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
          className="shadow-lg transition-transform hover:scale-105 hover:shadow-xl bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Back
        </button>
      </div>
    </main>
  );
}
