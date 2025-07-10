// src/pages/MyAlbum.tsx
import React from 'react';
import MessageCard, { defaultMessages } from '../components/common/MessageCard';

const MyAlbum: React.FC = () => {
  return (
    <div style={{
      backgroundColor: '#4b5c45',
      minHeight: '100vh',
      padding: '24px',
      color: 'white',
      fontFamily: 'sans-serif',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ border: '1px solid white', padding: '4px 8px', borderRadius: '6px', fontSize: '12px' }}>D-23</div>
        <div style={{ fontSize: '20px' }}>⚙️</div>
      </div>

      <h1 style={{ marginTop: '20px', fontSize: '24px', fontWeight: 'bold' }}>박성민 의<br />졸업 축하 앨범</h1>
      <p style={{ marginTop: '8px', fontSize: '14px' }}>드디어...졸업한다..!</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: '16px',
        marginTop: '32px',
        justifyItems: 'center',
      }}>
        {defaultMessages.map((msg, idx) => (
          <MessageCard key={idx} {...msg} />
        ))}
      </div>

      <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <button style={{
          backgroundColor: '#bce3c2',
          color: 'black',
          padding: '12px',
          borderRadius: '24px',
          border: 'none',
          fontWeight: 'bold'
        }}>
          나에게 축하글 작성하기
        </button>
        <button style={{
          backgroundColor: '#bce3c2',
          color: 'black',
          padding: '12px',
          borderRadius: '24px',
          border: 'none',
          fontWeight: 'bold'
        }}>
          나의 졸업 앨범 공유하기
        </button>
      </div>
    </div>
  );
};

export default MyAlbum;
