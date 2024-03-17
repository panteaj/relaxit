// stressCoper.tsx
"use client";
import { useRouter } from "next/navigation";
import {
  FaBrain,
  FaClock,
  FaHandHoldingHeart,
  FaHeartbeat,
  FaHome,
  FaLeaf,
} from "react-icons/fa";

export default function MentalHealthInfo() {
  const router = useRouter();

  return (
    <main
      style={{
        backgroundColor: "#FBFFE0", // Soft background color from the mockup
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
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
          maxWidth: "1200px",
          width: "100%",
          marginTop: "100px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            color: "#004d40",
            textAlign: "center",
          }}
        >
          Mental health information
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "18px",
            marginTop: "20px",
          }}
        >
          Balancing academic and personal life is key to maintaining mental
          wellness. Understand your mind, seek growth, and nurture resilience.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <InfoSection
            icon={<FaLeaf color="#66BB6A" size="50px" />}
            title="Establish a Routine"
            text="Find balance with a structured schedule to navigate the complexities of student life."
          />
          <InfoSection
            icon={<FaClock color="#66BB6A" size="50px" />}
            title="Time Management"
            text="Allocate time for studies, rest, and social activities to build a harmonious life."
          />
          <InfoSection
            icon={<FaBrain color="#66BB6A" size="50px" />}
            title="Mindfulness"
            text="Practice mindfulness to enhance focus and reduce stress."
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "40px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: "30px", color: "#004d40", margin: "20px 0" }}>
          Where to Find Help
        </h3>
        <p>
          If you or someone you know is struggling with mental health, there are
          many resources available:
        </p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <FaHeartbeat />{" "}
            <a
              href="https://www.mentalhealth.gov/get-help/immediate-help"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#548E87" }}
            >
              MentalHealth.gov - Immediate Help
            </a>
          </li>
          <li>
            <FaHandHoldingHeart />{" "}
            <a
              href="https://www.nami.org/help"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#548E87" }}
            >
              National Alliance on Mental Illness - HelpLine
            </a>
          </li>
          <li>
            <FaBrain />{" "}
            <a
              href="https://www.samhsa.gov/find-help"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#548E87" }}
            >
              SAMHSA - Find Help
            </a>
          </li>
        </ul>

        <h3 style={{ fontSize: "30px", color: "#004d40", margin: "20px 0" }}>
          Tips for Everyday Mental Wellness
        </h3>
        <p>
          Simple daily practices can significantly impact your mental health:
        </p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>Maintain a balanced diet and hydration</li>
          <li>Ensure adequate sleep each night</li>
          <li>Incorporate physical activity into your routine</li>
          <li>Practice mindfulness or meditation</li>
          <li>Set realistic goals and break tasks into smaller steps</li>
          <li>Stay connected with friends and family</li>
        </ul>
      </div>
    </main>
  );
}

function InfoSection({
  icon,
  title,
  text,
}: {
  icon: JSX.Element;
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        width: "300px",
        margin: "0 20px",
        textAlign: "center",
      }}
    >
      <div>{icon}</div>
      <h3
        style={{
          fontSize: "24px",
          color: "#000000",
          marginTop: "10px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "16px",
        }}
      >
        {text}
      </p>
    </div>
  );
}
