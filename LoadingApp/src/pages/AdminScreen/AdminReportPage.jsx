import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminReportComponent from '../../components/AdminScreen/AdminReport/AdminReportComponent';

function AdminReportPage() {
  const navigate = useNavigate();

  return (
<AdminReportComponent></AdminReportComponent>
  );
}

export default AdminReportPage;
