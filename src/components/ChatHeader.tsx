import React from 'react';
import { X, Minus, Sparkles } from 'lucide-react';
import { useChat } from '../context/ChatContext';

const ChatHeader: React.FC = () => {
  const { closeChat } = useChat();
  
  return (
    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-secondary-500 to-primary-600">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div className="ml-3">
          <h3 className="font-medium text-white flex items-center gap-2">
            AI Copilot
            <span className="text-xs px-2 py-0.5 bg-white/20 rounded-full">v2.0</span>
          </h3>
          <p className="text-xs text-white/70">Ready to assist you ✨</p>
        </div>
      </div>
      <div className="flex space-x-2">
        <button 
          className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          onClick={closeChat}
          aria-label="Minimize chat"
        >
          <Minus size={18} />
        </button>
        <button 
          className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          onClick={closeChat}
          aria-label="Close chat"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader