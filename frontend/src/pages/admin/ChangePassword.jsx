import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import Banner from "../../components/Banner.jsx";
import {ErrorMessage} from "@hookform/error-message";

function ChangePassword() {
    let navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState:{errors},
        reset
    } = useForm();

    async function onSubmit(data) {
        //console.log(data);
        let token = localStorage.getItem("adminToken");
        if (!token) {
            navigate("/admin-login");
        } else {
            data['token'] = token;
            let url = "http://localhost:5000/change-password"    ////Outlet for frontend not backend

            let response = await fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'Application/json'},
                body: JSON.stringify(data)
            });
            response = await response.json();
            console.log(response);
            if (response.error != "") {
                alert(response.error);
            } else {
                reset();
                Qual.successdb("Password Updated.");
            }
        }
    }

    return (
        <>
            <Banner pageTitle="Change Password"/>
            <div className="container">
                <div className="login-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="login-form">
                                    <div className="section-title">
                                        <h2>Enter Details</h2>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <div className="form">
                                                    <input type="text" placeholder="Current Password"
                                                           className="form-control" {...register("password", {required: "This field is required"})}/>
                                                    <ErrorMessage name="password" errors={errors}
                                                                  render={({message}) => <p className="error-msg">{message}</p>}/>
                                                </div>

                                                <div className="form">
                                                    <div className="password-input">
                                                        <input type="text" placeholder="New Password"
                                                               className="form-control" {...register("newPassword", {required: "This field is required"})} />
                                                        <ErrorMessage name="newPassword" errors={errors}
                                                                      render={({message}) => <p className="error-msg">{message}</p>}/>

                                                    </div>
                                                </div>
                                                <div className="form">
                                                <div className="password-input">
                                                    <input type="text" placeholder="Confirm New Password"
                                                           className="form-control" {...register("confirmPassword", {required: "This field is required"})}/>
                                                    <ErrorMessage name="confirmPassword" errors={errors}
                                                                  render={({message}) => <p
                                                                      className="error-msg">{message}</p>}/>

                                                    </div>
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
            </div>
        </>
    )
}

export default ChangePassword;