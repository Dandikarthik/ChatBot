import React from 'react';
import { Sparkles } from 'lucide-react';
import { useChat } from '../context/ChatContext';

const ChatBubble: React.FC = () => {
  const { state, openChat } = useChat();
  const unreadMessages = state.messages.length > 1;
  
  return (
    <div className="fixed bottom-4 right-4 md:right-8 flex flex-col items-center gap-2">
      <button
        onClick={openChat}
        className={`
          w-14 h-14 rounded-2xl
          flex items-center justify-center
          text-white 
          shadow-chat
          transition-all duration-300 ease-in-out
          ${state.isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}
          hover:scale-110
          bg-gradient-to-br from-secondary-500 via-secondary-600 to-primary-600
          hover:from-secondary-600 hover:via-secondary-700 hover:to-primary-700
          animate-pulse-glow
          z-50
        `}
        aria-label="Open chat"
        data-testid="chat-bubble"
      >
        <Sparkles className="w-6 h-6 transform rotate-12" />
        
        {unreadMessages && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center text-xs font-bold animate-bounce-slow shadow-glow">
            {state.messages.length - 1}
          </span>
        )}
      </button>
      <span className={`
        text-sm font-medium text-secondary-600 bg-white px-3 py-1 rounded-full shadow-sm
        transition-all duration-300
        ${state.isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}
      `}>
        Ask
      </span>
    </div>
  );
};

export default ChatBubble