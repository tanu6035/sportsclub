import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Banner from "../../components/Banner.jsx";
import {ErrorMessage} from "@hookform/error-message";

function Event() {
    const {
        register,
        handleSubmit,
        reset,
        formState:{errors}
    } = useForm();
    const navigate = useNavigate();

    async function addEvent(d) {
        let token = localStorage.getItem("adminToken");
        if (!token) {
            console.log("Unverified");
            navigate("/admin-login");
        } else {
            const url = "http://localhost:5000/event";

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
                alert("New event Added.");
                fetchEvent();
            }
        }

    }

    const [task, setTask] = useState([]);

    async function fetchEvent() {
        const url = "http://localhost:5000/event";
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
        fetchEvent()
    }, [])


    async function DeleteEvent(id) {
        let token = localStorage.getItem("adminToken");
        if (!token) {
            console.log("Unverified");
            navigate("/admin-login");
        } else {
            const url = `http://localhost:5000/event/${id}`;
            // console.log(url);
            let response = await fetch(url, {
                method: 'DELETE',
                //headers: {'Authorization': 'Bearer' + token}
            })
            response = await response.json();
            console.log(response);
            if (response.error != "") {
                alert(response.error)
            } else {
                fetchEvent();
                alert("Event Deleted");
            }
        }
    }

    return (
        <>
            <Banner pageTitle="events"/>
            <div className="container">
                <div className="login-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="login-form">
                                    <div className="section-title">
                                        <h2> ADD NEW EVENT </h2>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <form onSubmit={handleSubmit(addEvent)}>
                                                <div className="form">
                                                    <input
                                                        className="form-control mb-2" {...register('event', {required: "this field is required"})}
                                                        type="text"
                                                        placeholder="enter event"/><br/>
                                                    <ErrorMessage name="event" errors={errors} render={({message}) => <p
                                                        className="error-msg">{message}</p>}/>
                                                </div>

                                                <div className="form">
                                                    <button type="submit" className="btn">Submit <i
                                                        className="fal fa-long-arrow-right"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* table*/}
                <div className="rts-trainer-section-section section-gap">
                    <div className="container">
                        <div className="section-title-area section-title-area-inner mb--50">
                            <h1 className="section-title">Our Club Events</h1>
                        </div>
                        <div className="table-area table-full">
                            <table className="table table-bordered">
                                <thead className="thead-dark">
                                </thead>
                                <tbody>
                                <tr className="head-tr">
                                    <th scope="col"></th>
                                    <th scope="col">SR. NO</th>
                                    <th scope="col">EVENT</th>
                                </tr>
                                {task.length == 0 ? <tr>
                                    <td>No Data Available</td>
                                </tr> : task.map((value, index) =>
                                    <tr key={index}>
                                        <td>
                                            <button onClick={() => DeleteEvent(value.event_id)}
                                                    className="btn btn-danger btn-sm">Delete
                                            </button>
                                        </td>
                                        <td><span className="text">{index + 1}</span></td>
                                        <td><span className="text">{value.event_name}</span></td>
                                    </tr>
                                )}

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Event;