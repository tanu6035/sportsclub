import {useEffect, useState} from "react";
import Banner from "../../components/Banner.jsx";

function Dashboard(){
    const [task, setTask] = useState([]);

    async function fetchSchedule() {
        const url = "http://localhost:5000/dash-sch";
        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        if (response.error != "") {
            alert(response.error)
        } else {
            setTask(response.records)
        }
    }

    useEffect(() => {
        fetchSchedule()
    }, [])

    return(
        <>
            <Banner pageTitle="Dasboard"/>
            <div className="container pt-5 pb-5">
                <div className="rts-trainer-section-section section-gap">
                    <div className="container">
                        <div className="section-title-area section-title-area-inner mb--50">
                            <h1 className="section-title"> All Club Schedules</h1>
                        </div>
                        <div className="table-area table-full">
                            <table className="table table-bordered">
                                <thead className="thead-dark">
                                <tr className="head-tr">
                                    <th scope="col">Sr.No</th>
                                    <th scope="col">Schedule</th>
                                    <th scope="col">Game</th>
                                    <th scope="col">Event</th>
                                    <th scope="col">Organizer</th>
                                    <th scope="col">Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                {task.length == 0 ? <tr>
                                    <td>No Data Available</td>
                                </tr> : task.map((value, index) =>
                                    <tr key={index}>
                                        <td><span className="text">{index + 1}</span></td>
                                        <td><span className="text">{value.scheduleDate}</span></td>
                                        <td><span className="text">  {value.game}</span></td>
                                        <td><span className="long-text"> {value.event_name}</span></td>
                                        <td><span className="long-text">{value.org_name}</span></td>
                                        <td><span className="text"> {value.sch_status}</span></td>
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

export default Dashboard;