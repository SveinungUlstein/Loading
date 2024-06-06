import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Common/ArrowNavigation.css';

const ArrowNavigationRight = ({ nextPage }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(nextPage);
  };

  return (
    <div className="arrow-navigation-right-container" onClick={handleClick}>
      <img src="\src\images\ArrowRight.png" alt="Arrow Right" className="h-auto w-auto cursor-pointer" style={{ width: '150px', height: '150px' }} />
    </div>
  );
};

export default ArrowNavigationRight;
