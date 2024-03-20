"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-br from-teal-300 to-peach-100"
      style={{
        fontFamily: "'Open Sans', sans-serif",
        backgroundImage: "url('/mentalinfo.webp')",
        backgroundSize: "cover",
      }}
    >
      <header className="w-full py-4">
        <nav className="flex items-center justify-between">
          {/* Include your navigation items here */}
        </nav>
      </header>

      <h1
        className="text-6xl font-bold text-center mb-12"
        style={{ color: "#548E87" }}
      >
        Welcome to RelaxIt
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="rounded-xl bg-white p-6 shadow-lg transition-transform hover:scale-105">
          <div onClick={() => handleClick("/stresscoper")}>
            <div className="flex items-center justify-between mb-4">
              {/* Your icon here */}

              <h2 className="text-xl font-semibold text-color">
                Stress-coping
              </h2>
              {/* Your icon here */}
            </div>
            <p className="mb-4 text-color">
              Discover soothing practices and routines to manage daily stress
              and improve your emotional well-being.
            </p>
          </div>
          <button
            onClick={() => handleClick("/redmore/readmorestress")}
            className="rounded-lg bg-teal-500 text-white px-4 py-2 transition-colors hover:bg-teal-600"
          >
            Read More
          </button>
        </div>

        {/* Card 2 */}
        <div className="rounded-xl bg-white p-6 shadow-lg transition-transform hover:scale-105">
          <div onClick={() => handleClick("/mindfulness")}>
            <div className="flex items-center justify-between mb-4">
              {/* Your icon here */}
              <h2 className="text-xl font-semibold text-color">Mindfulness</h2>
              {/* Your icon here */}
            </div>
            <p className="mb-4 text-color">
              Engage in mindful exercises that bring attention and awareness to
              the present moment for a peaceful mind.
            </p>
          </div>
          <button
            onClick={() => handleClick("/redmore/readmoremindfulness")}
            className="rounded-lg bg-teal-500 text-white px-4 py-2 transition-colors hover:bg-teal-600"
          >
            Read More
          </button>
        </div>

        {/* Card 3 */}
        <div className="rounded-xl bg-white p-6 shadow-lg transition-transform hover:scale-105">
          {" "}
          <div onClick={() => handleClick("/information")}>
            <div className="flex items-center justify-between mb-4">
              {/* Your icon here */}
              <h2 className="text-xl font-semibold text-color">
                Help Information
              </h2>
              {/* Your icon here */}
            </div>
            <p className="mb-4 text-color">
              Find valuable resources and support to assist you in navigating
              challenges of life. Learn about mental health and wellness.
            </p>
          </div>
          <button
            onClick={() => handleClick("/redmore")}
            className="rounded-lg bg-teal-500 text-white px-4 py-2 transition-colors hover:bg-teal-600"
          >
            Read More
          </button>
        </div>
      </div>

      {/* Footer or additional content goes here */}
    </main>
  );
}
