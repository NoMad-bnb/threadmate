import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "ThreadMate backend is running successfully 🚀" });
});

app.post("/api/generate", async (req, res) => {
  const { prompt = "" } = req.body || {};
  const cleaned = String(prompt).trim();
  const mock = cleaned
    ? `Draft:\n${cleaned}\n\nImproved:\n${cleaned} ✅`
    : "Send a prompt text";
  res.json({ result: mock });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
