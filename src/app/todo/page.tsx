// stressCoper.tsx
"use client";
import { useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa";

export default function todo() {
  const router = useRouter();
  const handleClick1 = () => {
    router.back();
  };
  const handleClick2 = () => {
    router.push("/todo/todolist");
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
          StressCoper: To Do
        </h1>
        <p>
          Sometimes all the tasks we have to get done can seem stressful and
          overwhelming. Therefore, practicing how to organize can be quite
          helpful to step by step follow a plan instead of stressing on all the
          work that need to get done. “To do” will help you step by step gather
          your to-dos and let you organize your day.
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
    </main>
  );
}
