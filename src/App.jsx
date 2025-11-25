import React, { useState } from 'react';
import AnnexBuilding from './components/AnnexBuilding';
import NorthBuilding from './components/NorthBuilding';
import SouthBuilding from './components/SouthBuilding';

const App = () => {
  const [currentFloor, setCurrentFloor] = useState('intro');
  const [currentBuilding, setCurrentBuilding] = useState('annex');

  const buttonStyle = (isActive, activeColor, inactiveColor) => ({
    padding: 'clamp(8px, 2vw, 14px) clamp(16px, 3vw, 32px)',
    fontSize: 'clamp(14px, 2.5vw, 18px)',
    fontWeight: 'bold',
    borderRadius: '10px',
    cursor: 'pointer',
    backgroundColor: isActive ? activeColor : 'white',
    color: isActive ? 'white' : '#1F2937',
    border: `3px solid ${isActive ? activeColor : '#D1D5DB'}`,
    transition: 'all 0.3s',
    whiteSpace: 'nowrap',
    minWidth: 'fit-content'
  });

  const navButtonStyle = (isActive, color) => ({
    padding: 'clamp(8px, 1.5vw, 12px) clamp(12px, 2vw, 24px)',
    fontSize: 'clamp(12px, 2vw, 16px)',
    fontWeight: 'bold',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: isActive ? color : 'white',
    color: isActive ? 'white' : color,
    border: `2px solid ${color}`,
    transition: 'all 0.3s',
    whiteSpace: 'nowrap',
    minWidth: 'fit-content'
  });

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F3F4F6',
      fontFamily: 'Arial, sans-serif'
    }}>
      <nav style={{
        backgroundColor: 'white',
        padding: 'clamp(10px, 2vw, 20px)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto clamp(10px, 2vw, 20px) auto',
          display: 'flex',
          gap: 'clamp(8px, 2vw, 16px)',
          justifyContent: 'center',
          borderBottom: '2px solid #E5E7EB',
          paddingBottom: 'clamp(8px, 2vw, 16px)',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => { setCurrentBuilding('annex'); setCurrentFloor('intro'); }}
            style={buttonStyle(currentBuilding === 'annex', '#10B981', '#D1D5DB')}
          >
            🏛️ Annex
          </button>
          <button
            onClick={() => { setCurrentBuilding('north'); setCurrentFloor('north-intro'); }}
            style={buttonStyle(currentBuilding === 'north', '#3B82F6', '#D1D5DB')}
          >
            🏢 North
          </button>
          <button
            onClick={() => { setCurrentBuilding('south'); setCurrentFloor('south-intro'); }}
            style={buttonStyle(currentBuilding === 'south', '#8B5CF6', '#D1D5DB')}
          >
            🏘️ South
          </button>
        </div>

        {currentBuilding === 'annex' && (
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            gap: 'clamp(6px, 1.5vw, 12px)',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button onClick={() => setCurrentFloor('intro')} style={navButtonStyle(currentFloor === 'intro', '#1F2937')}>Intro</button>
            <button onClick={() => setCurrentFloor('first')} style={navButtonStyle(currentFloor === 'first', '#1F2937')}>1st</button>
            <button onClick={() => setCurrentFloor('second')} style={navButtonStyle(currentFloor === 'second', '#1F2937')}>2nd</button>
            <button onClick={() => setCurrentFloor('third')} style={navButtonStyle(currentFloor === 'third', '#1F2937')}>3rd</button>
            <button onClick={() => setCurrentFloor('recommendation')} style={navButtonStyle(currentFloor === 'recommendation', '#DC2626')}>Notes</button>
          </div>
        )}

        {currentBuilding === 'north' && (
          <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: 'clamp(6px, 1.5vw, 12px)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setCurrentFloor('north-intro')} style={navButtonStyle(currentFloor === 'north-intro', '#3B82F6')}>Intro</button>
            <button onClick={() => setCurrentFloor('north-second')} style={navButtonStyle(currentFloor === 'north-second', '#6B7280')}>2nd Floor</button>
            <button onClick={() => setCurrentFloor('north-third')} style={navButtonStyle(currentFloor === 'north-third', '#6B7280')}>3rd Floor</button>
          </div>
        )}

        {currentBuilding === 'south' && (
          <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: 'clamp(6px, 1.5vw, 12px)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setCurrentFloor('south-intro')} style={navButtonStyle(currentFloor === 'south-intro', '#8B5CF6')}>Intro</button>
          </div>
        )}
      </nav>

      <div style={{ paddingTop: 'clamp(10px, 2vw, 20px)', paddingBottom: 'clamp(20px, 4vw, 40px)' }}>
        {currentBuilding === 'annex' && <AnnexBuilding currentFloor={currentFloor} setCurrentFloor={setCurrentFloor} />}
        {currentBuilding === 'north' && <NorthBuilding currentFloor={currentFloor} setCurrentFloor={setCurrentFloor} />}
        {currentBuilding === 'south' && <SouthBuilding currentFloor={currentFloor} setCurrentFloor={setCurrentFloor} />}
      </div>
    </div>
  );
};

export default App;
