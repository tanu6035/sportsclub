import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function PendingSchedule(){
    const navigate=useNavigate();

    const [task, setTask] = useState([]);

    async function SchedulePending() {
        let token = localStorage.getItem("orgToken");
        // console.log(token);
        if (!token) {
            navigate("/org-signin");
        }
        else{
            const url = "http://localhost:5000/org-pending-sch";

            let response = await fetch(url,{
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            response = await response.json();
            console.log(response);
            if (response.error != "") {
                alert(response.error)
            } else {
                setTask(response.records)
            }
        }

    }

    useEffect(() => {
        SchedulePending()
    }, [])
    return(
        <>
            <div className="container">
                <div className="rts-trainer-section-section section-gap">
                    <div className="container">
                        <div className="section-title-area section-title-area-inner mb--50">
                            <h1 className="section-title">Pending</h1>
                        </div>
                        <div className="table-area table-full">
                            <table className="table table-bordered">
                                <thead className="thead-dark">
                                <tr className="head-tr">
                                    <th scope="col"></th>
                                    <th scope="col">Sr.No</th>
                                    <th scope="col">Schedule</th>
                                    <th scope="col">Game</th>
                                    <th scope="col">Event</th>
                                    <th scope="col">Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                {task.length == 0 ? <tr>
                                    <td>No Data Available</td>
                                </tr> : task.map((value, index) =>
                                    <tr key={index}>
                                        <td>
                                            {/*<button onClick={() => DeleteSchedule(value.sch_id)}
                                                    className="btn btn-danger btn-sm">Delete
                                            </button>*/}
                                        </td>
                                        <td><span className="text">{index + 1}</span></td>
                                        <td><span className="text">{value.scheduleDate}</span></td>
                                        <td><span className="long-text">  {value.game}</span></td>
                                        <td><span className="long-text"> {value.event_name}</span></td>
                                        {/* long-text*/}
                                        <td><span className="long-text"> {value.sch_status}</span></td>

                                    </tr>
                                )
                                }
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PendingSchedule;