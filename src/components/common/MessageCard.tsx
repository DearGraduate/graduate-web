// src/components/MessageCard.tsx
import React from 'react';

export interface MessageCardProps {
  author: string;
  message: string;
  imageUrl: string;
}

export const defaultMessages: MessageCardProps[] = [
  {
    author: '이름',
    message: '메세지',
    imageUrl: '/icons/img_pic.png',
  },
  {
    author: '이름',
    message: '메세지',
    imageUrl: '/icons/img_pic.png',
  },
  {
    author: '이름',
    message: '메세지',
    imageUrl: '/icons/img_pic.png',
  },
  {
    author: '이름',
    message: '메세지',
    imageUrl: '/icons/img_pic.png',
  },

];

const MessageCard: React.FC<MessageCardProps> = ({ author, message, imageUrl }) => {
  return (
    <div style={{
      width: '160px',
      backgroundColor: 'white',
      borderRadius: '20px',
      padding: '12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    }}>
      <div style={{ alignSelf: 'flex-start', fontWeight: 'bold', marginBottom: '8px' }}>{author}</div>
      <img
        src={imageUrl}
        alt=""
        style={{ width: '100%', borderRadius: '12px', marginBottom: '8px' }}
      />
      <div style={{ fontSize: '14px', textAlign: 'center', color: '#333' }}>{message}</div>
    </div>
  );
};

export default MessageCard;
