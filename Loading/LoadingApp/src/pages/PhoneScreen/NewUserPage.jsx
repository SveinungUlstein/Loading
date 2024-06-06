import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewUserComponent from '../../components/PhoneScreen/NewUserScreen/NewUserComponent';

function NewUserPage() {
  const navigate = useNavigate();

  return (
 <NewUserComponent></NewUserComponent>
  );
}

export default NewUserPage;
