
import Datatable from "../components/Datatable";
import { useSelector } from "react-redux";


export default function EmployeeList1() {

    const userList= useSelector(state => state.userList)

    console.log("type of userlist", typeof(userList))

    return (
        <div className="ELbody">
            <h1 className="titre"> Current Employees </h1>
            <Datatable />
            
        </div>
    )
}