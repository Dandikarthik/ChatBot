import React, { useEffect, useRef } from 'react';
import Message from './Message';
import { useChat } from '../context/ChatContext';

const MessageList: React.FC = () => {
  const { state } = useChat();
  const bottomRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [state.messages]);
  
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {state.messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
      
      {state.isTyping && (
        <div className="flex justify-start mb-4">
          <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-bl-none px-4 py-2">
            <div className="flex space-x-1 items-center">
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        </div>
      )}
      
      <div ref={bottomRef} />
    </div>
  );
};

export default MessageList;