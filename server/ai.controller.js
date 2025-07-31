import { generateContent } from "./ai.service.js";

export const getresponse = async (req, res) => {
  try {
    const prompt = req.query.prompt || req.body.prompt;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const generatedText = await generateContent(prompt);

    return res.status(200).json({
      response: generatedText,
    });
  } catch (error) {
    console.error("Error generating content:", error);

    return res.status(500).json({
      error: "Failed to generate content",
      details: error.message || error.toString(),
    });
  }
};
