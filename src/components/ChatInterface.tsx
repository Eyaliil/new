import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import CatAvatar from './CatAvatar';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Meow! I'm your friendly cat encyclopedia. What would you like to know about cats? 😺",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isUser: true,
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Show typing indicator
    setIsTyping(true);

    // Simulate cat response (we'll replace this with actual API calls later)
    setTimeout(() => {
      const catResponse: Message = {
        id: messages.length + 2,
        text: "Meow! That's an interesting question. Let me think about it... 🐱",
        isUser: false,
      };
      setMessages(prev => [...prev, catResponse]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="chat-container">
      <div className="mb-20">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`chat-message ${message.isUser ? 'user-message' : 'cat-message'}`}
            >
              {!message.isUser && <CatAvatar isTyping={false} />}
              {message.text}
            </motion.div>
          ))}
        </AnimatePresence>
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="chat-message cat-message"
          >
            <CatAvatar isTyping={true} />
          </motion.div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="input-container">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything about cats..."
            className="chat-input"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="bg-cat-primary text-white p-3 rounded-full"
          >
            <PaperAirplaneIcon className="h-6 w-6" />
          </motion.button>
        </div>
      </form>
    </div>
  );
} 