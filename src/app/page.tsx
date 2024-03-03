"use client";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const handleClick1 = () => {
    router.push("/stresscoper");
  };
  const handleClick2 = () => {
    router.push("/mindfulness");
  };
  const handleClick3 = () => {
    router.push("/information");
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-100"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* Removed the Get started by editing src/app/page.tsx part */}
      </div>

      {/* Big welcome text */}
      <h1 className="text-5xl text-center mb-8">Welcome to RelaxIT</h1>

      {/* Square menu */}
      <div className="bg-yellow-100 rounded-lg p-10 text-center">
        <h2 className="text-2xl mb-4">What would you want to do?</h2>
        <div className="flex flex-col gap-4">
          <a
            onClick={handleClick1}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-green-300 hover:bg-green-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            style={{ backgroundColor: "#548E87" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`px-4 py-2 text-white rounded-lg`}>
              Stress-coper
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[50ch] text-sm opacity-50`}>
              Learn activities to cope with stress!
            </p>
          </a>

          <a
            onClick={handleClick2}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-green-300 hover:bg-green-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            style={{ backgroundColor: "#548E87" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`px-4 py-2 text-white rounded-lg`}>
              Mindfulness
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[50ch] text-sm opacity-50`}>
              Do some mindfulness!
            </p>
          </a>
          <a
            onClick={handleClick3}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-green-300 hover:bg-green-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            style={{ backgroundColor: "#548E87" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`px-4 py-2 text-white rounded-lg`}>
              Help information
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[50ch] text-sm opacity-50`}>
              Get some tips and information about help services!
            </p>
          </a>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {/* Links to Next.js documentation, learning resources, templates, and deployment */}
      </div>
    </main>
  );
}
