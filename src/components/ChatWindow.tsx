import React, { useEffect } from 'react';
import { useChat } from '../context/ChatContext';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import ChatSuggestions from './ChatSuggestions';

interface ChatWindowProps {
  isVisible: boolean;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ isVisible }) => {
  const { resetTimer } = useChat();

  useEffect(() => {
    if (!isVisible) return;

    const handleActivity = () => {
      resetTimer();
    };

    const chatWindow = document.querySelector('[data-testid="chat-window"]');
    if (chatWindow) {
      chatWindow.addEventListener('mousemove', handleActivity);
      chatWindow.addEventListener('click', handleActivity);
      chatWindow.addEventListener('keydown', handleActivity);
    }

    return () => {
      if (chatWindow) {
        chatWindow.removeEventListener('mousemove', handleActivity);
        chatWindow.removeEventListener('click', handleActivity);
        chatWindow.removeEventListener('keydown', handleActivity);
      }
    };
  }, [isVisible, resetTimer]);

  return (
    <div 
      className={`
        fixed bottom-24 right-4 md:right-8 w-[400px] max-w-[calc(100vw-32px)]
        bg-white rounded-2xl shadow-chat
        overflow-hidden flex flex-col
        transform transition-all duration-300 ease-in-out
        ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'}
        h-[600px] max-h-[80vh] z-50
        border border-primary-100
      `}
      data-testid="chat-window"
    >
      <ChatHeader />
      <MessageList />
      <ChatSuggestions />
      <MessageInput />
    </div>
  );
};

export default ChatWindow;