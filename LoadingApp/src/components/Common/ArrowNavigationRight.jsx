import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Common/ArrowNavigationRight.css';

const ArrowNavigationRight = ({ nextPage }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(nextPage);
  };

  return (
    <div className="arrow-navigation-right-container" onClick={handleClick}>
      <img src="\src\images\PilOgBue.png" alt="Arrow Right" className="h-12 w-12 cursor-pointer" />
    </div>
  );
};

export default ArrowNavigationRight;
