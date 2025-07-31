import React, { useState, useCallback } from "react";
import Prism from "prismjs";
import axios from "axios";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx.min.js";
import Editor from "react-simple-code-editor";

// Color Palette for Emotional Impact:
// - Blue: trust, intelligence, clarity (primary navigation, accent, focus)
// - Subtle gradients: sophistication, visual depth
// - White & slight off-white: cleanliness, professionalism
// - Light green: positive/empathy signals for success, orange for warning/attention

function App() {
  const [code, setCode] = useState(
    `function sum(a, b) {\n  return a + b;\n}`
  );
  const [loading, setLoading] = useState(false);
  const [reviewResult, setReviewResult] = useState(null);
  const [error, setError] = useState(null);

  // For accessible, concise SR alerts
  const [announce, setAnnounce] = useState("");

  const reviewCode = useCallback(async () => {
    setLoading(true);
    setAnnounce("Review started.");
    setError(null);
    setReviewResult(null);
    try {
      const response = await axios.post(
        "http://localhost:3000/ai/generate",
        { code }
      );
      setReviewResult(response.data);
      setAnnounce("Review completed.");
    } catch (err) {
      setError("Failed to review code. Please try again.");
      setAnnounce("Review failed.");
    } finally {
      setLoading(false);
    }
  }, [code]);

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-tr from-blue-50 via-white to-blue-100 transition-colors duration-300">
      {/* Header/NAV */}
      <nav className="flex justify-between items-center px-4 md:px-14 py-4 bg-white/90 shadow-lg backdrop-blur z-10">
        <span className="flex items-center gap-2 text-2xl font-extrabold text-blue-800 tracking-tight select-none">
          <svg
            aria-hidden="true"
            className="h-7 w-7 text-blue-700"
            fill="none"
            viewBox="0 0 32 32"
          >
            <rect width="32" height="32" rx="8" fill="currentColor" />
            <text
              x="16"
              y="21"
              textAnchor="middle"
              fontSize="18"
              fontFamily="monospace"
              fill="white"
            >
              {"</>"}
            </text>
          </svg>
          CodeReview.AI
        </span>
        <a
          href="https://github.com/ShaikhSamir786"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-700 font-medium px-3 py-2 rounded-md hover:bg-blue-50 active:bg-blue-100 focus-visible:ring focus-visible:ring-blue-400 outline-none transition"
        >
          GitHub
        </a>
      </nav>
      {/* Live region for SR feedback */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        role="status"
      >
        {announce}
      </div>
      {/* Main Layout */}
      <main className="flex flex-col md:flex-row w-full max-w-6xl mx-auto mt-6 md:mt-10 gap-7 px-2 md:px-8 transition-all duration-300">
        {/* Left: Code Editor & CTA */}
        <section
          aria-label="Code Editor"
          className="flex-1 flex flex-col min-w-0 rounded-3xl bg-white/80 shadow-xl border-t-2 border-blue-300 p-2 md:p-7 transition"
        >
          <label
            htmlFor="codeInput"
            className="text-lg md:text-xl font-semibold text-blue-800 mb-2 sr-only"
          >
            Your Code
          </label>
          <div className="relative flex-1 rounded-2xl border border-blue-200 bg-gradient-to-tl from-blue-50 to-white focus-within:ring-2 focus-within:ring-blue-300 shadow-inner transition">
            <Editor
              id="codeInput"
              value={code}
              onValueChange={setCode}
              highlight={(code) =>
                Prism.highlight(
                  code,
                  Prism.languages.javascript,
                  "javascript"
                )
              }
              padding={20}
              spellCheck={false}
              aria-label="Code editor"
              className="bg-transparent outline-none w-full h-64 md:h-96 text-base leading-normal text-blue-900"
              style={{
                fontFamily: '"Fira Code", monospace',
                minHeight: "16rem",
                background: "transparent",
              }}
            />
            {/* Subtle overlay gradient for visual polish */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-8 rounded-t-2xl bg-gradient-to-b from-blue-100/60 to-transparent" />
          </div>
          <button
            onClick={reviewCode}
            disabled={loading}
            aria-label="Run code review"
            className="mt-6 self-end px-7 py-3 rounded-xl text-base font-semibold bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 transition-all duration-300 hover:scale-[1.03] active:scale-100 disabled:opacity-60 disabled:cursor-wait"
          >
            <span className="flex items-center gap-2">
              {loading && (
                <span role="status" className="flex items-center">
                  {/* Animated spinner */}
                  <svg
                    className="animate-spin h-5 w-5 text-white mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-30"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-70"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 01-8 8z"
                    ></path>
                  </svg>
                  <LoadingTimer />
                </span>
              )}
              {loading ? "Reviewing..." : "Review Code"}
            </span>
          </button>
          {/* Error Message */}
          {error && (
            <div className="mt-3 px-4 py-2 rounded-md text-sm bg-red-50 text-red-700 border-l-4 border-red-400 shadow transition">
              {error}
            </div>
          )}
        </section>
        {/* Right: Review Output */}
        <aside
          aria-label="Review Output"
          className="w-full md:w-[36%] min-w-[260px] max-w-[480px] rounded-3xl border-l-2 border-blue-400 shadow-xl bg-gradient-to-bl from-blue-100/90 to-white p-2 md:p-6 flex flex-col transition"
        >
          <h2 className="font-semibold text-blue-800 text-lg mb-2 tracking-tight px-1">
            Review Output
          </h2>
          <div className="flex-1 overflow-auto px-1">
            {!reviewResult && !error && !loading && (
              <p className="text-blue-700 text-base opacity-70 mt-6 text-center">
                Need a second pair of eyes? <br />
                <span className="text-blue-600 font-medium">Paste your code and <span className="underline underline-offset-2">review now.</span></span>
              </p>
            )}
            {/* Live animated loading shimmer */}
            {loading && (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <div className="w-14 h-14 mb-3">
                  <div className="animate-spin rounded-full h-14 w-14 border-b-2 border-blue-500"></div>
                </div>
                <div className="w-40 h-5 rounded bg-blue-200 animate-pulse mb-2"></div>
                <div className="w-32 h-4 rounded bg-blue-100 animate-pulse"></div>
              </div>
            )}
            {reviewResult && (
              <pre className="whitespace-pre-wrap mt-3 text-blue-900 text-sm font-medium bg-blue-50/80 rounded p-3 border border-blue-200 max-h-[45vh] overflow-y-auto shadow-inner">
                {typeof reviewResult === "string"
                  ? reviewResult
                  : JSON.stringify(reviewResult, null, 2)}
              </pre>
            )}
            {error && (
              <p className="text-red-700 text-base mt-6">{error}</p>
            )}
          </div>
        </aside>
      </main>
      {/* Footer */}
      <footer className="text-xs text-center text-blue-800 opacity-70 py-6 mt-8 select-none">
        &copy; {new Date().getFullYear()} CodeReview.AI · Designed for efficiency and clarity
      </footer>
    </div>
  );
}

// Animated timer next to spinner
function LoadingTimer() {
  const [seconds, setSeconds] = React.useState(0);
  React.useEffect(() => {
    setSeconds(0);
    let timer;
    timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <span className="ml-1 tabular-nums" aria-live="polite" aria-label="Seconds elapsed">
      {`${seconds}s`}
    </span>
  );
}

export default App;
