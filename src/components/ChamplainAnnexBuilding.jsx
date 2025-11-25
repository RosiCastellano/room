import React from 'react';
import { UnitBox, DonRoomBox, colors } from './SharedComponents';

const ChamplainAnnexBuilding = ({ currentFloor, setCurrentFloor }) => {
  const IntroPage = () => (
    <div style={{ padding: 'clamp(20px, 3vw, 40px)', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', color: '#1F2937' }}>
        Champlain Annex
      </h1>
      <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', textAlign: 'center', marginBottom: '40px', color: '#374151' }}>
        Community Division Proposal
      </h2>

      <div style={{ backgroundColor: 'white', padding: 'clamp(20px, 3vw, 30px)', borderRadius: '16px', marginBottom: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h3 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 'bold', marginBottom: '20px', color: '#1F2937' }}>
          Champlain Annex - Coming Soon
        </h3>
        <p style={{ fontSize: 'clamp(14px, 2vw, 18px)', lineHeight: '1.6', color: '#374151' }}>
          The community division proposal for Champlain Annex is currently being developed. Please provide floor plan data to complete this section.
        </p>
      </div>

      <div style={{ backgroundColor: '#EFF6FF', padding: '20px', borderRadius: '12px', marginTop: '40px', border: '2px solid #8B5CF6' }}>
        <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#374151', textAlign: 'center', marginBottom: '8px' }}>
          <strong>Status:</strong>
        </p>
        <p style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', color: '#1F2937', textAlign: 'center', fontWeight: 'bold' }}>
          Awaiting floor plan data
        </p>
      </div>
    </div>
  );

  // TODO: Add floor components as data becomes available
  // const FirstFloor = () => { ... }
  // const SecondFloor = () => { ... }
  // const ThirdFloor = () => { ... }

  return (
    <>
      {currentFloor === 'champlain-intro' && <IntroPage />}
      {/* Add more floor conditions here as you build them */}
    </>
  );
};

export default ChamplainAnnexBuilding;
