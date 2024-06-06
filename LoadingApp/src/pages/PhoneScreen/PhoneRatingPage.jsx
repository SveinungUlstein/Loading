import React from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneRatingComponent from '../../components/PhoneScreen/RatingScreen/PhoneRatingComponent';
function PhoneRatingPage() {
  const navigate = useNavigate();

  return (
  <PhoneRatingComponent></PhoneRatingComponent>
  );
}

export default PhoneRatingPage;
