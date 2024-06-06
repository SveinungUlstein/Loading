import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHomeComponent from '../../components/AdminScreen/AdminHome/AdminHomeComponent';

function AdminHomePage() {
  const navigate = useNavigate();

  return (
<AdminHomeComponent></AdminHomeComponent>
  );
}

export default AdminHomePage;
