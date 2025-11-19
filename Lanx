import React, { useState } from 'react';

const FloorPlanApp = () => {
  const [currentFloor, setCurrentFloor] = useState('intro');
  const [currentBuilding, setCurrentBuilding] = useState('annex'); // 'annex' or 'north'

  const colors = {
    gold: '#FEF3C7',
    goldDark: '#D4AF37',
    bronze: '#FED7AA',
    bronzeDark: '#CD7F32',
    silver: '#E5E5E5',
    silverDark: '#8B8B8B',
    donRoom: '#D1D5DB'
  };

  const UnitBox = ({ number, color, textColor }) => (
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

  const DonRoomBox = ({ number }) => (
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

  const IntroPage = () => (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', color: '#1F2937' }}>
        Lady Eaton Annex
      </h1>
      <h2 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '40px', color: '#374151' }}>
        Community Division Proposal
      </h2>

      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '16px', marginBottom: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#1F2937' }}>
          Why Vertical Communities for the Annexes?
        </h3>
        <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px', color: '#374151' }}>
          I recommend implementing a vertical community system for Lady Eaton Annex, dividing the building into three distinct sections: <span style={{ fontWeight: 'bold', color: colors.goldDark }}>Gold</span>, <span style={{ fontWeight: 'bold', color: colors.bronzeDark }}>Bronze</span>, and <span style={{ fontWeight: 'bold', color: colors.silverDark }}>Silver</span>. Each don manages one vertical section spanning all three floors.
        </p>
        <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px', color: '#374151' }}>
          This vertical approach is ideal for the Annex because <strong>the entire building can be completed in a duty round in just five minutes</strong>, making it efficient for dons to monitor their entire section.
        </p>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#374151' }}>
          Additionally, the layout of the floors makes horizontal division impractical. The third floor has significantly more units than the first and second floors, making it impossible to create equal horizontal communities across floors. With a vertical system, <strong>dons simply stick to their side of the building</strong> - left (Gold), middle (Bronze), or right (Silver) - which is far more intuitive than trying to remember scattered unit numbers across different floors.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        <div style={{ backgroundColor: '#F0FDF4', padding: '24px', borderRadius: '12px', borderLeft: '6px solid #0D7377' }}>
          <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#0D7377', marginBottom: '12px' }}>
            ⚡ Quick 5-Minute Rounds
          </h4>
          <p style={{ fontSize: '16px', color: '#374151' }}>
            The entire building can be completed in a duty round in just five minutes, making it highly efficient for dons to monitor their vertical section.
          </p>
        </div>

        <div style={{ backgroundColor: '#FEF3C7', padding: '24px', borderRadius: '12px', borderLeft: '6px solid #D4AF37' }}>
          <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#92400E', marginBottom: '12px' }}>
            🧭 Simple Geographic Logic
          </h4>
          <p style={{ fontSize: '16px', color: '#374151' }}>
            Dons simply stick to their side of the building - left, middle, or right. Much easier than remembering scattered unit numbers.
          </p>
        </div>

        <div style={{ backgroundColor: '#EDE9FE', padding: '24px', borderRadius: '12px', borderLeft: '6px solid #7C3AED' }}>
          <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#5B21B6', marginBottom: '12px' }}>
            ⚖️ Equal Distribution
          </h4>
          <p style={{ fontSize: '16px', color: '#374151' }}>
            Third floor has way more units than first/second, making horizontal division impossible. Vertical ensures perfectly equal communities of 11 units each.
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '40px' }}>
        <div style={{ backgroundColor: colors.gold, padding: '20px 40px', borderRadius: '12px', textAlign: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: colors.goldDark }}>🥇 GOLD</div>
          <div style={{ fontSize: '16px', color: '#374151', marginTop: '8px' }}>11 units | 55 students</div>
        </div>
        <div style={{ backgroundColor: colors.bronze, padding: '20px 40px', borderRadius: '12px', textAlign: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: colors.bronzeDark }}>🥉 BRONZE</div>
          <div style={{ fontSize: '16px', color: '#374151', marginTop: '8px' }}>11 units | 55 students</div>
        </div>
        <div style={{ backgroundColor: colors.silver, padding: '20px 40px', borderRadius: '12px', textAlign: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: colors.silverDark }}>🥈 SILVER</div>
          <div style={{ fontSize: '16px', color: '#374151', marginTop: '8px' }}>11 units | 55 students</div>
        </div>
      </div>
    </div>
  );

  const FirstFloor = () => (
    <div style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#1F2937' }}>First Floor</h1>
        <div style={{ backgroundColor: '#6B7280', color: 'white', padding: '12px 24px', borderRadius: '24px', fontSize: '18px', fontWeight: 'bold' }}>
          8 UNITS
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#A7C7A8', 
        padding: '40px', 
        borderRadius: '24px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
      }}>
        <div style={{ 
          backgroundColor: '#D4E9D5', 
          padding: '20px', 
          borderRadius: '16px', 
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1F2937' }}>
            LADY EATON ANNEX - FIRST FLOOR
          </h2>
        </div>

        <div style={{ 
          display: 'flex', 
          gap: '20px', 
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '30px'
        }}>
          <UnitBox number="101" color={colors.goldDark} />
          <UnitBox number="102" color={colors.goldDark} />
          <UnitBox number="103" color={colors.goldDark} />
          <UnitBox number="104" color={colors.bronzeDark} />
          <UnitBox number="105" color={colors.bronzeDark} />
          <UnitBox number="106" color={colors.bronzeDark} />
          <UnitBox number="107" color={colors.silverDark} />
          <UnitBox number="108" color={colors.silverDark} />
        </div>

        <div style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '12px',
          textAlign: 'center',
          fontSize: '16px',
          color: '#6B7280',
          fontStyle: 'italic'
        }}>
          Unit 109 = Service Center (Excluded)
        </div>
      </div>

      <div style={{ 
        marginTop: '30px', 
        backgroundColor: 'white', 
        padding: '24px', 
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1F2937' }}>Summary:</h3>
        <div style={{ fontSize: '18px', lineHeight: '1.8', color: '#374151' }}>
          <div>• <span style={{ fontWeight: 'bold', color: colors.goldDark }}>Gold</span>: 3 units (101, 102, 103) | 15 students</div>
          <div>• <span style={{ fontWeight: 'bold', color: colors.bronzeDark }}>Bronze</span>: 3 units (104, 105, 106) | 15 students</div>
          <div>• <span style={{ fontWeight: 'bold', color: colors.silverDark }}>Silver</span>: 2 units (107, 108) | 10 students</div>
        </div>
      </div>
    </div>
  );

  const SecondFloor = () => (
    <div style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#1F2937' }}>Second Floor</h1>
        <div style={{ backgroundColor: '#6B7280', color: 'white', padding: '12px 24px', borderRadius: '24px', fontSize: '18px', fontWeight: 'bold' }}>
          8 UNITS
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#A7C7A8', 
        padding: '40px', 
        borderRadius: '24px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
      }}>
        <div style={{ 
          backgroundColor: '#D4E9D5', 
          padding: '20px', 
          borderRadius: '16px', 
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1F2937' }}>
            LADY EATON ANNEX - SECOND FLOOR
          </h2>
        </div>

        <div style={{ 
          display: 'flex', 
          gap: '20px', 
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '30px'
        }}>
          <UnitBox number="201" color={colors.goldDark} />
          <UnitBox number="202" color={colors.goldDark} />
          <UnitBox number="203" color={colors.goldDark} />
          <UnitBox number="204" color={colors.bronzeDark} />
          <UnitBox number="205" color={colors.bronzeDark} />
          <UnitBox number="206" color={colors.bronzeDark} />
          <UnitBox number="207" color={colors.silverDark} />
          <UnitBox number="208" color={colors.silverDark} />
        </div>

        <div style={{ 
          display: 'flex', 
          gap: '20px', 
          justifyContent: 'center',
          marginBottom: '20px'
        }}>
          <DonRoomBox number="209" />
        </div>

        <div style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '12px',
          textAlign: 'center',
          fontSize: '16px',
          color: '#6B7280',
          fontStyle: 'italic'
        }}>
          Unit 209 = Don Room (Excluded)
        </div>
      </div>

      <div style={{ 
        marginTop: '30px', 
        backgroundColor: 'white', 
        padding: '24px', 
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1F2937' }}>Summary:</h3>
        <div style={{ fontSize: '18px', lineHeight: '1.8', color: '#374151' }}>
          <div>• <span style={{ fontWeight: 'bold', color: colors.goldDark }}>Gold</span>: 3 units (201, 202, 203) | 15 students</div>
          <div>• <span style={{ fontWeight: 'bold', color: colors.bronzeDark }}>Bronze</span>: 3 units (204, 205, 206) | 15 students</div>
          <div>• <span style={{ fontWeight: 'bold', color: colors.silverDark }}>Silver</span>: 2 units (207, 208) | 10 students</div>
        </div>
      </div>
    </div>
  );

  const ThirdFloor = () => (
    <div style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#1F2937' }}>Third Floor</h1>
        <div style={{ backgroundColor: '#6B7280', color: 'white', padding: '12px 24px', borderRadius: '24px', fontSize: '18px', fontWeight: 'bold' }}>
          17 UNITS
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#A7C7A8', 
        padding: '40px', 
        borderRadius: '24px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        marginBottom: '30px'
      }}>
        <div style={{ 
          backgroundColor: '#D4E9D5', 
          padding: '20px', 
          borderRadius: '16px', 
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1F2937' }}>
            Upper Level Apartments (Water Street)
          </h2>
        </div>

        <div style={{ 
          display: 'flex', 
          gap: '16px', 
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <UnitBox number="310" color={colors.goldDark} />
          <UnitBox number="311" color={colors.goldDark} />
          <UnitBox number="312" color={colors.goldDark} />
          <UnitBox number="313" color={colors.bronzeDark} />
          <UnitBox number="314" color={colors.bronzeDark} />
          <UnitBox number="315" color={colors.bronzeDark} />
          <UnitBox number="316" color={colors.silverDark} />
          <UnitBox number="317" color={colors.silverDark} />
          <UnitBox number="318" color={colors.silverDark} />
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#A7C7A8', 
        padding: '40px', 
        borderRadius: '24px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
      }}>
        <div style={{ 
          backgroundColor: '#D4E9D5', 
          padding: '20px', 
          borderRadius: '16px', 
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1F2937' }}>
            Lower Level Apartments
          </h2>
        </div>

        <div style={{ 
          display: 'flex', 
          gap: '16px', 
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '20px'
        }}>
          <UnitBox number="301" color={colors.goldDark} />
          <UnitBox number="302" color={colors.goldDark} />
          <UnitBox number="303" color={colors.bronzeDark} />
          <UnitBox number="304" color={colors.bronzeDark} />
          <DonRoomBox number="305" />
          <UnitBox number="306" color={colors.silverDark} />
          <UnitBox number="307" color={colors.silverDark} />
          <UnitBox number="308" color={colors.silverDark} />
          <UnitBox number="309" color={colors.silverDark} />
        </div>

        <div style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '12px',
          textAlign: 'center',
          fontSize: '16px',
          color: '#6B7280',
          fontStyle: 'italic'
        }}>
          Unit 305 = Don Room (Excluded)
        </div>
      </div>

      <div style={{ 
        marginTop: '30px', 
        backgroundColor: 'white', 
        padding: '24px', 
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1F2937' }}>Summary:</h3>
        <div style={{ fontSize: '18px', lineHeight: '1.8', color: '#374151' }}>
          <div>• <span style={{ fontWeight: 'bold', color: colors.goldDark }}>Gold</span>: 5 units (301, 302, 310, 311, 312) | 25 students</div>
          <div>• <span style={{ fontWeight: 'bold', color: colors.bronzeDark }}>Bronze</span>: 5 units (303, 304, 313, 314, 315) | 25 students</div>
          <div>• <span style={{ fontWeight: 'bold', color: colors.silverDark }}>Silver</span>: 7 units (306, 307, 308, 309, 316, 317, 318) | 35 students</div>
        </div>
      </div>
    </div>
  );

  const Recommendation = () => (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px', color: '#DC2626' }}>
        ⚠️ Recommendation
      </h1>

      <div style={{ backgroundColor: '#FEF2F2', padding: '30px', borderRadius: '16px', marginBottom: '20px', borderLeft: '6px solid #DC2626' }}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#DC2626', marginBottom: '12px' }}>Current Issue</h3>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#374151' }}>
          There is currently an inconsistency in the number of students per unit across the building. While some units house 5 students, others have only 3 or 4 students due to rooms configured as doubles with only one bed installed.
        </p>
      </div>

      <div style={{ backgroundColor: '#FFFBEB', padding: '30px', borderRadius: '16px', marginBottom: '20px', borderLeft: '6px solid #F59E0B' }}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#92400E', marginBottom: '12px' }}>Impact on Community Balance</h3>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#374151' }}>
          Third floor units currently range from 3-5 students, creating unequal community sizes and making it difficult to maintain consistent programming and don support across sections.
        </p>
      </div>

      <div style={{ backgroundColor: '#F0FDF4', padding: '30px', borderRadius: '16px', borderLeft: '6px solid #16A34A' }}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#16A34A', marginBottom: '12px' }}>✓ Recommended Action</h3>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#374151' }}>
          <strong>Standardize all units to 5 students.</strong> This requires ensuring that all rooms configured as doubles have two beds installed, allowing for consistent occupancy across the entire building and equitable distribution of residents among the three don communities.
        </p>
      </div>
    </div>
  );

  // LADY EATON NORTH COMPONENTS
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
          Why Horizontal Communities for Lady Eaton North?
        </h3>
        <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px', color: '#374151' }}>
          Unlike the Annex, Lady Eaton North has <strong>only 2 dons and 2 residential floors</strong> (no first floor residential rooms). A horizontal floor-based division is the obvious choice here.
        </p>
        <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px', color: '#374151' }}>
          With 2nd floor having 60 students and 3rd floor having 56 students, this creates an <strong>almost perfectly balanced split of 60 vs 56 students</strong> - only a 4-student difference!
        </p>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#374151' }}>
          Each don gets one complete floor, making responsibilities crystal clear and management straightforward.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        <div style={{ backgroundColor: '#FEE2E2', padding: '24px', borderRadius: '12px', borderLeft: '6px solid #DC2626' }}>
          <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#DC2626', marginBottom: '12px' }}>
            🏢 One Floor Per Don
          </h4>
          <p style={{ fontSize: '16px', color: '#374151' }}>
            Each don manages exactly one complete floor - simple, clear, and easy to understand.
          </p>
        </div>

        <div style={{ backgroundColor: '#FEF3C7', padding: '24px', borderRadius: '12px', borderLeft: '6px solid #F59E0B' }}>
          <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#92400E', marginBottom: '12px' }}>
            ⚖️ Nearly Perfect Balance
          </h4>
          <p style={{ fontSize: '16px', color: '#374151' }}>
            With only a 4-student difference (60 vs 56), this is as balanced as it gets for horizontal division.
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '40px', flexWrap: 'wrap' }}>
        <div style={{ backgroundColor: '#FEE2E2', padding: '30px 50px', borderRadius: '12px', textAlign: 'center', border: '3px solid #DC2626' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#DC2626' }}>🔴 RED SECTION</div>
          <div style={{ fontSize: '20px', color: '#374151', marginTop: '12px', fontWeight: 'bold' }}>2nd Floor</div>
          <div style={{ fontSize: '18px', color: '#6B7280', marginTop: '8px' }}>60 students</div>
        </div>
        <div style={{ backgroundColor: '#FEF3C7', padding: '30px 50px', borderRadius: '12px', textAlign: 'center', border: '3px solid #F59E0B' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#F59E0B' }}>🟡 YELLOW SECTION</div>
          <div style={{ fontSize: '20px', color: '#374151', marginTop: '12px', fontWeight: 'bold' }}>3rd Floor</div>
          <div style={{ fontSize: '18px', color: '#6B7280', marginTop: '8px' }}>56 students</div>
        </div>
      </div>

      <div style={{ backgroundColor: '#EFF6FF', padding: '20px', borderRadius: '12px', marginTop: '40px', border: '2px solid #3B82F6' }}>
        <p style={{ fontSize: '16px', color: '#374151', textAlign: 'center', marginBottom: '8px' }}>
          <strong>Total Building Population:</strong>
        </p>
        <p style={{ fontSize: '20px', color: '#1F2937', textAlign: 'center', fontWeight: 'bold' }}>
          116 students (2 floors only - no first floor residential rooms)
        </p>
      </div>
    </div>
  );

  const NorthSecondFloor = () => (
    <div style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#1F2937' }}>Lady Eaton North - Second Floor</h1>
        <div style={{ backgroundColor: '#DC2626', color: 'white', padding: '12px 24px', borderRadius: '24px', fontSize: '18px', fontWeight: 'bold' }}>
          🔴 RED SECTION
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#A7C7A8', 
        padding: '40px', 
        borderRadius: '24px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
      }}>
        <div style={{ 
          backgroundColor: '#FEE2E2', 
          padding: '20px', 
          borderRadius: '16px', 
          marginBottom: '30px',
          textAlign: 'center',
          border: '3px solid #DC2626'
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1F2937' }}>
            LADY EATON NORTH - SECOND FLOOR
          </h2>
          <p style={{ fontSize: '20px', color: '#DC2626', fontWeight: 'bold', marginTop: '8px' }}>Red Section (Don A's Complete Community)</p>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            <div style={{ padding: '16px', backgroundColor: '#FEE2E2', borderRadius: '8px', border: '2px solid #DC2626' }}>
              <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#DC2626' }}>N212 (Double)</p>
              <p style={{ fontSize: '14px', color: '#6B7280' }}>2 students</p>
            </div>
            <div style={{ padding: '16px', backgroundColor: '#FEE2E2', borderRadius: '8px', border: '2px solid #DC2626' }}>
              <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#DC2626' }}>N223 (Double)</p>
              <p style={{ fontSize: '14px', color: '#6B7280' }}>2 students</p>
            </div>
            <div style={{ padding: '16px', backgroundColor: '#FEE2E2', borderRadius: '8px', border: '2px solid #DC2626' }}>
              <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#DC2626' }}>N234 (Double)</p>
              <p style={{ fontSize: '14px', color: '#6B7280' }}>2 students</p>
            </div>
            <div style={{ padding: '16px', backgroundColor: '#FEE2E2', borderRadius: '8px', border: '2px solid #DC2626' }}>
              <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#DC2626' }}>N245 (Double)</p>
              <p style={{ fontSize: '14px', color: '#6B7280' }}>2 students</p>
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
          <div>• <span style={{ fontWeight: 'bold', color: '#DC2626' }}>Red Section</span>: 60 rooms | 60 students</div>
          <div style={{ marginTop: '4px', paddingLeft: '20px', fontSize: '16px', color: '#6B7280' }}>
            - 4 double rooms (8 students)
          </div>
          <div style={{ paddingLeft: '20px', fontSize: '16px', color: '#6B7280' }}>
            - 56 single rooms (56 students)
          </div>
        </div>
      </div>
    </div>
  );

  const NorthThirdFloor = () => (
    <div style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#1F2937' }}>Lady Eaton North - Third Floor</h1>
        <div style={{ backgroundColor: '#F59E0B', color: 'white', padding: '12px 24px', borderRadius: '24px', fontSize: '18px', fontWeight: 'bold' }}>
          🟡 YELLOW SECTION
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#A7C7A8', 
        padding: '40px', 
        borderRadius: '24px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
      }}>
        <div style={{ 
          backgroundColor: '#FEF3C7', 
          padding: '20px', 
          borderRadius: '16px', 
          marginBottom: '30px',
          textAlign: 'center',
          border: '3px solid #F59E0B'
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1F2937' }}>
            LADY EATON NORTH - THIRD FLOOR
          </h2>
          <p style={{ fontSize: '20px', color: '#F59E0B', fontWeight: 'bold', marginTop: '8px' }}>Yellow Section (Don B's Complete Community)</p>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '20px' }}>
            <div style={{ padding: '16px', backgroundColor: '#FEF3C7', borderRadius: '8px', border: '2px solid #F59E0B' }}>
              <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#F59E0B' }}>N322 (Double)</p>
              <p style={{ fontSize: '14px', color: '#6B7280' }}>2 students</p>
            </div>
            <div style={{ padding: '16px', backgroundColor: '#FEF3C7', borderRadius: '8px', border: '2px solid #F59E0B' }}>
              <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#F59E0B' }}>N333 (Double)</p>
              <p style={{ fontSize: '14px', color: '#6B7280' }}>2 students</p>
            </div>
          </div>
          <p style={{ fontSize: '18px', color: '#374151', textAlign: 'center' }}>
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
          <div>• <span style={{ fontWeight: 'bold', color: '#F59E0B' }}>Yellow Section</span>: 56 rooms | 56 students</div>
          <div style={{ marginTop: '4px', paddingLeft: '20px', fontSize: '16px', color: '#6B7280' }}>
            - 2 double rooms (4 students)
          </div>
          <div style={{ paddingLeft: '20px', fontSize: '16px', color: '#6B7280' }}>
            - 54 single rooms (54 students)
          </div>
        </div>
      </div>
    </div>
  );

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
        {/* Building Selector */}
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto 20px auto', 
          display: 'flex', 
          gap: '16px',
          justifyContent: 'center',
          borderBottom: '2px solid #E5E7EB',
          paddingBottom: '16px'
        }}>
          <button 
            onClick={() => {
              setCurrentBuilding('annex');
              setCurrentFloor('intro');
            }}
            style={{
              padding: '14px 32px',
              fontSize: '18px',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              backgroundColor: currentBuilding === 'annex' ? '#10B981' : 'white',
              color: currentBuilding === 'annex' ? 'white' : '#1F2937',
              border: `3px solid ${currentBuilding === 'annex' ? '#10B981' : '#D1D5DB'}`,
              transition: 'all 0.3s'
            }}
          >
            🏛️ Lady Eaton Annex
          </button>
          <button 
            onClick={() => {
              setCurrentBuilding('north');
              setCurrentFloor('north-intro');
            }}
            style={{
              padding: '14px 32px',
              fontSize: '18px',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              backgroundColor: currentBuilding === 'north' ? '#3B82F6' : 'white',
              color: currentBuilding === 'north' ? 'white' : '#1F2937',
              border: `3px solid ${currentBuilding === 'north' ? '#3B82F6' : '#D1D5DB'}`,
              transition: 'all 0.3s'
            }}
          >
            🏢 Lady Eaton North
          </button>
        </div>

        {/* Annex Navigation */}
        {currentBuilding === 'annex' && (
          <div style={{ 
            maxWidth: '1400px', 
            margin: '0 auto', 
            display: 'flex', 
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button 
              onClick={() => setCurrentFloor('intro')}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: currentFloor === 'intro' ? '#1F2937' : 'white',
                color: currentFloor === 'intro' ? 'white' : '#1F2937',
                border: '2px solid #1F2937',
                transition: 'all 0.3s'
              }}
            >
              Introduction
            </button>
            <button 
              onClick={() => setCurrentFloor('first')}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: currentFloor === 'first' ? '#1F2937' : 'white',
                color: currentFloor === 'first' ? 'white' : '#1F2937',
                border: '2px solid #1F2937',
                transition: 'all 0.3s'
              }}
            >
              First Floor
            </button>
            <button 
              onClick={() => setCurrentFloor('second')}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: currentFloor === 'second' ? '#1F2937' : 'white',
                color: currentFloor === 'second' ? 'white' : '#1F2937',
                border: '2px solid #1F2937',
                transition: 'all 0.3s'
              }}
            >
              Second Floor
            </button>
            <button 
              onClick={() => setCurrentFloor('third')}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: currentFloor === 'third' ? '#1F2937' : 'white',
                color: currentFloor === 'third' ? 'white' : '#1F2937',
                border: '2px solid #1F2937',
                transition: 'all 0.3s'
              }}
            >
              Third Floor
            </button>
            <button 
              onClick={() => setCurrentFloor('recommendation')}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: currentFloor === 'recommendation' ? '#DC2626' : 'white',
                color: currentFloor === 'recommendation' ? 'white' : '#DC2626',
                border: '2px solid #DC2626',
                transition: 'all 0.3s'
              }}
            >
              Recommendation
            </button>
          </div>
        )}

        {/* North Navigation */}
        {currentBuilding === 'north' && (
          <div style={{ 
            maxWidth: '1400px', 
            margin: '0 auto', 
            display: 'flex', 
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button 
              onClick={() => setCurrentFloor('north-intro')}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: currentFloor === 'north-intro' ? '#3B82F6' : 'white',
                color: currentFloor === 'north-intro' ? 'white' : '#3B82F6',
                border: '2px solid #3B82F6',
                transition: 'all 0.3s'
              }}
            >
              Introduction
            </button>
            <button 
              onClick={() => setCurrentFloor('north-second')}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: currentFloor === 'north-second' ? '#DC2626' : 'white',
                color: currentFloor === 'north-second' ? 'white' : '#DC2626',
                border: '2px solid #DC2626',
                transition: 'all 0.3s'
              }}
            >
              🔴 2nd Floor (Red)
            </button>
            <button 
              onClick={() => setCurrentFloor('north-third')}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: currentFloor === 'north-third' ? '#F59E0B' : 'white',
                color: currentFloor === 'north-third' ? 'white' : '#F59E0B',
                border: '2px solid #F59E0B',
                transition: 'all 0.3s'
              }}
            >
              🟡 3rd Floor (Yellow)
            </button>
          </div>
        )}
      </nav>

      {/* Content */}
      <div style={{ paddingTop: '20px', paddingBottom: '40px' }}>
        {currentBuilding === 'annex' && (
          <>
            {currentFloor === 'intro' && <IntroPage />}
            {currentFloor === 'first' && <FirstFloor />}
            {currentFloor === 'second' && <SecondFloor />}
            {currentFloor === 'third' && <ThirdFloor />}
            {currentFloor === 'recommendation' && <Recommendation />}
          </>
        )}
        {currentBuilding === 'north' && (
          <>
            {currentFloor === 'north-intro' && <NorthIntro />}
            {currentFloor === 'north-second' && <NorthSecondFloor />}
            {currentFloor === 'north-third' && <NorthThirdFloor />}
          </>
        )}
      </div>
    </div>
  );
};

export default FloorPlanApp;
