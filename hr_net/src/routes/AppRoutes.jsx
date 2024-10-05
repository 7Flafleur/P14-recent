import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CreateEmployeePage from '../pages/CreateEmployeePage';
import EmployeeList from '../pages/EmployeeList';

// import EmployeeList2 from '../pages/EmployeeList2';


export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CreateEmployeePage />} />
                <Route path="/employee-list" element={<EmployeeList />} />


            </Routes>
        </Router>
    );
}