// src/components/Logo.jsx
const Logo = () => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h1 style={{ 
        fontFamily: 'Segoe UI, sans-serif',
        fontWeight: '600',
        fontSize: '28px',
        color: '#333',
        letterSpacing: '1px'
      }}>
        <span style={{ color: '#555' }}>Zen</span><span style={{ color: '#000' }}>Bug</span>
      </h1>
    </div>
  );
};

export default Logo;
