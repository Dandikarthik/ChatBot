import React from 'react';
import { Message as MessageType } from '../types/chat';
import { formatTimestamp } from '../utils/chatUtils';

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const isBot = message.sender === 'bot';
  
  return (
    <div 
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}
      data-testid={`message-${message.id}`}
    >
      <div 
        className={`
          max-w-[80%] px-4 py-3 rounded-2xl shadow-message
          ${isBot 
            ? 'bg-white border border-secondary-100 text-gray-800' 
            : 'bg-gradient-to-br from-secondary-500 to-primary-600 text-white'}
        `}
      >
        <div className="text-sm leading-relaxed">{message.content}</div>
        <div className={`text-[10px] mt-1 ${isBot ? 'text-gray-400' : 'text-white/70'}`}>
          {formatTimestamp(message.timestamp)}
        </div>
      </div>
    </div>
  );
};

export default Message