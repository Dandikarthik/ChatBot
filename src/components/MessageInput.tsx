import React, { useState, FormEvent } from 'react';
import { Send, Sparkles } from 'lucide-react';
import { useChat } from '../context/ChatContext';

const MessageInput: React.FC = () => {
  const [input, setInput] = useState('');
  const { sendMessage } = useChat();
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };
  
  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex items-center gap-2 border-t border-secondary-100 p-4 bg-white"
    >
      <button
        type="button"
        className="p-2 text-secondary-400 hover:text-secondary-600 hover:bg-secondary-50 rounded-xl transition-colors"
      >
        <Sparkles size={20} />
      </button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me anything..."
        className="flex-grow px-4 py-2 bg-secondary-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary-200 transition-shadow"
        data-testid="message-input"
      />
      <button 
        type="submit" 
        className={`
          p-3 rounded-xl
          ${input.trim() 
            ? 'bg-gradient-to-br from-secondary-500 to-primary-600 text-white hover:from-secondary-600 hover:to-primary-700' 
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'}
          transition-all duration-200 shadow-sm hover:shadow-md
        `}
        disabled={!input.trim()}
        data-testid="send-button"
      >
        <Send size={20} />
      </button>
    </form>
  );
};

export default MessageInput