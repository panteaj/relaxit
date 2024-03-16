// stressCoper.tsx
"use client";
import { useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa";

export default function Gratitude() {
  const router = useRouter();
  const handleClick1 = () => {
    router.push("/");
  };
  const handleClick2 = () => {
    router.push("/todo");
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
      <div style={{ marginTop: "80px", textAlign: "center", flexGrow: "1" }}>
        <h1 style={{ color: "#000000", fontSize: "40px" }}>
          StressCoper: Gratitude Practice
        </h1>
        <p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ flex: "1", marginRight: "10px" }}>
              <h2
                style={{
                  color: "#000000",
                  fontSize: "24px",
                  marginBottom: "10px",
                }}
              >
                Note 1
              </h2>
              <textarea
                style={{
                  width: "100%",
                  height: "200px",
                  padding: "10px",
                  border: "1px solid #000000",
                  borderRadius: "5px",
                }}
              ></textarea>
            </div>
            <div style={{ flex: "1", marginRight: "10px" }}>
              <h2
                style={{
                  color: "#000000",
                  fontSize: "24px",
                  marginBottom: "10px",
                }}
              >
                Note 2
              </h2>
              <textarea
                style={{
                  width: "100%",
                  height: "200px",
                  padding: "10px",
                  border: "1px solid #000000",
                  borderRadius: "5px",
                }}
              ></textarea>
            </div>
            <div style={{ flex: "1" }}>
              <h2
                style={{
                  color: "#000000",
                  fontSize: "24px",
                  marginBottom: "10px",
                }}
              >
                Note 3
              </h2>
              <textarea
                style={{
                  width: "100%",
                  height: "200px",
                  padding: "10px",
                  border: "1px solid #000000",
                  borderRadius: "5px",
                }}
              ></textarea>
            </div>
          </div>
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
            Next{" "}
          </span>
        </button>
      </div>
      <div style={{ position: "fixed", bottom: "20px", left: "20px" }}>
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
