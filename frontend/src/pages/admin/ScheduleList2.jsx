import {useEffect, useState} from "react";
import Banner from "../../components/Banner.jsx";

function ScheduleList2(){

    const[task,setTask]= useState([]);

    async function ListApprovedSch(){
        const url="http://localhost:5000/sch-list2";
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
        ListApprovedSch()
    },[])

    async function Reject(id){
        const url = `http://localhost:5000/sch-list2/${id}`;
        let response = await fetch(url, {
            //  method: 'POST'
        })
        response = await response.json();
        console.log(response);
        if(response.error != "")
        {
            alert(response.error)
        }else{
            ListApprovedSch();
            ListPendingSch();
            alert("schedule rejected");
        }
    }
    const[task1,setTask1]= useState([]);

    async function ListPendingSch(){
        const url="http://localhost:5000/sch-list1";
        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        if(response.error !=""){
            alert(response.error)
            console.log(task1)        //just used against error
        }else{
            setTask1(response.records)
        }
    }

    useEffect(() =>{
        ListPendingSch()
    },[])
    return(
        <>
            <Banner pageTitle="Schedules"/>
            <div className="container">
                <h2>Approved Schedules</h2><br/>
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
                                    <button onClick={()=>Reject(value.sch_id)} className="btn btn-danger btn-sm">Reject</button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ScheduleList2;