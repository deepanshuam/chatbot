import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const chatbotController = async (req, res) => {
  try {
    const { text } = req.body;

    // Handle welcome message
    if (!text || text.trim().toLowerCase() === "hi" || text.trim().toLowerCase() === "hello") {
      return res.status(200).json({ response: "Hello! How can I assist you today?" });
    }

    // Process other user messages with OpenAI API
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: text }
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    if (response.choices && response.choices[0]?.message?.content) {
      return res.status(200).json({ response: response.choices[0].message.content.trim() });
    } else {
      return res.status(500).json({ message: "No response from OpenAI." });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "An error occurred while processing your request.",
      error: err.message,
    });
  }
};

export default chatbotController;
