import {useEffect, useState} from "react";
import Banner from "../../components/Banner.jsx";

function RegisteredStudents(){

    const[task,setTask]= useState([]);
    async function fetchStu(){
        const url="http://localhost:5000/register-stu";
        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        if(response.error !=""){
            alert(response.error)
        }else{
            setTask(response.records)
        }
    }

    useEffect(() =>{
        fetchStu()
    },[])

    return(
        <>
            <Banner pageTitle="Students"/>
            <div className="container">
                <h2>Students Data</h2><br/>
                <div className="mt-5">
                    <table className="table table-dark">
                        <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>Student Id</th>
                            <th>Student Name</th>
                            <th>Department</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Mobile</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {task.length == 0 ? <tr><td>No Data Available</td></tr> : task.map((value, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                {/* clash id (index(just frontend)), but event_id 888888888888888888888888888888 */}
                                <td>{value.stu_id}</td>
                                <td>{value.stu_name}</td>
                                <td>{value.dept_name}</td>
                                <td>{value.email}</td>
                                <td>{value.gender}</td>
                                <td>{value.mobile}</td>
                                <td>{value.address}</td>
                                <td>{value.city}</td>
                                <td>{value.state}</td>
                                <td>{value.status}</td>


                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default RegisteredStudents;