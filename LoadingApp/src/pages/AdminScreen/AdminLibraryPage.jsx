import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLibraryComponent from '../../components/AdminScreen/AdminLibrary/AdminLibraryComponent';

function AdminLibraryPage() {
  const navigate = useNavigate();

  return (
<AdminLibraryComponent></AdminLibraryComponent>
  );
}

export default AdminLibraryPage;
