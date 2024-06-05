import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Common/ArrowNavigationRight.css';

const ArrowNavigationLeft = ({ nextPage }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(nextPage);
  };

  return (
    <div className="arrow-navigation-left-container" onClick={handleClick}>
      <img src="\src\images\PilOgBue.png" alt="Arrow Left" className="h-12 w-12 cursor-pointer" />
    </div>
  );
};

export default ArrowNavigationLeft;
