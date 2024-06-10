import {useEffect, useState} from "react";
//import ScheduleList2 from "./ScheduleList2.jsx";
import Banner from "../../components/Banner.jsx";

function ScheduleList1(){

    const[task,setTask]= useState([]);

    async function ListPendingSch(){
        const url="http://localhost:5000/sch-list1";
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
        ListPendingSch()
    },[])
    async function Accept(id){
        const url = `http://localhost:5000/sch-list1/${id}`;
        let response = await fetch(url, {
          //  method: 'POST'
        })
        response = await response.json();
        console.log(response);
        if(response.error != "")
        {
            alert(response.error)
        }else{
            ListPendingSch();
            ListApprovedSch()
            alert("schedule approved");
        }
    }

    const[task2,setTask2]= useState([]);

    async function ListApprovedSch(){
        const url="http://localhost:5000/sch-list2";
        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        if(response.error !=""){
            alert(response.error)
            console.log(task2)          // not used ., just used to eliminate error
        }else{
            setTask2(response.records)
        }
    }

    useEffect(() =>{
        ListApprovedSch()
    },[])

    return(
        <>
            <Banner pageTitle="Schedules"/>
            <div className="container">
                <h2>Pending Schedules</h2><br/>
                <div className="mt-3">

                    <table className="table table-dark mt-4">
                        <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>Schedule Id</th>
                            <th>Schedule</th>
                            <th>Game </th>
                            <th>Event </th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {task.length == 0 ? <tr><td>No Data Available</td></tr> : task.map((value, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.sch_id}</td>
                                <td>{value.scheduleDate}</td>
                                <td>{value.game}</td>
                                <td>{value.event_name}</td>
                                <td>{value.sch_status}</td>
                                <td>
                                    <button onClick={()=>Accept(value.sch_id)} className="btn btn-danger btn-sm">Accept</button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                <br/><br/>

            </div>
        </>
    )
}

export default ScheduleList1;