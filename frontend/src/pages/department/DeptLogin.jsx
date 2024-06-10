import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {ErrorMessage} from "@hookform/error-message";
import Banner from "../../components/Banner.jsx";

let DeptLogin = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    let login = async (data) => {           //async function login(){} , same
        console.log(data)
        let response = await fetch("http://localhost:5000/dept-login", {
            method: 'POST',
            headers: {'Content-Type': 'Application/json'},
            body: JSON.stringify(data)
        })
        response = await response.json()
        console.log(response)
        if (response.error != "") {
            Qual.errordb(response.error)
        } else {
            //console.log(response.token)
            Qual.successdb("Login Successful")
            localStorage.setItem("deptToken", response.token)
            navigate("/dept/teamlist")
        }
    }

    return (
        <>
            <Banner pageTitle="Department Login"/>
            <div className="login-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="login-form">
                                <div className="section-title">
                                    <h2> Login </h2>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit(login)}>
                                            <div className="form">
                                                <input type="email" className="form-control "
                                                       placeholder="enter email" {...register("email", {required: "This field is required"})} /><br/>
                                                <ErrorMessage name="email" errors={errors}
                                                              render={({message}) => <p
                                                                  className="error-msg">{message}</p>}/>
                                            </div>
                                            <div className="form">
                                                <div className="password-input">
                                                    <input type="password" className="form-control "
                                                           placeholder="enter password" {...register("password", {required: "This field is required"})}/><br/>
                                                    <ErrorMessage name="password" errors={errors}
                                                                  render={({message}) => <p
                                                                      className="error-msg">{message}</p>}/>

                                                </div>
                                            </div>

                                            <div className="form">
                                                <button type="submit" className="btn">Login <i
                                                    className="fal fa-long-arrow-right"></i></button>
                                            </div>
                                            {/*<a className="forgot-password" href="#">Lost your password?</a>*/}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

{/*<div className="container pt-5 pb-5 ">

    <center className="pt-3">
        <h2> Department Login</h2><br/>
        <form onSubmit={handleSubmit(login)}>
            <input type="email" className="form-control w-50"
                   placeholder="enter email" {...register("email", {required: "This field is required"})} /><br/>
            <ErrorMessage name="email" errors={errors}
                          render={({message}) => <p className="error-msg">{message}</p>}/>
            <input type="password" className="form-control w-50"
                   placeholder="enter password" {...register("password", {required: "This field is required"})}/><br/>
            <ErrorMessage name="password" errors={errors}
                          render={({message}) => <p className="error-msg">{message}</p>}/>
            <button className="btn btn-primary">Login</button>
        </form>
    </center>

</div>*/}
export default DeptLogin;