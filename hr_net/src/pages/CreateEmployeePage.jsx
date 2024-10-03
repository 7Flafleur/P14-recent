import { Link } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";


export default function CreateEmployeePage() {



    return (
        <div className="CEbody">
            <h1 className="titre">HRNet</h1>
            <div className="links">
                <Link className="listlink"  to="/employee-list">View Current Employees </Link>
            </div>
            <h2> Create  Employee</h2>
            <EmployeeForm />

        </div>
    )


}