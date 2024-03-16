// stressCoper.tsx
"use client";
import { useRouter } from "next/navigation"; // Correct import for useRouter
import { FaHome } from "react-icons/fa";

export default function MentalHealthInfo() {
  const router = useRouter();

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
            onClick={() => router.push("/")}
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
        </div>
      </nav>
      <div style={{ marginTop: "60px", textAlign: "center" }}>
        <img
          src="/mental-health-illustration.webp"
          alt="Serene Landscape"
          style={{ maxWidth: "30%", height: "auto" }}
        />
      </div>
      <div
        style={{
          marginTop: "100px",
          width: "90%",
          textAlign: "center",
          flexGrow: "1",
        }}
      >
        <h2
          style={{ color: "#000000", fontSize: "35px", marginBottom: "20px" }}
        >
          Understanding Mental Health
        </h2>
        <p>
          Mental health includes our emotional, psychological, and social
          well-being. It affects how we think, feel, and act. It also helps
          determine how we handle stress, relate to others, and make choices.
          Positive mental health is essential at every stage of life, from
          childhood and adolescence through adulthood.
        </p>
        <div style={{ marginTop: "30px" }}>
          <h3 style={{ color: "#000000", fontSize: "30px" }}>
            Resources for Help
          </h3>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <a
                href="https://www.mentalhealth.gov/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#548E87" }}
              >
                MentalHealth.gov
              </a>
              - For immediate help and resources.
            </li>
            <li>
              <a
                href="https://www.nami.org/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#548E87" }}
              >
                National Alliance on Mental Illness (NAMI)
              </a>
              - Support and education for individuals and families.
            </li>
            <li>
              <a
                href="https://www.who.int/teams/mental-health-and-substance-use"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#548E87" }}
              >
                World Health Organization: Mental Health
              </a>
              - Global resources and information.
            </li>
          </ul>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h3 style={{ color: "#000000", fontSize: "30px" }}>Self-Care Tips</h3>
          <p>
            Taking care of yourself physically can improve your mental health.
            Be sure to:
          </p>
          <ul>
            <li>Eat nutritious meals</li>
            <li>Get enough sleep</li>
            <li>Stay active</li>
            <li>Try to maintain a routine</li>
            <li>Stay connected with loved ones</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
