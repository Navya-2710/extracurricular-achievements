import React from 'react';

const Footer = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem', position: 'fixed', bottom: 0, width: '100%', backgroundColor: 'lightpink', color: 'white', fontSize: '0.6rem', padding: '0.5rem' }}>
      <h3>
        @copyrights reserved by kluniversity | {formattedDate}
      </h3>
    </div>
  );
};

export default Footer;