import {useForm} from "react-hook-form";
import {useEffect,useState} from "react";
import {useNavigate} from "react-router-dom";
import Banner from "../../components/Banner.jsx";
function Department(){
    const { register,
        handleSubmit,
        reset
    }= useForm();
    const navigate= useNavigate();
    async function addDepartment(d){
        let token = localStorage.getItem("adminToken");
        if (!token) {
            console.log("Unverified");
            navigate("/admin-login");
        }else{
            const url= "http://localhost:5000/dept";

            let response = await fetch(url,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(d)
            })
            response = await response.json()
            console.log(response)
            if(response.error != ""){
                alert(response.error);
            }else{
                reset();
                Qual.successdb("New Department Added.");
                fetchDepartment();
            }
        }

    }

    const[task,setTask]= useState([]);
    async function fetchDepartment(){
        const url="http://localhost:5000/dept";
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
        fetchDepartment()
    },[])


    async function DeleteDepartment(id) {
        let token = localStorage.getItem("adminToken");
        if (!token) {
            console.log("Unverified");
            navigate("/admin-login");
        }
        else{
            const url = `http://localhost:5000/dept/${id}`;
            // console.log(url);
            let response = await fetch(url, {
                method: 'DELETE',
            })
            response = await response.json();
            console.log(response);
            if(response.error != "")
            {
                alert(response.error)
            }else{
                fetchDepartment();
                alert("Department Deleted");
            }
        }
    }

    return(
        <>
            <Banner pageTitle="Departments"/>
            <div className="container">
                <h2>Department Data</h2><br/>
                <form onSubmit={handleSubmit(addDepartment)}>
                    Department Name:{" "}
                    <input className="form-control mb-2" {...register('dept_name',{required:"This field is required"})} type="text"/><br/>
                    Department HOD:{" "}
                    <input className="form-control mb-2" {...register('dept_head',{required:"This field is required"})} type="text"/><br/>
                    Email:{" "}
                    <input className="form-control mb-2" {...register('dept_email',{required:"This field is required"})} type="text"/><br/>
                    Password:{" "}
                    <input className="form-control mb-2" {...register('dept_password',{required:"This field is required"})} type="text"/><br/>

                    <button className="btn btn-primary">Submit</button>
                </form>
                <div className="mt-5">
                    <table className="table table-dark">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Sr. No</th>
                            <th>Department Id</th>
                            <th>Department</th>
                            <th>Department HOD</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                        </thead>
                        <tbody>
                        {task.length == 0? <tr><td>No Data Available</td></tr> : task.map((value,index) =>
                            <tr key={index}>
                                <td>
                                    <button onClick={() => DeleteDepartment(value.dept_id)}
                                            className="btn btn-danger btn-sm">Delete
                                    </button>
                                </td>
                                <td>{index + 1}</td>
                                {/* clash id (index(just frontend)), but event_id 888888888888888888888888888888 */}
                                <td>{value.dept_id}</td>
                                <td>{value.dept_name}</td>
                                <td>{value.dept_head}</td>
                                <td>{value.dept_email}</td>
                                <td>{value.dept_password}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Department;