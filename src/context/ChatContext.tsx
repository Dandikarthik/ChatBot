import React, { createContext, useContext, useReducer, ReactNode, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ChatState, ChatContextType, Message } from '../types/chat';
import { generateBotResponse } from '../utils/chatUtils';

type ChatAction = 
  | { type: 'OPEN_CHAT' }
  | { type: 'CLOSE_CHAT' }
  | { type: 'ADD_MESSAGE'; payload: Message }
  | { type: 'SET_TYPING'; payload: boolean }
  | { type: 'RESET_TIMER' };

const initialState: ChatState = {
  isOpen: false,
  messages: [
    {
      id: uuidv4(),
      content: 'Hello! 👋 How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ],
  isTyping: false,
  lastActivity: Date.now()
};

const INACTIVITY_TIMEOUT = 300000; // 5 minutes in milliseconds

const chatReducer = (state: ChatState, action: ChatAction): ChatState => {
  switch (action.type) {
    case 'OPEN_CHAT':
      return { ...state, isOpen: true, lastActivity: Date.now() };
    case 'CLOSE_CHAT':
      return { ...state, isOpen: false };
    case 'ADD_MESSAGE':
      return { 
        ...state, 
        messages: [...state.messages, action.payload],
        lastActivity: Date.now()
      };
    case 'SET_TYPING':
      return { ...state, isTyping: action.payload };
    case 'RESET_TIMER':
      return { ...state, lastActivity: Date.now() };
    default:
      return state;
  }
};

export const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  const openChat = () => {
    dispatch({ type: 'OPEN_CHAT' });
  };

  const closeChat = () => {
    dispatch({ type: 'CLOSE_CHAT' });
  };

  const resetTimer = useCallback(() => {
    dispatch({ type: 'RESET_TIMER' });
  }, []);

  const sendMessage = (content: string) => {
    const userMessage: Message = {
      id: uuidv4(),
      content,
      sender: 'user',
      timestamp: new Date()
    };
    
    dispatch({ type: 'ADD_MESSAGE', payload: userMessage });
    dispatch({ type: 'SET_TYPING', payload: true });
    
    setTimeout(() => {
      const botResponse = generateBotResponse(content);
      
      const botMessage: Message = {
        id: uuidv4(),
        content: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      dispatch({ type: 'ADD_MESSAGE', payload: botMessage });
      dispatch({ type: 'SET_TYPING', payload: false });
    }, 1000 + Math.random() * 2000);
  };

  // Auto-close chat after inactivity
  useEffect(() => {
    if (!state.isOpen) return;

    const checkInactivity = () => {
      const now = Date.now();
      if (now - state.lastActivity >= INACTIVITY_TIMEOUT) {
        closeChat();
      }
    };

    const timer = setInterval(checkInactivity, 60000); // Check every minute

    return () => clearInterval(timer);
  }, [state.isOpen, state.lastActivity]);

  return (
    <ChatContext.Provider value={{ state, openChat, closeChat, sendMessage, resetTimer }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  
  return context;
};