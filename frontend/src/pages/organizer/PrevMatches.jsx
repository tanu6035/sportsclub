import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function PrevMatches(){
    const navigate= useNavigate();

    const [task_p, setTask_p] = useState([]);
    async function MatchPrev() {
        let token = localStorage.getItem("orgToken");
        // console.log(token);
        if (!token) {
            navigate("/orglogin");
        }
        else{
            const url = "http://localhost:5000/org_prev_match";
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
                setTask_p(response.records)
            }}
    }

    useEffect(() => {
        MatchPrev()
    }, [])
    return(
        <>
            <div className="container">
                <br/><br/>
                <div className="rts-trainer-section-section section-gap">
                    <div className="container">
                        <div className="section-title-area section-title-area-inner mb--50">
                            <h1 className="section-title">Previous Matches </h1>
                        </div>
                        <div className="table-area table-full">
                            <table className="table table-bordered">
                                <thead className="thead-dark">
                                <tr className="head-tr">
                                    <th scope="col">Sr.No</th>
                                    <th scope="col">Schedule</th>
                                    <th scope="col">Game</th>
                                    <th scope="col">TeamA</th>
                                    <th scope="col">TeamB</th>
                                    <th scope="col">Time</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                {task_p.length == 0 ? <tr>
                                    <td>No Match inserted yet</td>
                                </tr> : task_p.map((value, index) =>
                                    <tr key={index}>

                                        <td><span className="text">{index + 1}</span></td>
                                        <td><span className="text">{value.scheduleDate}</span></td>
                                        <td><span className="text">{value.game}</span></td>
                                        <td><span className="long-text">  {value.teamAName}</span></td>
                                        <td><span className="long-text"> {value.teamBName}</span></td>
                                        <td><span className="text"> {value.time}</span></td>
                                        <td></td>
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

export default PrevMatches;