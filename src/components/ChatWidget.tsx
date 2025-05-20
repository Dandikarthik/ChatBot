import React from 'react';
import { ChatProvider } from '../context/ChatContext';
import ChatBubble from './ChatBubble';
import ChatWindow from './ChatWindow';
import { useChat } from '../context/ChatContext';

const ChatWidgetContent: React.FC = () => {
  const { state } = useChat();
  
  return (
    <>
      <ChatBubble />
      <ChatWindow isVisible={state.isOpen} />
    </>
  );
};

const ChatWidget: React.FC = () => {
  return (
    <ChatProvider>
      <ChatWidgetContent />
    </ChatProvider>
  );
};

export default ChatWidget;