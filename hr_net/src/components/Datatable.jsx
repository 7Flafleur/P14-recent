import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useSelector } from 'react-redux';
import { mockUsers } from '../utils/MockUsers';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function Datatable() {

    const users = useSelector(state => state.userList.users);

    // console.log("datatable userlist", users);
    // console.log("Mock users ", mockUsers);

    const employeeList = users.length !== 0 ? users : mockUsers;    //useeffect  pour initialiser données

    const usingMock = users.length === 0;

    const [filteredList, setFilteredList] = useState([]);

    //   console.log("default filtered list",filteredList)



    const colDef = [
        { field: "firstName", width: 190 },
        { field: "lastName", width: 200 },
        { field: "startDate", width: 130 },
        { field: "department", width: 170 },
        { field: "dob", width: 130 },
        { field: "street", width: 180 },
        { field: "city", width: 167 },
        { field: "state", width: 150 },
        { field: "zipCode", width: 130 }
    ];



    const searchList = (e) => {

        const searchTerm = e.target.value.toLowerCase();
        const filtered = employeeList.filter(employee =>
            Object.values(employee).some(value =>
                value.toString().toLowerCase().includes(searchTerm)
            )
        );
        setFilteredList(filtered);

    };

    useEffect(() => {
        setFilteredList(employeeList);
    }, [employeeList]);


    const rowData = filteredList;


    return (
        <div className="DTbody">
            <div className="ontopoftable">

                {usingMock && <span className='usemock'>Using mock data!</span>}
                <p className='searchdiv'><input type='text' placeholder='Search' onChange={searchList}></input> </p>
            </div>
            {/******************************** * AGGridReact DATATABLE******************************** */}
            <div className='datatable ag-theme-quartz' style={{ height: 700, width: '100%', fontSize: "18px" }}>
                <AgGridReact rowData={rowData} columnDefs={colDef} pagination={true} paginationPageSizeSelector={[ 10, 25, 50, 100]} />
            </div>
            <Link className="homelink" to="/">Home</Link>
        </div>
    );
}
