import {useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Banner from "../../components/Banner.jsx";

function Enrollments() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm();

    async function onSubmit(data) {
        // console.log(data);
        let token = localStorage.getItem("stuToken");
        if (!token) {
            navigate("/stu-login");
        } else {
            // console.log(token)
            data['token'] = token;

            let url = "http://localhost:5000/stu-enrol"
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
                },
                body: JSON.stringify(data)
            });
            response = await response.json();
            // console.log(response);

            if (response.error != "") {
                Qual.errordb('Error', response.error)
            } else {
                reset();
                fetchData();
                Qual.successdb('Enrolled', response.message)
            }
        }
    }

    const [task, setTask] = useState([]);

    async function fetchData() {
        let token = localStorage.getItem("stuToken");
        // console.log(token);

        if (!token) {
            navigate("/stu-login");
        } else {
            const url = "http://localhost:5000/stu-enrol";

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const responseData = await response.json();
            // console.log(responseData);

            if (responseData.error) {
                localStorage.removeItem("stuToken")
                navigate("/stu-login")
            } else {
                // setData(responseData);
                setTask(responseData.records)
            }
        }

    }


    useEffect(() => {
        fetchData();
    }, []);

    async function DeleteData(del) {
        let token = localStorage.getItem("stuToken");
        if (!token) {
            console.log("Unverified");
            navigate("/stu-login");
        } else {
            const url = `http://localhost:5000/stu-enrol/${del}`;
            console.log(url);
            let response = await fetch(url, {
                method: 'DELETE',
            })
            response = await response.json();
            console.log(response);
            if (response.error != "") {
                // console.log(id);
                alert(response.error);
            } else {
                fetchData();
                alert("Enrollment Canceled");
            }
        }
    }


    return (
        <>
            <Banner pageTitle="Student Enrollment"/>
            <div className="rts-cart-section section-gap">
                <div className="container">
                    <h4 className="section-title"> My Game Enrollments</h4>
                    <div className="row justify-content-between">
                        <div className="col-xl-7">
                            <div className="cart-table-area">
                                <table className="table table-bordered table-hover">
                                    <thead className="thead-dark">
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Sr. No</th>
                                        <th scope="col">Game Enrolled</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {task.length == 0 ? <tr>
                                        <td>No Data Available</td>
                                    </tr> : task.map((value, index) =>
                                        <tr key={index}>
                                            <td>
                                                <button onClick={() => DeleteData(value.en_id)}
                                                        className="btn btn-danger btn-sm">Delete
                                                </button>
                                            </td>
                                            <td><span className="text">{index + 1}</span></td>
                                            <td><span className="text">{value.game}</span></td>
                                            <td><span className="text">{value.en_status}</span></td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>

                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="checkout-box">
                                <div className="checkout-box-inner">
                                    <div className="subtotal-area">
                                        <span className="title">MAKE NEW ENROLLMENT </span>
                                        <span className="subtotal-price"></span>
                                    </div>
                                    <div className="shipping-check">
                                        <span className="title"> SELECT GAME</span>
                                        <div className="check-options">
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <div className="form">

                                                     <select className="form-control"
                                                                  name="game_id" {...register("game_id", {required: "This field is required"})}>
                                                    <option value="20">volleyball</option>
                                                    <option value="13">javelin</option>
                                                    <option value="14">shot put</option>
                                                    <option value="9">kho-kho</option>
                                                    <option value="17">Kabaddi</option>
                                                </select>
                                                    <ErrorMessage name="game_id" errors={errors}
                                                                  render={({message}) => <p className="error-msg">{message}</p>}/>
                                                </div>
                                                <br/>
                                                <div className="form">
                                                    <button className="form-control  btn btn-primary"> Enrol
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/*<a href="checkout.html" className="procced-btn">Procced To Checkout</a>
                                <a href="shop.html" className="continue-shopping"><i
                                    className="fal fa-long-arrow-left"></i> Continue
                                    Shopping</a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

/*<div className="container">
    <br/><h2>Enter Info to Enrol</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" pt-2">
            Student Email: <input type="email" className="form-control"
                                  {...register("stu_email", {required: "This field is required"})}/>
            <ErrorMessage name="stu_email" errors={errors}
                          render={({message}) => <p className="error-msg">{message}</p>}/>
        </div>
        <div className=" pt-2">
            Game: <select className="form-control"
                          name="game_id" {...register("game_id", {required: "This field is required"})}>
            <option value="20">volleyball</option>
            <option value="13">javelin</option>
            <option value="14">shot put</option>
            <option value="9">kho-kho</option>
            <option value="17">Kabaddi</option>
        </select>
            <ErrorMessage name="game" errors={errors}
                          render={({message}) => <p className="error-msg">{message}</p>}/>
        </div>
        <br/>
        <button className="form-control w-25 btn btn-primary"> Enrol</button>
    </form>

    <hr/>
    <div className="mt-5">
        <table className="table ">
            <thead>
            <tr>
                <th></th>
                <th>Sr. No</th>
                <th>Game Enrolled</th>
            </tr>
            </thead>
            <tbody>
            {task.length == 0 ? <tr>
                <td>No Data Available</td>
            </tr> : task.map((value, index) =>
                <tr key={index}>
                    <td>
                        <button onClick={() => DeleteData(value.en_id)}
                                className="btn btn-danger btn-sm">Delete
                        </button>
                    </td>
                    <td>{index + 1}</td>
                    <td>{value.game}</td>
                </tr>
            )}
            </tbody>
        </table>
    </div>
</div>*/

export default Enrollments;