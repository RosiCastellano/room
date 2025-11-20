import React from 'react';
import { UnitBox, DonRoomBox, colors } from './SharedComponents';

const SouthBuilding = ({ currentFloor, setCurrentFloor }) => {
  const SouthIntro = () => (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', color: '#1F2937' }}>
        Lady Eaton South
      </h1>
      <h2 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '40px', color: '#374151' }}>
        Community Division Proposal
      </h2>

      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '16px', marginBottom: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#1F2937' }}>
          Coming Soon - Lady Eaton South
        </h3>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#374151' }}>
          The community division proposal for Lady Eaton South is currently being developed. This will follow a similar structure to the other buildings.
        </p>
      </div>
    </div>
  );

  // TODO: Add South building floors here following the same pattern as Annex and North
  // const SouthSecondFloor = () => { ... }
  // const SouthThirdFloor = () => { ... }

  return (
    <>
      {currentFloor === 'south-intro' && <SouthIntro />}
      {/* Add more floor conditions here as you build them */}
    </>
  );
};

export default SouthBuilding;
