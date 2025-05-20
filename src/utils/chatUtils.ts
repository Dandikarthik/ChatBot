import { Message } from '../types/chat';

// Simple bot response generator
export const generateBotResponse = (userMessage: string): string => {
  const lowerCaseMessage = userMessage.toLowerCase();
  
  // Simple pattern matching for responses
  if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
    return 'Hello there! How can I assist you today?';
  } else if (lowerCaseMessage.includes('help')) {
    return 'I\'d be happy to help. Could you provide more details about what you need assistance with?';
  } else if (lowerCaseMessage.includes('pricing') || lowerCaseMessage.includes('cost')) {
    return 'Our pricing plans start at $10/month for the basic plan. Would you like me to share more details about our pricing options?';
  } else if (lowerCaseMessage.includes('feature') || lowerCaseMessage.includes('capabilities')) {
    return 'Our product includes messaging, analytics, customer data management, and automation tools. Which feature would you like to know more about?';
  } else if (lowerCaseMessage.includes('thank')) {
    return 'You\'re welcome! Is there anything else I can help you with?';
  } else if (lowerCaseMessage.includes('bye') || lowerCaseMessage.includes('goodbye')) {
    return 'Goodbye! Feel free to reach out if you have any more questions.';
  }
  
  // Default responses
  const defaultResponses = [
    'Thanks for your message. How else can I help you?',
    'I understand. Could you tell me more about your needs?',
    'That\'s an interesting point. Would you like more information about our services?',
    'I see. Have you considered our premium features that might address this?',
    'I appreciate your input. Is there anything specific you\'re looking for?'
  ];
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};

// Format timestamp for messages
export const formatTimestamp = (date: Date): string => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

// Get initials from a name (for avatar fallback)
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(part => part.charAt(0))
    .join('')
    .toUpperCase()
    .substring(0, 2);
};