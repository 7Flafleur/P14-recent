import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateEmployeePage from '../pages/CreateEmployeePage';
import EmployeeList1 from '../pages/EmployeeList1';

// import EmployeeList2 from '../pages/EmployeeList2';


export const AppRoutes = () => {
    return (
        <Router>
            <Routes>         
                <Route path="/" element={<CreateEmployeePage />} />
                <Route path="/employee-list1" element={<EmployeeList1 />} />
                
                {/* <Route path="/employee-list2" element={<EmployeeList2 />} /> */}
            </Routes>
        </Router>
    );
}