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
    router.push("/stresscoper");
  };
  const handleClickBack = () => {
    router.back();
  };
  const handleOverview = () => {
    router.push("/stresscoper/overview");
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
        </div>
      </nav>

      <div
        style={{
          marginTop: "80px",
          textAlign: "center",
          flexGrow: "1",
          maxWidth: "800px",
        }}
      >
        <h1 style={{ color: "#000000", fontSize: "40px" }}>Stress-coper</h1>
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
