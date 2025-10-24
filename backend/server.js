import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// اختبار بسيط
app.get("/", (req, res) => {
  res.json({ message: "ThreadMate backend is running successfully 🚀" });
});

// نجهز API لاحقاً
app.post("/api/generate", async (req, res) => {
  res.json({ result: "AI generation will be added here soon" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
