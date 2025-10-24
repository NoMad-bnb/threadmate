import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

console.log("HF_API_KEY:", process.env.HF_API_KEY ? "FOUND" : "MISSING");

app.get("/", (req, res) => {
  res.json({ message: "ThreadMate backend is running successfully 🚀" });
});

app.post("/api/generate", async (req, res) => {
  const { prompt = "" } = req.body || {};
  if (!prompt.trim()) return res.json({ result: "Send a prompt text" });

  try {
    const response = await fetch(
    "https://api-inference.huggingface.co/models/google/flan-t5-base",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ inputs: prompt, options: { wait_for_model: true } })
      }
    );

    const text = await response.text();
    console.log("Raw HF response:", text);

    // Directly return the raw text instead of forcing JSON parsing
    res.json({ result: text });
  } catch (error) {
    console.error("Error:", error);
    res.json({ result: "Error generating text" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
