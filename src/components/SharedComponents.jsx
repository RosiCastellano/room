import React from 'react';

export const colors = {
  gold: '#FEF3C7',
  goldDark: '#D4AF37',
  bronze: '#FED7AA',
  bronzeDark: '#CD7F32',
  silver: '#E5E5E5',
  silverDark: '#8B8B8B',
  donRoom: '#D1D5DB'
};

export const UnitBox = ({ number, color }) => (
  <div style={{
    width: '140px',
    height: '140px',
    backgroundColor: 'white',
    border: '4px solid #1F2937',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  }}>
    <div style={{
      fontSize: '48px',
      fontWeight: 'bold',
      color: '#1F2937'
    }}>
      {number}
    </div>
    <div style={{
      width: '40px',
      height: '40px',
      backgroundColor: color,
      borderRadius: '8px',
      marginTop: '8px'
    }} />
  </div>
);

export const DonRoomBox = ({ number }) => (
  <div style={{
    width: '140px',
    height: '140px',
    backgroundColor: colors.donRoom,
    border: '4px solid #1F2937',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  }}>
    <div style={{
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#6B7280'
    }}>
      {number}
    </div>
    <div style={{
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#6B7280',
      marginTop: '4px'
    }}>
      DON
    </div>
  </div>
);
