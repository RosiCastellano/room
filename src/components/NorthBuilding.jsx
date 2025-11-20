import React from 'react';
import { colors } from './SharedComponents';

const NorthBuilding = ({ currentFloor, setCurrentFloor }) => {
  const NorthIntro = () => (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', color: '#1F2937' }}>
        Lady Eaton North
      </h1>
      <h2 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '40px', color: '#374151' }}>
        Community Division Proposal
      </h2>

      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '16px', marginBottom: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#1F2937' }}>
          Why Vertical Communities for Lady Eaton North?
        </h3>
        <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px', color: '#374151' }}>
          I recommend a <strong>vertical West/East wing division</strong> for Lady Eaton North, splitting the building down the middle. Each don manages either the West Wing or East Wing of <strong>both the 2nd and 3rd floors</strong>.
        </p>
        <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px', color: '#374151' }}>
          This creates <strong>perfect balance: 58 students per don</strong>. More importantly, both floors share a <strong>common room and laundry facilities</strong> - with vertical division, both dons have equal access to these shared spaces.
        </p>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#374151' }}>
          Additionally, vertical division improves <strong>fire safety and emergency evacuation</strong>. Students in each wing exit from opposite sides of the building, reducing congestion at any single exit point and ensuring faster, safer evacuation times in an emergency.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        <div style={{ backgroundColor: '#DBEAFE', padding: '24px', borderRadius: '12px', borderLeft: '6px solid #2563EB' }}>
          <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#2563EB', marginBottom: '12px' }}>
            ⚖️ Perfect Balance
          </h4>
          <p style={{ fontSize: '16px', color: '#374151' }}>
            Each don gets exactly 58 students - completely equal distribution with no imbalance.
          </p>
        </div>

        <div style={{ backgroundColor: '#D1FAE5', padding: '24px', borderRadius: '12px', borderLeft: '6px solid #10B981' }}>
          <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#10B981', marginBottom: '12px' }}>
            🏠 Shared Facilities
          </h4>
          <p style={{ fontSize: '16px', color: '#374151' }}>
            Common room and laundry are shared between floors - vertical split ensures both dons have equal access.
          </p>
        </div>

        <div style={{ backgroundColor: '#FEE2E2', padding: '24px', borderRadius: '12px', borderLeft: '6px solid #EF4444' }}>
          <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#EF4444', marginBottom: '12px' }}>
            🔥 Fire Safety
          </h4>
          <p style={{ fontSize: '16px', color: '#374151' }}>
            Students exit from opposite sides of the building, reducing congestion and improving emergency evacuation.
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '40px', flexWrap: 'wrap' }}>
        <div style={{ backgroundColor: '#FEE2E2', padding: '30px 50px', borderRadius: '12px', textAlign: 'center', border: '3px solid #DC2626' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#DC2626' }}>◄ WEST WING</div>
          <div style={{ fontSize: '20px', color: '#374151', marginTop: '12px', fontWeight: 'bold' }}>Left Side</div>
          <div style={{ fontSize: '18px', color: '#6B7280', marginTop: '8px' }}>2nd Floor West: 30 students</div>
          <div style={{ fontSize: '18px', color: '#6B7280', marginTop: '4px' }}>3rd Floor West: 28 students</div>
          <div style={{ fontSize: '20px', color: '#DC2626', marginTop: '12px', fontWeight: 'bold' }}>Total: 58 students</div>
        </div>
        <div style={{ backgroundColor: '#FEF3C7', padding: '30px 50px', borderRadius: '12px', textAlign: 'center', border: '3px solid #F59E0B' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#F59E0B' }}>EAST WING ►</div>
          <div style={{ fontSize: '20px', color: '#374151', marginTop: '12px', fontWeight: 'bold' }}>Right Side</div>
          <div style={{ fontSize: '18px', color: '#6B7280', marginTop: '8px' }}>2nd Floor East: 30 students</div>
          <div style={{ fontSize: '18px', color: '#6B7280', marginTop: '4px' }}>3rd Floor East: 28 students</div>
          <div style={{ fontSize: '20px', color: '#F59E0B', marginTop: '12px', fontWeight: 'bold' }}>Total: 58 students</div>
        </div>
      </div>

      <div style={{ backgroundColor: '#EFF6FF', padding: '20px', borderRadius: '12px', marginTop: '40px', border: '2px solid #3B82F6' }}>
        <p style={{ fontSize: '16px', color: '#374151', textAlign: 'center', marginBottom: '8px' }}>
          <strong>Total Building Population:</strong>
        </p>
        <p style={{ fontSize: '20px', color: '#1F2937', textAlign: 'center', fontWeight: 'bold' }}>
          116 students (58 per don - perfectly balanced!)
        </p>
      </div>
    </div>
  );

  const NorthSecondFloor = () => (
    <div style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#1F2937' }}>Lady Eaton North - Second Floor</h1>
        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{ backgroundColor: '#DC2626', color: 'white', padding: '12px 24px', borderRadius: '24px', fontSize: '18px', fontWeight: 'bold' }}>
            ◄ WEST WING
          </div>
          <div style={{ backgroundColor: '#F59E0B', color: 'white', padding: '12px 24px', borderRadius: '24px', fontSize: '18px', fontWeight: 'bold' }}>
            EAST WING ►
          </div>
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#A7C7A8', 
        padding: '40px', 
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
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1F2937' }}>
            LADY EATON NORTH - SECOND FLOOR
          </h2>
          <p style={{ fontSize: '20px', color: '#6B7280', fontWeight: 'bold', marginTop: '8px' }}>Vertical Division: West Wing (Left) & East Wing (Right)</p>
        </div>

        {/* Visual Floor Plan */}
        <div style={{
          backgroundColor: 'white',
          padding: '40px 20px',
          borderRadius: '16px',
          marginBottom: '30px',
          position: 'relative'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '4px',
            marginBottom: '20px'
          }}>
            {/* Left Half - West Wing (30 rooms) */}
            <div style={{ flex: 1, textAlign: 'center', backgroundColor: '#FEE2E2', padding: '20px', borderRadius: '12px 0 0 12px', border: '3px solid #DC2626', borderRight: '2px solid #DC2626' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#DC2626', marginBottom: '16px' }}>◄ WEST WING (Left)</div>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '4px',
                justifyContent: 'center',
                maxWidth: '500px',
                margin: '0 auto'
              }}>
                {Array.from({ length: 30 }, (_, i) => {
                  const roomNum = 201 + i;
                  return (
                    <div key={i} style={{
                      width: '55px',
                      height: '55px',
                      backgroundColor: '#DC2626',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '11px'
                    }}>
                      N{roomNum}
                    </div>
                  );
                })}
              </div>
              <div style={{ marginTop: '16px', fontSize: '18px', fontWeight: 'bold', color: '#DC2626' }}>N201-N230 | 30 students</div>
            </div>

            {/* Right Half - East Wing (30 rooms) */}
            <div style={{ flex: 1, textAlign: 'center', backgroundColor: '#FEF3C7', padding: '20px', borderRadius: '0 12px 12px 0', border: '3px solid #F59E0B', borderLeft: '2px solid #F59E0B' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#F59E0B', marginBottom: '16px' }}>EAST WING (Right) ►</div>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '4px',
                justifyContent: 'center',
                maxWidth: '500px',
                margin: '0 auto'
              }}>
                {Array.from({ length: 30 }, (_, i) => {
                  const roomNum = 231 + i;
                  return (
                    <div key={i} style={{
                      width: '55px',
                      height: '55px',
                      backgroundColor: '#F59E0B',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '11px'
                    }}>
                      N{roomNum}
                    </div>
                  );
                })}
              </div>
              <div style={{ marginTop: '16px', fontSize: '18px', fontWeight: 'bold', color: '#F59E0B' }}>N231-N260 | 30 students</div>
            </div>
          </div>
        </div>

        <div style={{ 
          backgroundColor: 'white', 
          padding: '30px', 
          borderRadius: '12px',
          marginBottom: '20px'
        }}>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#1F2937', marginBottom: '20px', textAlign: 'center' }}>
            2nd Floor Double Rooms
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            <div>
              <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#DC2626', marginBottom: '12px', textAlign: 'center' }}>◄ WEST WING Doubles</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ padding: '16px', backgroundColor: '#FEE2E2', borderRadius: '8px', border: '2px solid #DC2626' }}>
                  <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#DC2626' }}>N212 (Double)</p>
                  <p style={{ fontSize: '14px', color: '#6B7280' }}>2 students</p>
                </div>
                <div style={{ padding: '16px', backgroundColor: '#FEE2E2', borderRadius: '8px', border: '2px solid #DC2626' }}>
                  <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#DC2626' }}>N223 (Double)</p>
                  <p style={{ fontSize: '14px', color: '#6B7280' }}>2 students</p>
                </div>
              </div>
            </div>
            <div>
              <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#F59E0B', marginBottom: '12px', textAlign: 'center' }}>EAST WING Doubles ►</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ padding: '16px', backgroundColor: '#FEF3C7', borderRadius: '8px', border: '2px solid #F59E0B' }}>
                  <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#F59E0B' }}>N234 (Double)</p>
                  <p style={{ fontSize: '14px', color: '#6B7280' }}>2 students</p>
                </div>
                <div style={{ padding: '16px', backgroundColor: '#FEF3C7', borderRadius: '8px', border: '2px solid #F59E0B' }}>
                  <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#F59E0B' }}>N245 (Double)</p>
                  <p style={{ fontSize: '14px', color: '#6B7280' }}>2 students</p>
                </div>
              </div>
            </div>
          </div>
          <p style={{ fontSize: '18px', color: '#374151', marginTop: '20px', textAlign: 'center' }}>
            + 56 single rooms (1 student each)
          </p>
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
          <div>• <span style={{ fontWeight: 'bold', color: '#DC2626' }}>West Wing (Left)</span>: 30 rooms | 30 students</div>
          <div>• <span style={{ fontWeight: 'bold', color: '#F59E0B' }}>East Wing (Right)</span>: 30 rooms | 30 students</div>
          <div style={{ marginTop: '12px', padding: '16px', backgroundColor: '#F3F4F6', borderRadius: '8px' }}>
            <strong>Total 2nd Floor:</strong> 60 rooms | 60 students (4 doubles + 56 singles)
          </div>
        </div>
      </div>
    </div>
  );

  const NorthThirdFloor = () => (
    <div style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#1F2937' }}>Lady Eaton North - Third Floor</h1>
        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{ backgroundColor: '#DC2626', color: 'white', padding: '12px 24px', borderRadius: '24px', fontSize: '18px', fontWeight: 'bold' }}>
            ◄ WEST WING
          </div>
          <div style={{ backgroundColor: '#F59E0B', color: 'white', padding: '12px 24px', borderRadius: '24px', fontSize: '18px', fontWeight: 'bold' }}>
            EAST WING ►
          </div>
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#A7C7A8', 
        padding: '40px', 
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
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1F2937' }}>
            LADY EATON NORTH - THIRD FLOOR
          </h2>
          <p style={{ fontSize: '20px', color: '#6B7280', fontWeight: 'bold', marginTop: '8px' }}>Vertical Division: West Wing (Left) & East Wing (Right)</p>
        </div>

        {/* Visual Floor Plan */}
        <div style={{
          backgroundColor: 'white',
          padding: '40px 20px',
          borderRadius: '16px',
          marginBottom: '30px',
          position: 'relative'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '4px',
            marginBottom: '20px'
          }}>
            {/* Left Half - West Wing (28 rooms) */}
            <div style={{ flex: 1, textAlign: 'center', backgroundColor: '#FEE2E2', padding: '20px', borderRadius: '12px 0 0 12px', border: '3px solid #DC2626', borderRight: '2px solid #DC2626' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#DC2626', marginBottom: '16px' }}>◄ WEST WING (Left)</div>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '4px',
                justifyContent: 'center',
                maxWidth: '450px',
                margin: '0 auto'
              }}>
                {Array.from({ length: 28 }, (_, i) => {
                  const roomNum = 301 + i;
                  return (
                    <div key={i} style={{
                      width: '55px',
                      height: '55px',
                      backgroundColor: '#DC2626',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '11px'
                    }}>
                      N{roomNum}
                    </div>
                  );
                })}
              </div>
              <div style={{ marginTop: '16px', fontSize: '18px', fontWeight: 'bold', color: '#DC2626' }}>N301-N328 | 28 students</div>
            </div>

            {/* Right Half - East Wing (28 rooms) */}
            <div style={{ flex: 1, textAlign: 'center', backgroundColor: '#FEF3C7', padding: '20px', borderRadius: '0 12px 12px 0', border: '3px solid #F59E0B', borderLeft: '2px solid #F59E0B' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#F59E0B', marginBottom: '16px' }}>EAST WING (Right) ►</div>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '4px',
                justifyContent: 'center',
                maxWidth: '450px',
                margin: '0 auto'
              }}>
                {Array.from({ length: 28 }, (_, i) => {
                  const roomNum = 329 + i;
                  return (
                    <div key={i} style={{
                      width: '55px',
                      height: '55px',
                      backgroundColor: '#F59E0B',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '11px'
                    }}>
                      N{roomNum}
                    </div>
                  );
                })}
              </div>
              <div style={{ marginTop: '16px', fontSize: '18px', fontWeight: 'bold', color: '#F59E0B' }}>N329-N356 | 28 students</div>
            </div>
          </div>
        </div>

        <div style={{ 
          backgroundColor: 'white', 
          padding: '30px', 
          borderRadius: '12px',
          marginBottom: '20px'
        }}>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#1F2937', marginBottom: '20px', textAlign: 'center' }}>
            3rd Floor Double Rooms
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            <div>
              <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#DC2626', marginBottom: '12px', textAlign: 'center' }}>◄ WEST WING Double</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ padding: '16px', backgroundColor: '#FEE2E2', borderRadius: '8px', border: '2px solid #DC2626' }}>
                  <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#DC2626' }}>N322 (Double)</p>
                  <p style={{ fontSize: '14px', color: '#6B7280' }}>2 students</p>
                </div>
              </div>
            </div>
            <div>
              <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#F59E0B', marginBottom: '12px', textAlign: 'center' }}>EAST WING Double ►</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ padding: '16px', backgroundColor: '#FEF3C7', borderRadius: '8px', border: '2px solid #F59E0B' }}>
                  <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#F59E0B' }}>N333 (Double)</p>
                  <p style={{ fontSize: '14px', color: '#6B7280' }}>2 students</p>
                </div>
              </div>
            </div>
          </div>
          <p style={{ fontSize: '18px', color: '#374151', marginTop: '20px', textAlign: 'center' }}>
            + 54 single rooms (1 student each)
          </p>
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
          <div>• <span style={{ fontWeight: 'bold', color: '#DC2626' }}>West Wing (Left)</span>: 28 rooms | 28 students</div>
          <div>• <span style={{ fontWeight: 'bold', color: '#F59E0B' }}>East Wing (Right)</span>: 28 rooms | 28 students</div>
          <div style={{ marginTop: '12px', padding: '16px', backgroundColor: '#F3F4F6', borderRadius: '8px' }}>
            <strong>Total 3rd Floor:</strong> 56 rooms | 56 students (2 doubles + 54 singles)
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {currentFloor === 'north-intro' && <NorthIntro />}
      {currentFloor === 'north-second' && <NorthSecondFloor />}
      {currentFloor === 'north-third' && <NorthThirdFloor />}
    </>
  );
};

export default NorthBuilding;
