import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Common/ArrowNavigation.css';

const ArrowNavigationLeft = ({ nextPage }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(nextPage);
  };

  return (
    <div className="arrow-navigation-left-container" onClick={handleClick}>
      <img src="\src\images\ArrowLeft.png" alt="Arrow Left" className="h-20 w-20 cursor-pointer" style={{ width: '150px', height: '150px' }} />
    </div>
  );
};

export default ArrowNavigationLeft;
