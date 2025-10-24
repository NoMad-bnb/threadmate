import express from "express";
import cors from "cors";
import pkg from "node-fetch";
const fetch = pkg.default;

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// اختبار المتغير البيئي
console.log("HF_API_KEY:", process.env.HF_API_KEY ? "FOUND" : "MISSING");

app.get("/", (req, res) => {
  res.json({ message: "ThreadMate backend is running successfully 🚀" });
});

app.post("/api/generate", async (req, res) => {
  const { prompt = "" } = req.body || {};
  if (!prompt.trim()) return res.json({ result: "Send a prompt text" });

  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/HuggingFaceTB/SmolLM3-3B",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ inputs: prompt })
      }
    );
    const data = await response.json();
    const text = Array.isArray(data) ? data[0]?.generated_text || "No output" : data?.generated_text || "No output";
    res.json({ result: text });
  } catch (e) {
    res.json({ result: "Error generating text" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
