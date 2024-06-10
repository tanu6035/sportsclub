import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {ErrorMessage} from "@hookform/error-message";
import Banner from "../../components/Banner.jsx";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import ScheduleDetailsForm from "../../components/ScheduleDetailsForm.jsx";
import PendingSchedule from "./PendingSchedule.jsx";

function Schedule() {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm();

    const navigate = useNavigate();
    const [schId, setSchId] = useState('')

    async function addSchedule(d) {
        let token = localStorage.getItem("orgToken");
        if (!token) {
            console.log("Unverified");
            navigate("/orglogin");
        } else {
            d['token'] = token;
            const url = "http://localhost:5000/schedule";

            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(d)
            })
            response = await response.json()
            console.log(response)
            if (response.error != "") {
                alert(response.error);
            } else {
                reset();
                Qual.successdb("New Schedule Added. REFRESH THE PAGE ONCE");
                fetchSchedule();         //SchedulePending???
            }
        }

    }

    const [task, setTask] = useState([]);

    async function fetchSchedule() {
        let token = localStorage.getItem("orgToken");
        // console.log(token);
        if (!token) {
            navigate("/orglogin");
        } else {
            const url = "http://localhost:5000/schedule";
            let response = await fetch(url, {
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
        fetchSchedule()
    }, [])


    async function DeleteSchedule(id) {
        let token = localStorage.getItem("orgToken");
        if (!token) {
            console.log("Unverified");
            navigate("/orglogin");
        } else {
            const url = `http://localhost:5000/schedule/${id}`;
            // console.log(url);
            let response = await fetch(url, {
                method: 'DELETE',
            })
            response = await response.json();
            console.log(response);
            if (response.error != "") {
                alert(response.error)
            } else {
                fetchSchedule();
                alert("Schedule Deleted");
            }
        }
    }

    const today = new Date();

    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const date = String(today.getDate()).padStart(2, '0');
    const currentDate = year + "-" + month + "-" + date;

    return (
        <>
            <Banner pageTitle=" My Schedules"/>
            <div className="container pt-5 bt-5">
                <div className="login-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="login-form">
                                    <div>
                                        <h1 className="section-title">Enter Schedule </h1>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <form onSubmit={handleSubmit(addSchedule)}>
                                                Schedule Date:{" "}
                                                <input
                                                    className="form-control mb-2" {...register('sch_date', {required: "This field is required"})}
                                                    type="date" id="date" min={currentDate}/><br/>
                                                <ErrorMessage name="sch_date" errors={errors}
                                                              render={({message}) => <p
                                                                  className="error-msg">{message}</p>}/>
                                                Game: <select className="form-control"
                                                              name="game" {...register("sch_game_id", {required: "This field is required"})}>
                                                <option value="20">volleyball</option>
                                                <option value="13">javelin</option>
                                                <option value="14">shot put</option>
                                                <option value="9">kho-kho</option>
                                                <option value="17">Kabaddi</option>
                                            </select><br/>
                                                <ErrorMessage name="sch_game_id" errors={errors}
                                                              render={({message}) => <p
                                                                  className="error-msg">{message}</p>}/>
                                                Event: <select className="form-control"
                                                               name="event" {...register("sch_event_id", {required: "This field is required"})}>
                                                <option value="4">Tournament ball</option>
                                                <option value="5">Annual sports</option>
                                                <option value="6">Boys kabaddi tournament</option>
                                                <option value="8">Track & Field events</option>
                                            </select><br/>
                                                <ErrorMessage name="sch_event_id" errors={errors}
                                                              render={({message}) => <p
                                                                  className="error-msg">{message}</p>}/>

                                                <button className="btn btn-primary">Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TABLE*/}
                <div className="rts-trainer-section-section section-gap">
                    <div className="container">
                        <div className="section-title-area section-title-area-inner mb--50">
                            <h1 className="section-title">Schedule Approved</h1>
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
                                    <th scope="col">Matches</th>
                                </tr>
                                </thead>
                                <tbody>
                                {task.length == 0 ? <tr>
                                    <td>No Data Available</td>
                                </tr> : task.map((value, index) =>
                                    <tr key={index}>
                                        <td>
                                            <button onClick={() => DeleteSchedule(value.sch_id)}
                                                    className="btn btn-danger btn-sm">Delete
                                            </button>
                                        </td>
                                        <td><span className="text">{index + 1}</span></td>
                                        <td><span className="text">{value.scheduleDate}</span></td>
                                        <td><span className="text">  {value.game}</span></td>
                                        <td><span className="long-text"> {value.event_name}</span></td>
                                        {/* long-text*/}
                                        <td><span className="text"> {value.sch_status}</span></td>
                                        <td>
                                            <button type={"button"} onClick={() => setSchId(value.sch_id)}
                                                    className={"btn btn-primary"} data-bs-toggle={"modal"}
                                                    data-bs-target={"#addModal"}><i className={"fa fa-plus"}></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                                }
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>


                <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">ADD MATCH</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>

                            <div className="modal-body">
                                <ScheduleDetailsForm schId={schId}/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <PendingSchedule/>
            </div>
        </>
    )
}

export default Schedule;