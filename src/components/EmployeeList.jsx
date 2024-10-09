import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DataTable from 'react-data-table-component';  // Librairie pour le tableau
import { fetchEmployees } from '../features/user/userSlice'; // Action pour récupérer les employés
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const dispatch = useDispatch();
  const employeeList = useSelector((state) => state.user.employeeList); // Récupère la liste des employés depuis Redux
  
  useEffect(() => {
    dispatch(fetchEmployees());  // Charge les employés au montage
  }, [dispatch]);

  const columns = [
    { name: 'First Name', selector: row => row.firstName, sortable: true },
    { name: 'Last Name', selector: row => row.lastName, sortable: true },
    { name: 'Start Date', selector: row => row.startDate, sortable: true },
    { name: 'Department', selector: row => row.department, sortable: true },
    { name: 'Date of Birth', selector: row => row.dateOfBirth, sortable: true },
    { name: 'Street', selector: row => row.street, sortable: true },
    { name: 'City', selector: row => row.city, sortable: true },
    { name: 'State', selector: row => row.state, sortable: true },
    { name: 'Zip Code', selector: row => row.zipCode, sortable: true },
  ];

  return (
    <div className="container">
      <h1>Current Employees</h1>
      <DataTable
        columns={columns}
        data={employeeList}
        pagination
      />
      <Link to="/">Home</Link>
    </div>
  );
};

export default EmployeeList;
