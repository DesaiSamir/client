import React from 'react';

const ContinueButton: React.FC = () => {
  return (
    <button className="continue-button" onClick={() => alert('Proceed to Next Chapter')}>
      CONTINUE
    </button>
  );
};

export default ContinueButton;
