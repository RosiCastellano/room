import React, { useState } from 'react';
import AnnexBuilding from './components/AnnexBuilding';
import NorthBuilding from './components/NorthBuilding';
import SouthBuilding from './components/SouthBuilding';
import ChamplainAnnexBuilding from './components/ChamplainAnnexBuilding';

const App = () => {
  const [currentResidence, setCurrentResidence] = useState('lady-eaton'); // 'lady-eaton' or 'champlain'
  const [showBuildings, setShowBuildings] = useState(true);
  const [currentBuilding, setCurrentBuilding] = useState('annex');
  const [currentFloor, setCurrentFloor] = useState('intro');

  const navButtonStyle = (isActive, activeColor) => ({
    padding: 'clamp(8px, 2vw, 12px) clamp(16px, 3vw, 24px)',
    fontSize: 'clamp(12px, 2vw, 16px)',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: isActive ? activeColor : 'white',
    color: isActive ? 'white' : '#1F2937',
    border: `2px solid ${isActive ? activeColor : '#D1D5DB'}`,
    transition: 'all 0.3s',
    whiteSpace: 'nowrap',
    minWidth: 'fit-content'
  });

  const handleResidenceChange = (residence, building, floor) => {
    setCurrentResidence(residence);
    setCurrentBuilding(building);
    setCurrentFloor(floor);
    setShowBuildings(true);
  };

  const handleBuildingChange = (building, defaultFloor) => {
    setCurrentBuilding(building);
    setCurrentFloor(defaultFloor);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F3F4F6',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Navigation */}
      <nav style={{
        backgroundColor: 'white',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        {/* Residence Selector */}
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          marginBottom: '20px',
          display: 'flex',
          gap: 'clamp(12px, 2vw, 20px)',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => handleResidenceChange('lady-eaton', 'annex', 'intro')}
            style={{
              padding: 'clamp(12px, 2.5vw, 16px) clamp(24px, 4vw, 40px)',
              fontSize: 'clamp(16px, 2.5vw, 20px)',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              backgroundColor: currentResidence === 'lady-eaton' ? '#10B981' : 'white',
              color: currentResidence === 'lady-eaton' ? 'white' : '#1F2937',
              boxShadow: currentResidence === 'lady-eaton' ? '0 4px 6px rgba(0,0,0,0.1)' : 'none',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              border: `3px solid ${currentResidence === 'lady-eaton' ? '#059669' : '#D1D5DB'}`,
              whiteSpace: 'nowrap'
            }}
          >
            🏛️ LADY EATON {currentResidence === 'lady-eaton' && (showBuildings ? '▼' : '▶')}
          </button>

          <button
            onClick={() => handleResidenceChange('champlain', 'champlain-annex', 'champlain-intro')}
            style={{
              padding: 'clamp(12px, 2.5vw, 16px) clamp(24px, 4vw, 40px)',
              fontSize: 'clamp(16px, 2.5vw, 20px)',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              backgroundColor: currentResidence === 'champlain' ? '#8B5CF6' : 'white',
              color: currentResidence === 'champlain' ? 'white' : '#1F2937',
              boxShadow: currentResidence === 'champlain' ? '0 4px 6px rgba(0,0,0,0.1)' : 'none',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              border: `3px solid ${currentResidence === 'champlain' ? '#7C3AED' : '#D1D5DB'}`,
              whiteSpace: 'nowrap'
            }}
          >
            🏠 CHAMPLAIN {currentResidence === 'champlain' && (showBuildings ? '▼' : '▶')}
          </button>
        </div>

        {/* Building Selector - Shows for selected residence */}
        {showBuildings && (
          <>
            {/* Lady Eaton Buildings */}
            {currentResidence === 'lady-eaton' && (
              <>
                <div style={{
                  maxWidth: '1400px',
                  margin: '0 auto 20px auto',
                  display: 'flex',
                  gap: 'clamp(8px, 2vw, 16px)',
                  justifyContent: 'center',
                  borderBottom: '2px solid #E5E7EB',
                  paddingBottom: '16px',
                  flexWrap: 'wrap'
                }}>
                  <button
                    onClick={() => handleBuildingChange('annex', 'intro')}
                    style={{
                      padding: 'clamp(10px, 2vw, 14px) clamp(20px, 3vw, 32px)',
                      fontSize: 'clamp(14px, 2.5vw, 18px)',
                      fontWeight: 'bold',
                      border: 'none',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      backgroundColor: currentBuilding === 'annex' ? '#10B981' : 'white',
                      color: currentBuilding === 'annex' ? 'white' : '#1F2937',
                      border: `3px solid ${currentBuilding === 'annex' ? '#10B981' : '#D1D5DB'}`,
                      transition: 'all 0.3s',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Annex
                  </button>
                  <button
                    onClick={() => handleBuildingChange('north', 'north-intro')}
                    style={{
                      padding: 'clamp(10px, 2vw, 14px) clamp(20px, 3vw, 32px)',
                      fontSize: 'clamp(14px, 2.5vw, 18px)',
                      fontWeight: 'bold',
                      border: 'none',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      backgroundColor: currentBuilding === 'north' ? '#3B82F6' : 'white',
                      color: currentBuilding === 'north' ? 'white' : '#1F2937',
                      border: `3px solid ${currentBuilding === 'north' ? '#3B82F6' : '#D1D5DB'}`,
                      transition: 'all 0.3s',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    North
                  </button>
                  <button
                    onClick={() => handleBuildingChange('south', 'south-intro')}
                    style={{
                      padding: 'clamp(10px, 2vw, 14px) clamp(20px, 3vw, 32px)',
                      fontSize: 'clamp(14px, 2.5vw, 18px)',
                      fontWeight: 'bold',
                      border: 'none',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      backgroundColor: currentBuilding === 'south' ? '#F97316' : 'white',
                      color: currentBuilding === 'south' ? 'white' : '#1F2937',
                      border: `3px solid ${currentBuilding === 'south' ? '#F97316' : '#D1D5DB'}`,
                      transition: 'all 0.3s',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    South
                  </button>
                </div>

                {/* Lady Eaton Floor Navigation */}
                <div style={{
                  maxWidth: '1400px',
                  margin: '0 auto',
                  display: 'flex',
                  gap: 'clamp(6px, 1.5vw, 12px)',
                  justifyContent: 'center',
                  flexWrap: 'wrap'
                }}>
                  {currentBuilding === 'annex' && (
                    <>
                      <button onClick={() => setCurrentFloor('intro')} style={navButtonStyle(currentFloor === 'intro', '#1F2937')}>Intro</button>
                      <button onClick={() => setCurrentFloor('first')} style={navButtonStyle(currentFloor === 'first', '#1F2937')}>1st</button>
                      <button onClick={() => setCurrentFloor('second')} style={navButtonStyle(currentFloor === 'second', '#1F2937')}>2nd</button>
                      <button onClick={() => setCurrentFloor('third')} style={navButtonStyle(currentFloor === 'third', '#1F2937')}>3rd</button>
                      <button onClick={() => setCurrentFloor('recommendation')} style={navButtonStyle(currentFloor === 'recommendation', '#DC2626')}>Notes</button>
                    </>
                  )}

                  {currentBuilding === 'north' && (
                    <>
                      <button onClick={() => setCurrentFloor('north-intro')} style={navButtonStyle(currentFloor === 'north-intro', '#3B82F6')}>Intro</button>
                      <button onClick={() => setCurrentFloor('north-second')} style={navButtonStyle(currentFloor === 'north-second', '#6B7280')}>2nd</button>
                      <button onClick={() => setCurrentFloor('north-third')} style={navButtonStyle(currentFloor === 'north-third', '#6B7280')}>3rd</button>
                    </>
                  )}

                  {currentBuilding === 'south' && (
                    <>
                      <button onClick={() => setCurrentFloor('south-intro')} style={navButtonStyle(currentFloor === 'south-intro', '#F97316')}>Intro</button>
                      <button onClick={() => setCurrentFloor('south-first')} style={navButtonStyle(currentFloor === 'south-first', '#6B7280')}>1st</button>
                      <button onClick={() => setCurrentFloor('south-second')} style={navButtonStyle(currentFloor === 'south-second', '#6B7280')}>2nd</button>
                      <button onClick={() => setCurrentFloor('south-third')} style={navButtonStyle(currentFloor === 'south-third', '#6B7280')}>3rd</button>
                    </>
                  )}
                </div>
              </>
            )}

            {/* Champlain Buildings */}
            {currentResidence === 'champlain' && (
              <>
                <div style={{
                  maxWidth: '1400px',
                  margin: '0 auto 20px auto',
                  display: 'flex',
                  gap: 'clamp(8px, 2vw, 16px)',
                  justifyContent: 'center',
                  borderBottom: '2px solid #E5E7EB',
                  paddingBottom: '16px',
                  flexWrap: 'wrap'
                }}>
                  <button
                    onClick={() => handleBuildingChange('champlain-annex', 'champlain-intro')}
                    style={{
                      padding: 'clamp(10px, 2vw, 14px) clamp(20px, 3vw, 32px)',
                      fontSize: 'clamp(14px, 2.5vw, 18px)',
                      fontWeight: 'bold',
                      border: 'none',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      backgroundColor: currentBuilding === 'champlain-annex' ? '#8B5CF6' : 'white',
                      color: currentBuilding === 'champlain-annex' ? 'white' : '#1F2937',
                      border: `3px solid ${currentBuilding === 'champlain-annex' ? '#8B5CF6' : '#D1D5DB'}`,
                      transition: 'all 0.3s',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Annex
                  </button>
                </div>

                {/* Champlain Floor Navigation */}
                <div style={{
                  maxWidth: '1400px',
                  margin: '0 auto',
                  display: 'flex',
                  gap: 'clamp(6px, 1.5vw, 12px)',
                  justifyContent: 'center',
                  flexWrap: 'wrap'
                }}>
                  {currentBuilding === 'champlain-annex' && (
                    <>
                      <button onClick={() => setCurrentFloor('champlain-intro')} style={navButtonStyle(currentFloor === 'champlain-intro', '#8B5CF6')}>Intro</button>
                      {/* Add more floor buttons as data becomes available */}
                    </>
                  )}
                </div>
              </>
            )}
          </>
        )}
      </nav>

      {/* Content */}
      <div style={{ paddingTop: '20px', paddingBottom: '40px' }}>
        {currentResidence === 'lady-eaton' && (
          <>
            {currentBuilding === 'annex' && (
              <AnnexBuilding currentFloor={currentFloor} setCurrentFloor={setCurrentFloor} />
            )}
            {currentBuilding === 'north' && (
              <NorthBuilding currentFloor={currentFloor} setCurrentFloor={setCurrentFloor} />
            )}
            {currentBuilding === 'south' && (
              <SouthBuilding currentFloor={currentFloor} setCurrentFloor={setCurrentFloor} />
            )}
          </>
        )}

        {currentResidence === 'champlain' && (
          <>
            {currentBuilding === 'champlain-annex' && (
              <ChamplainAnnexBuilding currentFloor={currentFloor} setCurrentFloor={setCurrentFloor} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
