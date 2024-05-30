import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserChoiceComponent from '../../components/PhoneScreen/UserChoiceScreen/UserChoiceComponent';

function UserChoicePage() {
  const navigate = useNavigate();

  return (
 <UserChoiceComponent></UserChoiceComponent>
  );
}

export default UserChoicePage;
