import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { getPersonalityResponse, defaultCatPersonality } from '../types/CatPersonality';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: `${getPersonalityResponse("hello")} I'm ${defaultCatPersonality.name}, your friendly feline encyclopedia. What would you like to know about cats?`,
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

    // Simulate cat response with personality
    setTimeout(() => {
      const catResponse: Message = {
        id: messages.length + 2,
        text: getPersonalityResponse(input),
        isUser: false,
      };
      setMessages(prev => [...prev, catResponse]);
      setIsTyping(false);
    }, 1500);
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
              <p className="text-sm leading-relaxed">{message.text}</p>
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
            <p className="text-sm leading-relaxed">Typing...</p>
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