import React from 'react';
import { useNavigate } from 'react-router-dom';
import InstructionComponent from '../../components/PhoneScreen/InstructionScreen/InstructionComponent';

function InstructionPage() {
  const navigate = useNavigate();

  return (
    <InstructionComponent></InstructionComponent>
  );
}

export default InstructionPage;
