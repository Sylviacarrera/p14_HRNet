import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import { setEmployeeList } from '../features/user/userSlice';
import EmployeeTableColumns from '../components/EmployeeTableColumns';
import EntriesDropdown from '../components/EntriesDropdown';
import SearchBar from '../components/SearchBar';
import '../styles/EmployeeList.scss';

const EmployeeList = () => {
  const dispatch = useDispatch();
  const employeeList = useSelector((state) => state.user.employeeList);
  
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    if (storedEmployees.length) {
      dispatch(setEmployeeList(storedEmployees));
    }
  }, [dispatch]);

  // Filtrer la liste des employés en fonction du terme de recherche
  const filteredEmployees = employeeList.filter((employee) =>
    Object.values(employee).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className='employeeContainer'>
      <h1>Current Employees</h1>
      <div className="table-controls">
        <EntriesDropdown
          entriesPerPage={entriesPerPage}
          setEntriesPerPage={setEntriesPerPage}
        />
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
      <DataTable
        columns={EmployeeTableColumns()}
        data={filteredEmployees}
        pagination
        paginationPerPage={entriesPerPage}
      />
      <a className="Home" href="/">Home</a>
    </div>
  );
};

export default EmployeeList;
