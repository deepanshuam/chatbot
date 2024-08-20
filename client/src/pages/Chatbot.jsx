import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ChatBot = () => {
  // states
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");
  const messageEndRef = useRef(null); // Ref for scrolling to bottom

  // Add welcome message when component mounts
  useEffect(() => {
    const welcomeMessage = {
      role: "bot",
      content: "Hi there! I'm here to help you connect with top-rated contractors. How can I assist you today?"
    };
    setMessages([welcomeMessage]); // Initialize messages with the welcome message
  }, []);

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userMessage = { role: "user", content: text };
    setMessages([...messages, userMessage]); // Add user message to chat history
    setText(""); // Clear input field

    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/openai/faq", // Backend endpoint
        { text }
      );
      const botMessage = { role: "bot", content: data.response }; // Bot response
      setMessages([...messages, userMessage, botMessage]); // Add bot message to chat history
      scrollToBottom(); // Scroll to bottom after adding message
    } catch (err) {
      console.error(err);
      if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  // Scroll to bottom function
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Initial scroll to bottom
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col w-full max-w-2xl p-4 m-auto bg-gray-100 border rounded-lg shadow-lg h-[80vh]">
      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <div className="flex-1 overflow-auto mb-4 p-4 bg-white border rounded-lg shadow-sm">
        <div className="flex flex-col space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg ${
                msg.role === "user" ? "bg-blue-100 text-blue-900" : "bg-gray-100 text-gray-900"
              }`}
            >
              <p>{msg.content}</p>
            </div>
          ))}
          <div ref={messageEndRef} /> {/* To enable scrolling to bottom */}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex items-center">
        <textarea
          placeholder="Type your message here..."
          className="w-full p-3 border rounded-lg resize-none"
          rows="2"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="ml-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Send
        </button>
      </form>

      <p className="mt-4">
        Not this tool?{" "}
        <Link to="/" className="text-blue-500 hover:underline">
          GO BACK
        </Link>
      </p>
    </div>
  );
};

export default ChatBot;

