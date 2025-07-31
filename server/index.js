import express from "express";
import cors from "cors";

const app = express();

app.use(cors()); // Enable CORS for all origins
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test-cors", (req, res) => {
  res.json({ message: "CORS working!" });
});

// Sample dummy ai route
app.post("/ai/generate", (req, res) => {
  const { code } = req.body;
  res.json({ 
    code, 
    response: "This is a dummy AI response for your code review",
    suggestions: ["Add proper error handling", "Consider adding comments", "Add type annotations"]
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
