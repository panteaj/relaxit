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
    router.push("/breathe");
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
      <div
        style={{
          marginTop: "80px",
          textAlign: "center",
          flexGrow: "1",
          maxWidth: "800px",
        }}
      >
        <h1 style={{ color: "#000000", fontSize: "40px" }}>Stress-coper</h1>{" "}
        <p>
          The stress-coper is a relaxing journey where you can take a break,
          cope with stress and meet some nice suprises along the way. You can
          quit at any moment. If you want to see all the activities, click on
          the menu to see them all and jump to the one you would like to do.
          Have a relaxing trip!
        </p>
      </div>{" "}
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
