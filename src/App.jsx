import React, { useState } from 'react';
import ChamplainBuilding from './components/ChamplainBuilding';
import SouthBuilding from './components/SouthBuilding';

const FloorPlanApp = () => {
  const [currentFloor, setCurrentFloor] = useState('intro');
  const [currentBuilding, setCurrentBuilding] = useState('annex'); // 'annex', 'north', or 'champlain'

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

  const NorthRecommendation = () => (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px', color: '#3B82F6' }}>
        ✓ Recommendations
      </h1>

      <div style={{ backgroundColor: '#DBEAFE', padding: '30px', borderRadius: '16px', marginBottom: '20px', borderLeft: '6px solid #3B82F6' }}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1E40AF', marginBottom: '12px' }}>🚨 Emergency Exit & Muster Point Alignment</h3>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#374151' }}>
          The vertical West/East division system is particularly effective because <strong>each don exits from their designated side of the building</strong> based on their floor location (left or right). This aligns perfectly with muster point assignments, ensuring that <strong>students have a don leader going to the correct muster point</strong>. In emergency evacuations, this geographic clarity reduces confusion and ensures all students can quickly identify and follow their designated don to safety.
        </p>
      </div>

      <div style={{ backgroundColor: '#D1FAE5', padding: '30px', borderRadius: '16px', marginBottom: '20px', borderLeft: '6px solid #10B981' }}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#065F46', marginBottom: '12px' }}>⚖️ Equal Workload Distribution</h3>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#374151' }}>
          With the vertical division, the workload is now <strong>perfectly equal between the two dons</strong> - each managing exactly 58 students across two floors. This ensures fair distribution of responsibilities, including duty rounds, programming requirements, one-on-ones, and administrative tasks. Neither don is overburdened, creating a sustainable and balanced work environment.
        </p>
      </div>

      <div style={{ backgroundColor: '#FEF3C7', padding: '30px', borderRadius: '16px', marginBottom: '20px', borderLeft: '6px solid #F59E0B' }}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#92400E', marginBottom: '12px' }}>👥 Floor Community Interaction</h3>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#374151' }}>
          Dons still have the opportunity to <strong>interact with all students on their floors</strong> through shared common rooms and laundry facilities. The vertical division doesn't isolate dons from half the floor - rather, it <strong>clarifies their direct responsibilities while maintaining floor-wide community</strong>. This makes administrative deadlines more manageable and evenly distributed, as each don has clear accountability for their 58 students rather than competing priorities.
        </p>
      </div>

      <div style={{ backgroundColor: '#FEE2E2', padding: '30px', borderRadius: '16px', borderLeft: '6px solid #DC2626' }}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#991B1B', marginBottom: '12px' }}>📅 Assignment Deadline Extensions</h3>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#374151', marginBottom: '16px' }}>
          Given the number of students assigned to Lady Eaton North dons (58 students each), <strong>assignment due dates should be extended to match those given to dons in the Lady Eaton Annex and Champlain buildings</strong>. Managing 58 students creates a comparable workload to the annex buildings, and dons should receive equivalent time to complete:
        </p>
        <ul style={{ fontSize: '18px', lineHeight: '1.8', color: '#374151', marginLeft: '24px' }}>
          <li>One-on-one check-ins and documentation</li>
          <li>Community programming and event planning</li>
          <li>Administrative reports and assessments</li>
          <li>Incident documentation and follow-ups</li>
        </ul>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#374151', marginTop: '16px' }}>
          <strong>Equal student loads should mean equal deadlines</strong> - this ensures fairness across all Lady Eaton College dons regardless of which building they serve.
        </p>
      </div>

      <div style={{ backgroundColor: '#EFF6FF', padding: '30px', borderRadius: '16px', border: '2px solid #3B82F6', marginTop: '30px' }}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1E40AF', marginBottom: '16px', textAlign: 'center' }}>Summary of Benefits</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          <div style={{ padding: '16px', backgroundColor: 'white', borderRadius: '8px' }}>
            <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#3B82F6', marginBottom: '8px' }}>✓ Emergency Safety</p>
            <p style={{ fontSize: '14px', color: '#6B7280' }}>Clear exit routes and muster point leadership</p>
          </div>
          <div style={{ padding: '16px', backgroundColor: 'white', borderRadius: '8px' }}>
            <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#3B82F6', marginBottom: '8px' }}>✓ Equal Workload</p>
            <p style={{ fontSize: '14px', color: '#6B7280' }}>58 students per don - perfectly balanced</p>
          </div>
          <div style={{ padding: '16px', backgroundColor: 'white', borderRadius: '8px' }}>
            <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#3B82F6', marginBottom: '8px' }}>✓ Community Access</p>
            <p style={{ fontSize: '14px', color: '#6B7280' }}>Shared facilities maintain floor-wide connections</p>
          </div>
          <div style={{ padding: '16px', backgroundColor: 'white', borderRadius: '8px' }}>
            <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#3B82F6', marginBottom: '8px' }}>✓ Fair Deadlines</p>
            <p style={{ fontSize: '14px', color: '#6B7280' }}>Extended timelines matching annex buildings</p>
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
          <button
            onClick={() => {
              setCurrentBuilding('champlain');
              setCurrentFloor('champlain-intro');
            }}
            style={{
              padding: '14px 32px',
              fontSize: '18px',
              fontWeight: 'bold',
              borderRadius: '10px',
              cursor: 'pointer',
              backgroundColor: currentBuilding === 'champlain' ? '#7C3AED' : 'white',
              color: currentBuilding === 'champlain' ? 'white' : '#1F2937',
              border: `3px solid ${currentBuilding === 'champlain' ? '#7C3AED' : '#D1D5DB'}`,
              transition: 'all 0.3s'
            }}
          >
            💎 Champlain Annex
          </button>
          <button
            onClick={() => {
              setCurrentBuilding('south');
              setCurrentFloor('south-intro');
            }}
            style={{
              padding: '14px 32px',
              fontSize: '18px',
              fontWeight: 'bold',
              borderRadius: '10px',
              cursor: 'pointer',
              backgroundColor: currentBuilding === 'south' ? '#F97316' : 'white',
              color: currentBuilding === 'south' ? 'white' : '#1F2937',
              border: `3px solid ${currentBuilding === 'south' ? '#F97316' : '#D1D5DB'}`,
              transition: 'all 0.3s'
            }}
          >
            🏠 Lady Eaton South
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
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: currentFloor === 'north-second' ? '#6B7280' : 'white',
                color: currentFloor === 'north-second' ? 'white' : '#6B7280',
                border: '2px solid #6B7280',
                transition: 'all 0.3s'
              }}
            >
              2nd Floor Split
            </button>
            <button
              onClick={() => setCurrentFloor('north-third')}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: currentFloor === 'north-third' ? '#6B7280' : 'white',
                color: currentFloor === 'north-third' ? 'white' : '#6B7280',
                border: '2px solid #6B7280',
                transition: 'all 0.3s'
              }}
            >
              3rd Floor Split
            </button>
            <button
              onClick={() => setCurrentFloor('north-recommendation')}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: currentFloor === 'north-recommendation' ? '#3B82F6' : 'white',
                color: currentFloor === 'north-recommendation' ? 'white' : '#3B82F6',
                border: '2px solid #3B82F6',
                transition: 'all 0.3s'
              }}
            >
              Recommendations
            </button>
          </div>
        )}

        {/* Champlain Navigation */}
        {currentBuilding === 'champlain' && (
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => setCurrentFloor('champlain-intro')}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: currentFloor === 'champlain-intro' ? '#7C3AED' : 'white',
                color: currentFloor === 'champlain-intro' ? 'white' : '#7C3AED',
                border: '2px solid #7C3AED',
                transition: 'all 0.3s'
              }}
            >
              Introduction
            </button>
            <button
              onClick={() => setCurrentFloor('champlain-first')}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: currentFloor === 'champlain-first' ? '#6B7280' : 'white',
                color: currentFloor === 'champlain-first' ? 'white' : '#6B7280',
                border: '2px solid #6B7280',
                transition: 'all 0.3s'
              }}
            >
              First Floor
            </button>
            <button
              onClick={() => setCurrentFloor('champlain-second')}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: currentFloor === 'champlain-second' ? '#6B7280' : 'white',
                color: currentFloor === 'champlain-second' ? 'white' : '#6B7280',
                border: '2px solid #6B7280',
                transition: 'all 0.3s'
              }}
            >
              Second Floor
            </button>
            <button
              onClick={() => setCurrentFloor('champlain-third')}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: currentFloor === 'champlain-third' ? '#6B7280' : 'white',
                color: currentFloor === 'champlain-third' ? 'white' : '#6B7280',
                border: '2px solid #6B7280',
                transition: 'all 0.3s'
              }}
            >
              Third Floor
            </button>
            <button
              onClick={() => setCurrentFloor('champlain-recommendation')}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: currentFloor === 'champlain-recommendation' ? '#7C3AED' : 'white',
                color: currentFloor === 'champlain-recommendation' ? 'white' : '#7C3AED',
                border: '2px solid #7C3AED',
                transition: 'all 0.3s'
              }}
            >
              Recommendation
            </button>
          </div>
        )}

        {/* South Navigation */}
        {currentBuilding === 'south' && (
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => setCurrentFloor('south-intro')}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: currentFloor === 'south-intro' ? '#F97316' : 'white',
                color: currentFloor === 'south-intro' ? 'white' : '#F97316',
                border: '2px solid #F97316',
                transition: 'all 0.3s'
              }}
            >
              Introduction
            </button>
            <button
              onClick={() => setCurrentFloor('south-first')}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: currentFloor === 'south-first' ? '#6B7280' : 'white',
                color: currentFloor === 'south-first' ? 'white' : '#6B7280',
                border: '2px solid #6B7280',
                transition: 'all 0.3s'
              }}
            >
              1st Floor
            </button>
            <button
              onClick={() => setCurrentFloor('south-second')}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: currentFloor === 'south-second' ? '#6B7280' : 'white',
                color: currentFloor === 'south-second' ? 'white' : '#6B7280',
                border: '2px solid #6B7280',
                transition: 'all 0.3s'
              }}
            >
              2nd Floor
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
            {currentFloor === 'north-recommendation' && <NorthRecommendation />}
          </>
        )}
        {currentBuilding === 'champlain' && (
          <ChamplainBuilding currentFloor={currentFloor} setCurrentFloor={setCurrentFloor} />
        )}
        {currentBuilding === 'south' && (
          <SouthBuilding currentFloor={currentFloor} setCurrentFloor={setCurrentFloor} />
        )}
      </div>
    </div>
  );
};

export default FloorPlanApp;
