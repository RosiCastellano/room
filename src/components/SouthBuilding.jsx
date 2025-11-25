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
          Why Vertical Communities for Lady Eaton South?
        </h3>
        <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px', color: '#374151' }}>
          I recommend a <strong>vertical West/East section division</strong> for Lady Eaton South, splitting the building down the middle. Each don manages either the West Section or East Section of <strong>all three floors</strong>.
        </p>
        <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px', color: '#374151' }}>
          This creates <strong>balanced distribution between two dons</strong>. The building's long, linear layout makes vertical division the most practical approach - dons simply manage their left or right side throughout all floors.
        </p>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#374151' }}>
          Additionally, vertical division improves <strong>fire safety and emergency evacuation</strong>. Students in each section exit from opposite ends of the building, reducing congestion at any single exit point.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        <div style={{ backgroundColor: '#DBEAFE', padding: '24px', borderRadius: '12px', borderLeft: '6px solid #2563EB' }}>
          <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#2563EB', marginBottom: '12px' }}>
            ⚖️ Balanced Distribution
          </h4>
          <p style={{ fontSize: '16px', color: '#374151' }}>
            Each don manages approximately half the building across all floors - simple and equitable.
          </p>
        </div>

        <div style={{ backgroundColor: '#D1FAE5', padding: '24px', borderRadius: '12px', borderLeft: '6px solid #10B981' }}>
          <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#10B981', marginBottom: '12px' }}>
            🧭 Simple Geographic Logic
          </h4>
          <p style={{ fontSize: '16px', color: '#374151' }}>
            Dons stick to their section - left (West) or right (East). Easy to remember and navigate across all three floors.
          </p>
        </div>

        <div style={{ backgroundColor: '#FEE2E2', padding: '24px', borderRadius: '12px', borderLeft: '6px solid #EF4444' }}>
          <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#EF4444', marginBottom: '12px' }}>
            🔥 Fire Safety
          </h4>
          <p style={{ fontSize: '16px', color: '#374151' }}>
            Students exit from opposite ends of the building, improving emergency evacuation efficiency.
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '40px', flexWrap: 'wrap' }}>
        <div style={{ backgroundColor: '#DBEAFE', padding: '30px 50px', borderRadius: '12px', textAlign: 'center', border: '3px solid #3B82F6' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#3B82F6' }}>◄ WEST SECTION</div>
          <div style={{ fontSize: '20px', color: '#374151', marginTop: '12px', fontWeight: 'bold' }}>Left Side</div>
          <div style={{ fontSize: '18px', color: '#6B7280', marginTop: '8px' }}>1st Floor: 2 students</div>
          <div style={{ fontSize: '18px', color: '#6B7280', marginTop: '4px' }}>2nd Floor: ~27 students</div>
          <div style={{ fontSize: '18px', color: '#6B7280', marginTop: '4px' }}>3rd Floor: ~29 students</div>
          <div style={{ fontSize: '20px', color: '#3B82F6', marginTop: '12px', fontWeight: 'bold' }}>Total: ~58 students</div>
        </div>
        <div style={{ backgroundColor: '#FED7AA', padding: '30px 50px', borderRadius: '12px', textAlign: 'center', border: '3px solid #F97316' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#F97316' }}>EAST SECTION ►</div>
          <div style={{ fontSize: '20px', color: '#374151', marginTop: '12px', fontWeight: 'bold' }}>Right Side</div>
          <div style={{ fontSize: '18px', color: '#6B7280', marginTop: '8px' }}>1st Floor: 2 students</div>
          <div style={{ fontSize: '18px', color: '#6B7280', marginTop: '4px' }}>2nd Floor: ~27 students</div>
          <div style={{ fontSize: '18px', color: '#6B7280', marginTop: '4px' }}>3rd Floor: ~29 students</div>
          <div style={{ fontSize: '20px', color: '#F97316', marginTop: '12px', fontWeight: 'bold' }}>Total: ~58 students</div>
        </div>
      </div>

      <div style={{ backgroundColor: '#EFF6FF', padding: '20px', borderRadius: '12px', marginTop: '40px', border: '2px solid #3B82F6' }}>
        <p style={{ fontSize: '16px', color: '#374151', textAlign: 'center', marginBottom: '8px' }}>
          <strong>Total Building Population:</strong>
        </p>
        <p style={{ fontSize: '20px', color: '#1F2937', textAlign: 'center', fontWeight: 'bold' }}>
          ~116 students (58 per don - evenly split!)
        </p>
      </div>
    </div>
  );

  const FirstFloor = () => (
    <div style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '16px' }}>
        <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 'bold', color: '#1F2937' }}>Lady Eaton South - First Floor</h1>
        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{ backgroundColor: '#3B82F6', color: 'white', padding: '12px 24px', borderRadius: '24px', fontSize: '18px', fontWeight: 'bold' }}>
            ◄ WEST
          </div>
          <div style={{ backgroundColor: '#F97316', color: 'white', padding: '12px 24px', borderRadius: '24px', fontSize: '18px', fontWeight: 'bold' }}>
            EAST ►
          </div>
        </div>
      </div>

      <div style={{
        backgroundColor: '#A7C7A8',
        padding: 'clamp(20px, 3vw, 40px)',
        borderRadius: '24px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '16px',
          marginBottom: '30px',
          textAlign: 'center',
          border: '3px solid #6B7280'
        }}>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 'bold', color: '#1F2937' }}>
            LADY EATON SOUTH - FIRST FLOOR
          </h2>
          <p style={{ fontSize: 'clamp(14px, 2vw, 20px)', color: '#6B7280', fontWeight: 'bold', marginTop: '8px' }}>
            Vertical Division: West Section (Left) & East Section (Right)
          </p>
        </div>

        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '30px'
        }}>
          <div style={{
            flex: 1,
            minWidth: '250px',
            backgroundColor: '#DBEAFE',
            padding: '20px',
            borderRadius: '12px',
            border: '3px solid #3B82F6',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#3B82F6', marginBottom: '16px' }}>
              ◄ WEST SECTION
            </div>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <UnitBox number="S101-2" color="#3B82F6" />
            </div>
            <div style={{ marginTop: '16px', fontSize: '18px', fontWeight: 'bold', color: '#3B82F6' }}>
              1 unit | 2 students
            </div>
          </div>

          <div style={{
            flex: 1,
            minWidth: '250px',
            backgroundColor: '#FED7AA',
            padding: '20px',
            borderRadius: '12px',
            border: '3px solid #F97316',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#F97316', marginBottom: '16px' }}>
              EAST SECTION ►
            </div>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <UnitBox number="S103-4" color="#F97316" />
            </div>
            <div style={{ marginTop: '16px', fontSize: '18px', fontWeight: 'bold', color: '#F97316' }}>
              1 unit | 2 students
            </div>
          </div>
        </div>
      </div>

      <div style={{
        marginTop: '30px',
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1F2937' }}>First Floor Summary:</h3>
        <div style={{ fontSize: '18px', lineHeight: '1.8', color: '#374151' }}>
          <div>• <span style={{ fontWeight: 'bold', color: '#3B82F6' }}>West Section (Left)</span>: 1 unit | 2 students</div>
          <div>• <span style={{ fontWeight: 'bold', color: '#F97316' }}>East Section (Right)</span>: 1 unit | 2 students</div>
          <div style={{ marginTop: '12px', padding: '16px', backgroundColor: '#F3F4F6', borderRadius: '8px' }}>
            <strong>Total 1st Floor:</strong> 2 units | 4 students
          </div>
        </div>
      </div>
    </div>
  );

  const SecondFloor = () => (
    <div style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '16px' }}>
        <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 'bold', color: '#1F2937' }}>Lady Eaton South - Second Floor</h1>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <div style={{ backgroundColor: '#3B82F6', color: 'white', padding: '12px 24px', borderRadius: '24px', fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
            ◄ WEST
          </div>
          <div style={{ backgroundColor: '#F97316', color: 'white', padding: '12px 24px', borderRadius: '24px', fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
            EAST ►
          </div>
        </div>
      </div>

      <div style={{
        backgroundColor: '#A7C7A8',
        padding: 'clamp(20px, 3vw, 40px)',
        borderRadius: '24px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '16px',
          marginBottom: '30px',
          textAlign: 'center',
          border: '3px solid #6B7280'
        }}>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 'bold', color: '#1F2937' }}>
            LADY EATON SOUTH - SECOND FLOOR
          </h2>
          <p style={{ fontSize: 'clamp(14px, 2vw, 20px)', color: '#6B7280', fontWeight: 'bold', marginTop: '8px' }}>
            Vertical Division: West Section (Left) & East Section (Right)
          </p>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: 'clamp(20px, 3vw, 40px)',
          borderRadius: '16px',
          marginBottom: '30px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '4px',
            marginBottom: '20px',
            flexWrap: 'wrap'
          }}>
            <div style={{ flex: 1, minWidth: '300px', textAlign: 'center', backgroundColor: '#DBEAFE', padding: '20px', borderRadius: '12px', border: '3px solid #3B82F6' }}>
              <div style={{ fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: 'bold', color: '#3B82F6', marginBottom: '16px' }}>◄ WEST SECTION</div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(50px, 1fr))',
                gap: '4px',
                maxWidth: '500px',
                margin: '0 auto'
              }}>
                {Array.from({ length: 27 }, (_, i) => {
                  const roomNum = 201 + i;
                  return (
                    <div key={i} style={{
                      width: '100%',
                      aspectRatio: '1',
                      minWidth: '45px',
                      backgroundColor: '#3B82F6',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 'clamp(9px, 1.5vw, 11px)'
                    }}>
                      S{roomNum}
                    </div>
                  );
                })}
              </div>
              <div style={{ marginTop: '16px', fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: 'bold', color: '#3B82F6' }}>S201-S227 | ~27 students</div>
            </div>

            <div style={{ flex: 1, minWidth: '300px', textAlign: 'center', backgroundColor: '#FED7AA', padding: '20px', borderRadius: '12px', border: '3px solid #F97316' }}>
              <div style={{ fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: 'bold', color: '#F97316', marginBottom: '16px' }}>EAST SECTION ►</div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(50px, 1fr))',
                gap: '4px',
                maxWidth: '500px',
                margin: '0 auto'
              }}>
                {Array.from({ length: 27 }, (_, i) => {
                  const roomNum = 228 + i;
                  return (
                    <div key={i} style={{
                      width: '100%',
                      aspectRatio: '1',
                      minWidth: '45px',
                      backgroundColor: '#F97316',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 'clamp(9px, 1.5vw, 11px)'
                    }}>
                      S{roomNum}
                    </div>
                  );
                })}
              </div>
              <div style={{ marginTop: '16px', fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: 'bold', color: '#F97316' }}>S228-S254 | ~27 students</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        marginTop: '30px',
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1F2937' }}>Second Floor Summary:</h3>
        <div style={{ fontSize: '18px', lineHeight: '1.8', color: '#374151' }}>
          <div>• <span style={{ fontWeight: 'bold', color: '#3B82F6' }}>West Section (Left)</span>: ~27 rooms | ~27 students</div>
          <div>• <span style={{ fontWeight: 'bold', color: '#F97316' }}>East Section (Right)</span>: ~27 rooms | ~27 students</div>
          <div style={{ marginTop: '12px', padding: '16px', backgroundColor: '#F3F4F6', borderRadius: '8px' }}>
            <strong>Total 2nd Floor:</strong> ~54 rooms | ~54 students
          </div>
        </div>
      </div>
    </div>
  );

  const ThirdFloor = () => (
    <div style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '16px' }}>
        <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 'bold', color: '#1F2937' }}>Lady Eaton South - Third Floor</h1>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <div style={{ backgroundColor: '#3B82F6', color: 'white', padding: '12px 24px', borderRadius: '24px', fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
            ◄ WEST
          </div>
          <div style={{ backgroundColor: '#F97316', color: 'white', padding: '12px 24px', borderRadius: '24px', fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
            EAST ►
          </div>
        </div>
      </div>

      <div style={{
        backgroundColor: '#A7C7A8',
        padding: 'clamp(20px, 3vw, 40px)',
        borderRadius: '24px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '16px',
          marginBottom: '30px',
          textAlign: 'center',
          border: '3px solid #6B7280'
        }}>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 'bold', color: '#1F2937' }}>
            LADY EATON SOUTH - THIRD FLOOR
          </h2>
          <p style={{ fontSize: 'clamp(14px, 2vw, 20px)', color: '#6B7280', fontWeight: 'bold', marginTop: '8px' }}>
            Vertical Division: West Section (Left) & East Section (Right)
          </p>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: 'clamp(20px, 3vw, 40px)',
          borderRadius: '16px',
          marginBottom: '30px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '4px',
            marginBottom: '20px',
            flexWrap: 'wrap'
          }}>
            <div style={{ flex: 1, minWidth: '300px', textAlign: 'center', backgroundColor: '#DBEAFE', padding: '20px', borderRadius: '12px', border: '3px solid #3B82F6' }}>
              <div style={{ fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: 'bold', color: '#3B82F6', marginBottom: '16px' }}>◄ WEST SECTION</div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(50px, 1fr))',
                gap: '4px',
                maxWidth: '500px',
                margin: '0 auto'
              }}>
                {Array.from({ length: 29 }, (_, i) => {
                  const roomNum = 301 + i;
                  return (
                    <div key={i} style={{
                      width: '100%',
                      aspectRatio: '1',
                      minWidth: '45px',
                      backgroundColor: '#3B82F6',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 'clamp(9px, 1.5vw, 11px)'
                    }}>
                      S{roomNum}
                    </div>
                  );
                })}
              </div>
              <div style={{ marginTop: '16px', fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: 'bold', color: '#3B82F6' }}>S301-S329 | ~29 students</div>
            </div>

            <div style={{ flex: 1, minWidth: '300px', textAlign: 'center', backgroundColor: '#FED7AA', padding: '20px', borderRadius: '12px', border: '3px solid #F97316' }}>
              <div style={{ fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: 'bold', color: '#F97316', marginBottom: '16px' }}>EAST SECTION ►</div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(50px, 1fr))',
                gap: '4px',
                maxWidth: '500px',
                margin: '0 auto'
              }}>
                {Array.from({ length: 29 }, (_, i) => {
                  const roomNum = 330 + i;
                  return (
                    <div key={i} style={{
                      width: '100%',
                      aspectRatio: '1',
                      minWidth: '45px',
                      backgroundColor: '#F97316',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 'clamp(9px, 1.5vw, 11px)'
                    }}>
                      S{roomNum}
                    </div>
                  );
                })}
              </div>
              <div style={{ marginTop: '16px', fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: 'bold', color: '#F97316' }}>S330-S358 | ~29 students</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        marginTop: '30px',
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1F2937' }}>Third Floor Summary:</h3>
        <div style={{ fontSize: '18px', lineHeight: '1.8', color: '#374151' }}>
          <div>• <span style={{ fontWeight: 'bold', color: '#3B82F6' }}>West Section (Left)</span>: ~29 rooms | ~29 students</div>
          <div>• <span style={{ fontWeight: 'bold', color: '#F97316' }}>East Section (Right)</span>: ~29 rooms | ~29 students</div>
          <div style={{ marginTop: '12px', padding: '16px', backgroundColor: '#F3F4F6', borderRadius: '8px' }}>
            <strong>Total 3rd Floor:</strong> ~58 rooms | ~58 students
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {currentFloor === 'south-intro' && <SouthIntro />}
      {currentFloor === 'south-first' && <FirstFloor />}
      {currentFloor === 'south-second' && <SecondFloor />}
      {currentFloor === 'south-third' && <ThirdFloor />}
    </>
  );
};

export default SouthBuilding;
