// stressCoper.tsx
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Updated to 'next/router' for useRouter hook
import {
  FaBrain,
  FaClock,
  FaHandHoldingHeart,
  FaHeartbeat,
  FaHome,
  FaLeaf,
  FaPeopleArrows,
  FaRunning,
  FaSmile,
  FaUserFriends,
} from "react-icons/fa";

export default function MentalHealthInfo() {
  const router = useRouter();

  const mentalHealthLinks = {
    info: "https://www.helsenorge.no/mental-health", // Replace with the actual link for mental health information
    support: "https://www.mentalhelse.no", // Replace with the actual link for mental health support
    counseling: "https://www.studentsamskipnaden.no/counseling", // Replace with the actual link for student counseling services
    academicSupport: "https://www.university.no/academic-support", // Replace with the actual link for academic support
    // Add more links as necessary
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FaHome
            onClick={() => router.push("/")}
            style={{ color: "#FFFFFF", cursor: "pointer", fontSize: "45px" }}
          />
          <h1 style={{ fontSize: "45px", margin: "0", color: "#FFFFFF" }}>
            RelaxIt
          </h1>
          <div style={{ color: "#FFFFFF", fontSize: "45px" }}>
            {" "}
            {/* Empty div for alignment purposes */}{" "}
          </div>
        </div>
      </nav>
      <header
        style={{
          marginTop: "5rem",
          width: "100%",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <h1 style={{ fontSize: "2rem", color: "#333" }}>
          Mental health information
        </h1>
      </header>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          width: "80%",
          marginTop: "2rem",
        }}
      >
        {/* Left Column */}
        <div style={{ width: "45%", minWidth: "300px" }}>
          <div style={{ margin: "1rem 0" }}>
            <FaBrain style={{ fontSize: "40px", color: "#6A5ACD" }} />
            <h2 style={{ color: "#6A5ACD" }}>Understanding Mental Health</h2>
            <p style={{ textAlign: "justify" }}>
              Mental health shapes our thinking, feelings, and behavior.
              Recognizing signs of anxiety and depression is crucial for seeking
              help. It’s about understanding that mental well-being is essential
              for living a balanced and fulfilling life. <br />
              <span style={{ textDecoration: "none", color: "#6A5ACD" }}>
                {" "}
                <Link href={mentalHealthLinks.info}>Learn more</Link>
              </span>
            </p>
          </div>
          <div style={{ margin: "1rem 0" }}>
            <FaPeopleArrows style={{ fontSize: "40px", color: "#20B2AA" }} />
            <h2 style={{ color: "#20B2AA" }}>Strategies for Coping</h2>
            <p style={{ textAlign: "justify" }}>
              Building resilience involves open communication, self-paced work,
              self-compassion, and utilizing coping strategies like breathing
              exercises and structured studying.
              <span style={{ textDecoration: "none", color: "#20B2AA" }}>
                <Link href={mentalHealthLinks.info}>Coping strategies</Link>
              </span>
            </p>
          </div>
          <div style={{ margin: "1rem 0" }}>
            <FaSmile style={{ fontSize: "40px", color: "#DA70D6" }} />
            <h2 style={{ color: "#DA70D6" }}>Actionable Advice</h2>
            <p style={{ textAlign: "justify" }}>
              Engaging in mindfulness, relaxation techniques, hobbies, and
              volunteering can help find balance. It is important to know how to
              seek and accept help, nurturing your social connections and
              personal well-being.
              <span style={{ textDecoration: "none", color: "#DA70D6" }}>
                {" "}
                <Link href={mentalHealthLinks.info}>
                  {" "}
                  Mindfulness practices
                </Link>
              </span>
            </p>
          </div>
          <div style={{ margin: "1rem 0" }}>
            <FaClock style={{ fontSize: "40px", color: "#6495ED" }} />
            <h2 style={{ color: "#6495ED" }}>Navigating Failures</h2>
            <p style={{ textAlign: "justify" }}>
              Learn to view failures as opportunities for learning and growth.
              Developing a constructive approach to setbacks can lead to
              resilience and success.
              <span style={{ textDecoration: "none", color: "#6495ED" }}>
                {" "}
                <Link href={mentalHealthLinks.support}>
                  Dealing with setbacks
                </Link>
              </span>
            </p>
          </div>
          <div style={{ margin: "1rem 0" }}>
            {" "}
            <FaHandHoldingHeart
              style={{ fontSize: "40px", color: "#FFD700" }}
            />
            <h2 style={{ color: "#FFD700" }}>Resources and Support</h2>
            <p style={{ textAlign: "justify" }}>
              Campus resources such as counseling services, support groups, and
              academic help centers can provide valuable assistance. Do not
              hesitate to reach out for professional help if needed.
              <span style={{ textDecoration: "none", color: "#FFD700" }}>
                <Link href={mentalHealthLinks.counseling}>
                  {" "}
                  Counseling services
                </Link>{" "}
              </span>{" "}
              <span style={{ textDecoration: "none", color: "#FFD700" }}>
                {" "}
                <Link href={mentalHealthLinks.support}> Support groups</Link>
              </span>
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ width: "45%", minWidth: "300px" }}>
          <div style={{ margin: "1rem 0" }}>
            <FaUserFriends style={{ fontSize: "2rem", color: "#FFA07A" }} />
            <h2 style={{ color: "#FFA07A" }}>Social & Community</h2>
            <p style={{ textAlign: "justify" }}>
              Building a supportive community and engaging in social activities
              can significantly impact mental health. Connecting with peers and
              mentors can provide a sense of belonging and reduce feelings of
              isolation. <br />
            </p>
          </div>
          <div style={{ margin: "1rem 0" }}>
            <FaHeartbeat style={{ fontSize: "40px", color: "#FF6347" }} />
            <h2 style={{ color: "#FF6347" }}>Common Struggles</h2>
            <p style={{ textAlign: "justify" }}>
              Throughout studies and life we may encounter group work
              difficulties, academic pressures, job-hunting stress, exam fears,
              and self-worth issues. Sharing experiences can validate these
              struggles and foster a sense of community.
              <span style={{ textDecoration: "none", color: "#FF6347" }}></span>
            </p>
          </div>
          <div style={{ margin: "1rem 0" }}>
            <FaLeaf style={{ fontSize: "40px", color: "#32CD32" }} />
            <h2 style={{ color: "#32CD32" }}>Empowerment</h2>
            <p style={{ textAlign: "justify" }}>
              Empowerment comes from self-reflection, setting achievable goals,
              and celebrating small successes. Reflect on your journey,
              understand your worth, and strive for continuous personal growth.
              <span style={{ textDecoration: "none", color: "#32CD32" }}>
                {" "}
                <Link href={mentalHealthLinks.info}>Goal setting</Link>
              </span>
            </p>
          </div>
          <div style={{ margin: "1rem 0" }}>
            <FaRunning style={{ fontSize: "40px", color: "#FFA07A" }} />
            <h2 style={{ color: "#FFA07A" }}>Digital Wellbeing</h2>
            <p style={{ textAlign: "justify" }}>
              Digital burnout is real. Take time to unplug and foster real-world
              connections. Balance your online activities with offline
              experiences to maintain a healthy digital lifestyle.
              <span style={{ textDecoration: "none", color: "#FFA07A" }}>
                <Link href={mentalHealthLinks.support}>
                  Managing digital stress
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
