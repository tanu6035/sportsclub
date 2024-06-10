import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Banner from "../../components/Banner.jsx";
import PrevMatches from "./PrevMatches.jsx";

function Match(){
    const navigate= useNavigate();
    const [task, setTask] = useState([]);
    async function Match() {
        let token = localStorage.getItem("orgToken");
        // console.log(token);
        if (!token) {
            navigate("/orglogin");
        }
        else{
            const url = "http://localhost:5000/match";
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
            }}
    }

    useEffect(() => {
        Match()
    }, [])

    async function CancelMatch(id) {
        let token = localStorage.getItem("orgToken");
        if (!token) {
            console.log("Unverified");
            navigate("/orglogin");
        } else {
            const url = `http://localhost:5000/match/${id}`;
            // console.log(url);
            let response = await fetch(url, {
                method: 'DELETE',
            })
            response = await response.json();
            console.log(response);
            if (response.error != "") {
                alert(response.error)
            } else {
                Match();
                alert("Match Deleted");
            }
        }
    }


    return(
        <>
            <Banner pageTitle="Matches"/>
            <div className="pt-5 pb-5">
                <div className="rts-trainer-section-section section-gap">
                    <div className="container">
                        <div className="section-title-area section-title-area-inner mb--50">
                            <h1 className="section-title">Matches to Conduct</h1>
                        </div>
                        <div className="table-area table-full">
                            <table className="table table-bordered">
                                <thead className="thead-dark">
                                <tr className="head-tr">
                                    <th scope="col"></th>
                                    <th scope="col">Sr.No</th>
                                    <th scope="col">Schedule</th>
                                    <th scope="col">Game</th>
                                    <th scope="col">TeamA</th>
                                    <th scope="col">TeamB</th>
                                    <th scope="col">Time</th>
                                </tr>
                                </thead>
                                <tbody>
                                {task.length == 0 ? <tr>
                                    <td>No Match inserted yet</td>
                                </tr> : task.map((value, index) =>
                                    <tr key={index}>
                                        <td>
                                            <button onClick={() => CancelMatch(value.sch_detail_id)}
                                                    className="btn btn-danger btn-sm">Delete
                                            </button>
                                        </td>
                                        <td><span className="text">{index + 1}</span></td>
                                        <td><span className="text">{value.scheduleDate}</span></td>
                                        <td><span className="text">{value.game}</span></td>
                                        <td><span className="long-text">  {value.teamAName}</span></td>
                                        <td><span className="long-text"> {value.teamBName}</span></td>
                                        <td><span className="text"> {value.time}</span></td>

                                    </tr>
                                )
                                }
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
               <br/><br/>
                <PrevMatches/>
            </div>
        </>
    )
}

export default Match;