import {useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
import {useNavigate} from "react-router-dom";
import Banner from "../../components/Banner.jsx";

function StuStudent() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    async function login(x) {
        // console.log(x);
        let url = "http://localhost:5000/stu-login";

        let response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'Application/json'},
            body: JSON.stringify(x)
        });
        response = await response.json();
        console.log(response);
        if (response.error != "") {
            Qual.errordb(response.error)
        } else {
            Qual.successdb("Login Successful")
            localStorage.setItem("stuToken", response.token)
            navigate("/student/stu-dashboard")
        }
    }

    return (
        <>
            <Banner pageTitle="Student Login"/>
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
                                                       placeholder="enter email" {...register("email", {required: "This field is required"})}/><br/>
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
                                            {/*<div className="form">
                                                <input type="checkbox" className="form-check-input" id="remember"/>
                                                <label for="remember" className="form-label">Remember Me</label>
                                            </div>*/}
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

export default StuStudent;