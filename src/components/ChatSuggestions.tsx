import React from 'react';
import { useChat } from '../context/ChatContext';

const suggestions = [
  "What services do you offer?",
  "How does your pricing work?",
  "Do you have a free trial?",
  "I need help with setup"
];

const ChatSuggestions: React.FC = () => {
  const { sendMessage } = useChat();
  
  return (
    <div className="p-4 border-t border-secondary-100 bg-white/50 backdrop-blur-sm">
      <p className="text-xs text-secondary-600 mb-2 font-medium">Quick questions:</p>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => sendMessage(suggestion)}
            className="text-xs bg-white hover:bg-secondary-50 text-secondary-700 py-2 px-4 rounded-xl transition-colors border border-secondary-200 shadow-sm hover:shadow-md"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatSuggestions