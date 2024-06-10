import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Banner from "../../components/Banner.jsx";

function Enrollments() {
    const navigate = useNavigate();

    const [task, setTask] = useState([]);

    async function fetchData() {
        let token = localStorage.getItem("deptToken");
        // console.log(token);
        if (!token) {
            navigate("/dept-login");
        } else {
            const url = "http://localhost:5000/teamlist";

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const responseData = await response.json();
            // console.log(responseData);

            if (responseData.error) {
                localStorage.removeItem("deptToken")
                navigate("/dept-login")
            } else {
                // setData(responseData);
                // console.log(responseData.records);
                setTask(responseData.records)
            }
        }

    }

    useEffect(() => {
        fetchData();
    }, []);

    async function handleCaptain(en_stu_id, action2) {
        let token = localStorage.getItem("deptToken");
        if (!token) {
            navigate("/dept-login");
        } else {
            // console.log(event);
            const url = "http://localhost:5000/teamlist";

            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({action: action2, s_id: en_stu_id, token: token})
            })
            response = await response.json()
            console.log(response);

            if (response.error != "") {
                alert(response.error);
            } else {
                fetchData();
                Qual.successdb("player/captain status updated");
            }
        }
    }

    async function handleChange2(en_id, action) {

        // console.log(en_id);
        // console.log(value)
        //console.log(en_stu_id)

        let token = localStorage.getItem("deptToken");
        if (!token) {
            navigate("/dept-login");
        } else {
            // console.log(event);
            const url = "http://localhost:5000/status_enrol";

            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({action: action, en_id: en_id, token: token})
            })
            response = await response.json()
            console.log(response);

            if (response.error != "") {
                alert(response.error);
            } else {
                fetchData();
                alert("selection done");
            }
        }
    }

    return (
        <>
            <Banner pageTitle="Students Game Enrollments"/>

            <div className="container pt-4 pb-3">
                <h1 className="section-title pb-5">Department Team Data</h1>
                <div className="table-area table-full">
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                        <tr className="head-tr inner">
                            {/*<th scope="col"></th>*/}
                            <th scope="col">SR NO.</th>
                            <th scope="col">STUDENT ID</th>
                            <th scope="col">STUDENT NAME</th>
                            <th scope="col">GAME</th>
                            <th scope="col">PLAYER STATUS</th>
                            <th scope="col">ENROLMENT STATUS</th>
                            <th scope="col">PASS ENROLMENT</th>
                            <th scope="col">PLAYER/CAPTAIN</th>

                        </tr>
                        </thead>
                        <tbody>
                        {task.length === 0 ? <tr>
                            <td>No Data Available</td>
                        </tr> : task.map((value, index) =>
                            <tr key={index}>
                                {/*<td></td>*/}
                                <td><span className="text">{index + 1}</span></td>
                                <td><span className="text">{value.en_stu_id}</span></td>
                                <td><span className="text">{value.stu_name}</span></td>
                                <td><span className="text">{value.game}</span></td>
                                <td><span className="text">{value.play_captain}</span></td>
                                <td><span className="text">{value.en_status}</span></td>
                                <td>
                                    {value.en_status === "pending" && <button onClick={() => handleChange2(value.en_id, 'enrolled')}
                                                                              type="button"
                                                                              className="bg-success px-2 py-1 text-white">
                                        Update Status
                                    </button>
                                    }

                                    {value.en_status === "enrolled" && <button onClick={() => handleChange2(value.en_id, 'pending')}
                                                                              type="button"
                                                                              className="bg-danger px-2 py-1 text-white">
                                        Update Status
                                    </button>
                                    }

                                </td>

                                <td>
                                    {value.play_captain === "player" && <button onClick={() => handleCaptain(value.en_stu_id, 'captain')}
                                                                              type="button"
                                                                              className="bg-success px-2 py-1 text-white">
                                        Update Status
                                    </button>
                                    }

                                    {value.play_captain === "captain" && <button onClick={() => handleCaptain(value.en_stu_id, 'player')}
                                                                               type="button"
                                                                               className="bg-danger px-2 py-1 text-white">
                                        Update Status
                                    </button>
                                    }
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

export default Enrollments;