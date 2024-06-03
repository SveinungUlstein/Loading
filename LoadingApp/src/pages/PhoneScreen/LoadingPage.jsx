import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingComponent from '../../components/PhoneScreen/LoadingScreen/LoadingComponent';

function LoadingPage() {
  const navigate = useNavigate();

  return (
   <LoadingComponent></LoadingComponent>
  );
}

export default LoadingPage;
