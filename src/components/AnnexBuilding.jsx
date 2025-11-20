import React from 'react';
import { UnitBox, DonRoomBox, colors } from './SharedComponents';

const AnnexBuilding = ({ currentFloor, setCurrentFloor }) => {
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

  return (
    <>
      {currentFloor === 'intro' && <IntroPage />}
      {currentFloor === 'first' && <FirstFloor />}
      {currentFloor === 'second' && <SecondFloor />}
      {currentFloor === 'third' && <ThirdFloor />}
      {currentFloor === 'recommendation' && <Recommendation />}
    </>
  );
};

export default AnnexBuilding;
