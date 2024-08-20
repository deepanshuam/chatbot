import User from '../models/user.models.js';

export function welcomeMessage(req, res) {
  res.json({ message: "Hi there! I'm here to help you connect with top-rated contractors. How can I assist you today?" });
}

export async function serviceInquiry(req, res) {
  try {
    const { name, email, phone, service } = req.body;
    const user = new User({ name, email, phone, service });
    await user.save();
    res.json({ message: "Thank you! What would you like to do next: fill in a form, call a contractor, or set an appointment?" });
  } catch (error) {
    res.status(500).json({ message: "Error processing your request", error });
  }
}

export async function actionSelection(req, res) {
  try {
    const { action } = req.body;
    // Add logic to handle the user's selected action
    res.json({ message: `You chose to ${action}. We will assist you further.` });
  } catch (error) {
    res.status(500).json({ message: "Error processing your request", error });
  }
}
