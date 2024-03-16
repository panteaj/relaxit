// stressCoper.tsx
"use client";
import { useRouter } from "next/navigation"; // Corrected import for useRouter
import { FaHome } from "react-icons/fa";

// Define the structure for each activity
interface Activity {
  name: string;
  description: string;
  route: string;
}
function Mindfulness() {
  const router = useRouter();

  const navigateTo = (route: string) => {
    router.push(route);
  };

  const handleClickBack = () => {
    router.back();
  };

  // List of activities
  const activities: Activity[] = [
    {
      name: "Visualization",
      description: "Find your happy place",
      route: "/mindfulness/visualization",
    },
    {
      name: "Writing",
      description: "Write down your senses",
      route: "/mindfulness/writing",
    },
    {
      name: "Drawing",
      description: "Draw from your sensesations",
      route: "/mindfulness/drawing",
    },
    {
      name: "Listening",
      description: "Use your ears to focus",
      route: "/mindfulness/listening",
    },
    {
      name: "Eating",
      description: "Focus on your food",
      route: "/mindfulness/eating",
    },
  ];

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
            onClick={() => navigateTo("/")}
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
      <div style={{ marginTop: "100px", width: "100%", textAlign: "center" }}>
        <h1 style={{ color: "#000000", fontSize: "40px" }}>
          Choose Your Activity
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            marginTop: "20px",
            padding: "0 20px",
          }}
        >
          {activities.map((activity) => (
            <div
              key={activity.name}
              style={{
                backgroundColor: "#A0F6D2",
                borderRadius: "10px",
                padding: "20px",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
              onClick={() => navigateTo(activity.route)}
            >
              <h2 style={{ color: "#000000", fontSize: "24px" }}>
                {activity.name}
              </h2>
              <p style={{ color: "#000000" }}>{activity.description}</p>
            </div>
          ))}
        </div>
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
export default Mindfulness;
