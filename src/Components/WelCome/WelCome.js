import React from 'react';
import './WelCome.css';

function VedicAIPage() {
  return (
    <div className="vedicAIPage">
      <img src="https://i.ibb.co/k8nB0wP/images.jpg" alt="images" border="0" className='arya-image'/>
      <div className="arya-text">
        <span role="img" aria-label="Namaste Emoji">🙏</span> Namaste! I’m Arya, your AI Vedic help.
      </div>
      <div className="arya-subtext">
        I'm here to provide insights from Vedas for daily life concerns.
        Whether you seek guidance on mantras, general life advice, or specific Vedic interpretations, I’m here to assist you.
      </div>
    </div>
  );
}

export default VedicAIPage;
