import React from 'react';

const ChamplainBuilding = ({ currentFloor, setCurrentFloor }) => {
  const colors = {
    ruby: '#FEE2E2',
    rubyDark: '#DC2626',
    emerald: '#D1FAE5',
    emeraldDark: '#059669',
    sapphire: '#DBEAFE',
    sapphireDark: '#2563EB',
    donRoom: '#D1D5DB'
  };

  const UnitBox = ({ number, color }) => (
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

  const ChamplainIntro = () => (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', color: '#1F2937' }}>
        Champlain Annex
      </h1>
      <h2 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '40px', color: '#374151' }}>
        Community Division Proposal
      </h2>

      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '16px', marginBottom: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#1F2937' }}>
          Why Vertical Communities for Champlain Annex?
        </h3>
        <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px', color: '#374151' }}>
          I recommend implementing a vertical community system for Champlain Annex, dividing the building into three distinct sections: <span style={{ fontWeight: 'bold', color: colors.rubyDark }}>Ruby</span>, <span style={{ fontWeight: 'bold', color: colors.emeraldDark }}>Emerald</span>, and <span style={{ fontWeight: 'bold', color: colors.sapphireDark }}>Sapphire</span>. Each don manages one vertical section spanning all three floors.
        </p>
        <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px', color: '#374151' }}>
          This vertical approach is ideal for the Annex because <strong>the entire building can be completed in a duty round in just five minutes</strong>, making it efficient for dons to monitor their entire section.
        </p>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#374151' }}>
          Additionally, the layout of the floors makes horizontal division impractical. The third floor has significantly more units than the first and second floors, making it impossible to create equal horizontal communities across floors. With a vertical system, <strong>dons simply stick to their side of the building</strong> - left (Ruby), middle (Emerald), or right (Sapphire) - which is far more intuitive than trying to remember scattered unit numbers across different floors.
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
            ⚖️ Near-Equal Distribution
          </h4>
          <p style={{ fontSize: '16px', color: '#374151' }}>
            Third floor has way more units than first/second, making horizontal division impossible. Vertical ensures communities of 11-13 units each.
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '40px', flexWrap: 'wrap' }}>
        <div style={{ backgroundColor: colors.ruby, padding: '20px 40px', borderRadius: '12px', textAlign: 'center', border: `3px solid ${colors.rubyDark}` }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: colors.rubyDark }}>💎 RUBY</div>
          <div style={{ fontSize: '16px', color: '#374151', marginTop: '8px' }}>11 units | 55 students</div>
        </div>
        <div style={{ backgroundColor: colors.emerald, padding: '20px 40px', borderRadius: '12px', textAlign: 'center', border: `3px solid ${colors.emeraldDark}` }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: colors.emeraldDark }}>💚 EMERALD</div>
          <div style={{ fontSize: '16px', color: '#374151', marginTop: '8px' }}>11 units | 55 students</div>
        </div>
        <div style={{ backgroundColor: colors.sapphire, padding: '20px 40px', borderRadius: '12px', textAlign: 'center', border: `3px solid ${colors.sapphireDark}` }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: colors.sapphireDark }}>💙 SAPPHIRE</div>
          <div style={{ fontSize: '16px', color: '#374151', marginTop: '8px' }}>13 units | 65 students</div>
        </div>
      </div>

      <div style={{ backgroundColor: '#FEF3C7', padding: '20px', borderRadius: '12px', marginTop: '30px', border: '2px solid #F59E0B' }}>
        <p style={{ fontSize: '16px', color: '#92400E', textAlign: 'center' }}>
          <strong>Note:</strong> Due to the building layout, Sapphire has 2 additional units. This slight imbalance is unavoidable while maintaining geographic coherence.
        </p>
      </div>

      <div style={{ backgroundColor: '#EFF6FF', padding: '20px', borderRadius: '12px', marginTop: '20px', border: '2px solid #3B82F6' }}>
        <p style={{ fontSize: '16px', color: '#374151', textAlign: 'center', marginBottom: '8px' }}>
          <strong>Total Building Population:</strong>
        </p>
        <p style={{ fontSize: '20px', color: '#1F2937', textAlign: 'center', fontWeight: 'bold' }}>
          35 units | 175 students (3 dons)
        </p>
      </div>
    </div>
  );

  const FirstFloor = () => (
    <div style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#1F2937' }}>First Floor</h1>
        <div style={{ backgroundColor: '#6B7280', color: 'white', padding: '12px 24px', borderRadius: '24px', fontSize: '18px', fontWeight: 'bold' }}>
          9 UNITS
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
            CHAMPLAIN ANNEX - FIRST FLOOR
          </h2>
        </div>

        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '30px'
        }}>
          <UnitBox number="101" color={colors.rubyDark} />
          <UnitBox number="102" color={colors.rubyDark} />
          <UnitBox number="103" color={colors.rubyDark} />
          <UnitBox number="104" color={colors.emeraldDark} />
          <UnitBox number="105" color={colors.emeraldDark} />
          <UnitBox number="106" color={colors.emeraldDark} />
          <UnitBox number="107" color={colors.sapphireDark} />
          <UnitBox number="108" color={colors.sapphireDark} />
          <UnitBox number="109" color={colors.sapphireDark} />
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
          <div>• <span style={{ fontWeight: 'bold', color: colors.rubyDark }}>Ruby</span>: 3 units (101, 102, 103) | 15 students</div>
          <div>• <span style={{ fontWeight: 'bold', color: colors.emeraldDark }}>Emerald</span>: 3 units (104, 105, 106) | 15 students</div>
          <div>• <span style={{ fontWeight: 'bold', color: colors.sapphireDark }}>Sapphire</span>: 3 units (107, 108, 109) | 15 students</div>
        </div>
      </div>
    </div>
  );

  const SecondFloor = () => (
    <div style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#1F2937' }}>Second Floor</h1>
        <div style={{ backgroundColor: '#6B7280', color: 'white', padding: '12px 24px', borderRadius: '24px', fontSize: '18px', fontWeight: 'bold' }}>
          9 UNITS
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
            CHAMPLAIN ANNEX - SECOND FLOOR
          </h2>
        </div>

        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '30px'
        }}>
          <UnitBox number="201" color={colors.rubyDark} />
          <UnitBox number="202" color={colors.rubyDark} />
          <UnitBox number="203" color={colors.rubyDark} />
          <UnitBox number="204" color={colors.emeraldDark} />
          <UnitBox number="205" color={colors.emeraldDark} />
          <UnitBox number="206" color={colors.emeraldDark} />
          <UnitBox number="207" color={colors.sapphireDark} />
          <UnitBox number="208" color={colors.sapphireDark} />
          <UnitBox number="209" color={colors.sapphireDark} />
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
          <div>• <span style={{ fontWeight: 'bold', color: colors.rubyDark }}>Ruby</span>: 3 units (201, 202, 203) | 15 students</div>
          <div>• <span style={{ fontWeight: 'bold', color: colors.emeraldDark }}>Emerald</span>: 3 units (204, 205, 206) | 15 students</div>
          <div>• <span style={{ fontWeight: 'bold', color: colors.sapphireDark }}>Sapphire</span>: 3 units (207, 208, 209) | 15 students</div>
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
            Upper Level Apartments
          </h2>
        </div>

        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <UnitBox number="310" color={colors.rubyDark} />
          <UnitBox number="311" color={colors.rubyDark} />
          <UnitBox number="312" color={colors.rubyDark} />
          <UnitBox number="313" color={colors.emeraldDark} />
          <UnitBox number="314" color={colors.emeraldDark} />
          <UnitBox number="315" color={colors.emeraldDark} />
          <UnitBox number="316" color={colors.sapphireDark} />
          <UnitBox number="317" color={colors.sapphireDark} />
          <UnitBox number="318" color={colors.sapphireDark} />
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
          <UnitBox number="301" color={colors.rubyDark} />
          <UnitBox number="302" color={colors.rubyDark} />
          <UnitBox number="303" color={colors.emeraldDark} />
          <UnitBox number="304" color={colors.emeraldDark} />
          <DonRoomBox number="305" />
          <UnitBox number="306" color={colors.sapphireDark} />
          <UnitBox number="307" color={colors.sapphireDark} />
          <UnitBox number="308" color={colors.sapphireDark} />
          <UnitBox number="309" color={colors.sapphireDark} />
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
          <div>• <span style={{ fontWeight: 'bold', color: colors.rubyDark }}>Ruby</span>: 5 units (301, 302, 310, 311, 312) | 25 students</div>
          <div>• <span style={{ fontWeight: 'bold', color: colors.emeraldDark }}>Emerald</span>: 5 units (303, 304, 313, 314, 315) | 25 students</div>
          <div>• <span style={{ fontWeight: 'bold', color: colors.sapphireDark }}>Sapphire</span>: 7 units (306, 307, 308, 309, 316, 317, 318) | 35 students</div>
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
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#DC2626', marginBottom: '12px' }}>Current Distribution Imbalance</h3>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#374151' }}>
          Due to the building's layout, the Sapphire community has 13 units (65 students) while Ruby and Emerald each have 11 units (55 students). This creates a 10-student difference between the largest and smallest communities.
        </p>
      </div>

      <div style={{ backgroundColor: '#FFFBEB', padding: '30px', borderRadius: '16px', marginBottom: '20px', borderLeft: '6px solid #F59E0B' }}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#92400E', marginBottom: '12px' }}>Impact on Community Balance</h3>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#374151' }}>
          The Sapphire don will have a slightly larger community to manage. This is unavoidable while maintaining geographic coherence (keeping the right side of the building together). Redistributing units would break the intuitive "stick to your side" approach.
        </p>
      </div>

      <div style={{ backgroundColor: '#F0FDF4', padding: '30px', borderRadius: '16px', borderLeft: '6px solid #16A34A' }}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#16A34A', marginBottom: '12px' }}>✓ Recommended Action</h3>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#374151' }}>
          <strong>Accept the slight imbalance.</strong> The geographic clarity of vertical divisions outweighs the 2-unit difference. The Sapphire don should be made aware of their slightly larger community during training. Consider giving Sapphire priority for programming resources or peer support if needed.
        </p>
      </div>

      <div style={{
        marginTop: '30px',
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1F2937' }}>Final Distribution:</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px' }}>
          <div style={{ backgroundColor: colors.ruby, padding: '20px', borderRadius: '12px', textAlign: 'center', border: `3px solid ${colors.rubyDark}` }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: colors.rubyDark }}>💎 RUBY</div>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#1F2937', marginTop: '12px' }}>11</div>
            <div style={{ fontSize: '16px', color: '#374151' }}>units</div>
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: colors.rubyDark, marginTop: '8px' }}>55 students</div>
          </div>
          <div style={{ backgroundColor: colors.emerald, padding: '20px', borderRadius: '12px', textAlign: 'center', border: `3px solid ${colors.emeraldDark}` }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: colors.emeraldDark }}>💚 EMERALD</div>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#1F2937', marginTop: '12px' }}>11</div>
            <div style={{ fontSize: '16px', color: '#374151' }}>units</div>
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: colors.emeraldDark, marginTop: '8px' }}>55 students</div>
          </div>
          <div style={{ backgroundColor: colors.sapphire, padding: '20px', borderRadius: '12px', textAlign: 'center', border: `3px solid ${colors.sapphireDark}` }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: colors.sapphireDark }}>💙 SAPPHIRE</div>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#1F2937', marginTop: '12px' }}>13</div>
            <div style={{ fontSize: '16px', color: '#374151' }}>units</div>
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: colors.sapphireDark, marginTop: '8px' }}>65 students</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {currentFloor === 'champlain-intro' && <ChamplainIntro />}
      {currentFloor === 'champlain-first' && <FirstFloor />}
      {currentFloor === 'champlain-second' && <SecondFloor />}
      {currentFloor === 'champlain-third' && <ThirdFloor />}
      {currentFloor === 'champlain-recommendation' && <Recommendation />}
    </>
  );
};

export default ChamplainBuilding;
