export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ChatState {
  isOpen: boolean;
  messages: Message[];
  isTyping: boolean;
  lastActivity: number;
}

export interface ChatContextType {
  state: ChatState;
  openChat: () => void;
  closeChat: () => void;
  sendMessage: (content: string) => void;
  resetTimer: () => void;
}