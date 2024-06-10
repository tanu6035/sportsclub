import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Banner from "../../components/Banner.jsx";
import {ErrorMessage} from "@hookform/error-message";

function Games() {
    const {
        register,
        handleSubmit,
        reset,
        formState:{errors}
    } = useForm();

    const navigate = useNavigate();

    async function onSubmit(d) {
        let token = localStorage.getItem("adminToken");
        if (!token) {
            console.log("Unverified");
            navigate("/admin-login");
        } else {
            const url = "http://localhost:5000/games";

            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    //'Authorization': 'Bearer' + token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(d)
            })
            response = await response.json()
            console.log(response)
            //const{responseCode,records,message} =response
            if (response.error != "") {
                alert(response.error);
            } else {
                reset();
                alert("New Game Added.");
                fetchGame();
            }

        }
    }

    const [task, setTask] = useState([]);

    async function fetchGame() {
        //const token = localStorage.getItem("token");

        const url = "http://localhost:5000/games";
        let response = await fetch(url)
        response = await response.json();
        console.log(response);
        //const{records} =response
        if (response.error != "") {
            alert(response.error)
        } else {
            setTask(response.records)
        }
    }

    useEffect(() => {
        fetchGame()
    }, [])


    async function DeleteGame(id) {
        let token = localStorage.getItem("adminToken");
        if (!token) {
            console.log("Unverified");
            navigate("/admin-login");
        } else {
            const url = `http://localhost:5000/games/${id}`;
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
                fetchGame();
                alert("Game Deleted");
            }
        }

    }

    return (
        <>
            <Banner pageTitle="Games"/>
            <div className="container">
                <div className="login-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="login-form">
                                    <div className="section-title">
                                        <h2> ADD NEW GAME </h2>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <div className="form">
                                                    <input
                                                        className="form-control mb-2" {...register('game', {required: "this field is required"})}
                                                        type="text"
                                                        placeholder="enter game"/>
                                                    <ErrorMessage name="game" errors={errors} render={({message}) => <p
                                                        className="error-msg">{message}</p>}/>
                                                </div>
                                                <div className="form">
                                                    <textarea className="form-control mb-2" {...register('description')}
                                                              placeholder="enter description(optional)"
                                                              rows="2" cols="20"/><br/>
                                                    <ErrorMessage name="description" errors={errors}
                                                                  render={({message}) => <p
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
                {/*table*/}
                <div className="rts-trainer-section-section section-gap">
                    <div className="container">
                        <div className="section-title-area section-title-area-inner mb--50">
                            <h1 className="section-title">Our Club Games</h1>
                        </div>
                        <div className="table-area table-full">
                            <table className="table table-bordered">
                                <thead className="thead-dark">
                                </thead>
                                <tbody>
                                <tr className="head-tr">
                                    <th scope="col"></th>
                                    <th scope="col">Sr. NO</th>
                                    <th scope="col">Game</th>
                                    <th scope="col">Description</th>
                                </tr>
                                {task.length == 0 ? <tr>
                                    <td>No Data Available</td>
                                </tr> : task.map((value, index) =>
                                    <tr key={index}>
                                        <td>
                                            <button onClick={() => DeleteGame(value.game_id)}
                                                    className="btn btn-danger btn-sm">Delete
                                            </button>
                                        </td>
                                        <td><span className="text">{index + 1}</span></td>
                                        <td><span className="text">{value.game}</span></td>
                                        <td><span className="long-text">{value.description}</span></td>
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

{/*<h2>Games Data</h2>
<br/>
<form onSubmit={handleSubmit(onSubmit)}>
    GAME:{" "}
    <input className="form-control mb-2" {...register('game', {required: "this field is required"})}
           type="text"
           placeholder="enter name"/><br/>

    DESCRIPTION:{""}(optional)
    <textarea className="form-control mb-2" {...register('description')} placeholder="enter description"
              rows="2" cols="20"/><br/>
    <button className="btn btn-primary">Submit</button>
</form>
<div className="mt-5">
    <table className="table table-dark">
        <thead>
        <tr>
            <th></th>
            <th>Sr. NO</th>
            <th>Game</th>
            <th>Description</th>
        </tr>
        </thead>
        <tbody>
        {task.length == 0 ? <tr>
            <td>No Data Available</td>
        </tr> : task.map((value, index) =>
            <tr key={index}>
                <td>
                    <button onClick={() => DeleteGame(value.game_id)}
                            className="btn btn-danger btn-sm">Delete
                    </button>
                </td>
                <td>{index + 1}</td>
                <td>{value.game}</td>
                <td>{value.description}</td>
            </tr>
        )}
        </tbody>
    </table>
</div>*/
}
export default Games;