import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {ErrorMessage} from "@hookform/error-message";
import Banner from "../../components/Banner.jsx";


function SignUp(){
    const navigate =useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState:{errors}
    }=useForm();
    async function onSubmit(data){
        console.log(data);
        let url = "http://localhost:5000/signup"

        let response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'Application/json'},
            body: JSON.stringify(data)
        });
        response = await response.json();
        console.log(response);
        if(response.error != ""){
            Qual.errordb('Error',response.error)
        }else{
            reset();
            Qual.successdb('Registered',response.message)
            navigate("/orglogin");
        }
    }
   /* function GotoLogin(){
        navigate("/orglogin")
    }*/
    return(
        <>
            <Banner pageTitle="Organizer Signup"/>
            <div className="container pt-5 pb-4">
                <h3 className="section-header">SIGN UP</h3>
                {/*} <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" className="form-control "
                       placeholder="name" {...register("name", {required: "This field is required"})}/>
                <ErrorMessage name="name" errors={errors}
                              render={({message}) => <p className="error-msg">{message}</p>}/><br/>
                <input type="email" className="form-control "
                       placeholder="email" {...register("email", {required: "This field is required"})}/>
                <ErrorMessage name="email" errors={errors}
                              render={({message}) => <p className="error-msg">{message}</p>}/><br/>

                <input type="text" className="form-control w-50"
                       placeholder="gender" {...register("gender", {required: "This field is required"})}/>
                <ErrorMessage name="gender" errors={errors}
                              render={({message}) => <p className="error-msg">{message}</p>}/><br/>
                <input type="text" className="form-control w-50"
                       placeholder="age" {...register("age", {required: "This field is required"})}/>
                <ErrorMessage name="age" errors={errors}
                              render={({message}) => <p className="error-msg">{message}</p>}/><br/>
                <input type="text" className="form-control w-50"
                       placeholder="mobile" {...register("mobile", {required: "This field is required"})}/>
                <ErrorMessage name="mobile" errors={errors}
                              render={({message}) => <p className="error-msg">{message}</p>}/><br/>
                <input type="password" className="form-control w-50"
                       placeholder="password" {...register("password", {required: "This field is required"})}/>
                <ErrorMessage name="password" errors={errors}
                              render={({message}) => <p className="error-msg">{message}</p>}/><br/>
                <button className="btn btn-primary">SignUp</button>
                <br/>
                or login below<br/>
                <button onClick={GotoLogin} className="btn btn-primary">Login here</button>
            </form>*/}
                {/*  2 division*/}
                <div className="player-activity-area">
                    <div className="row">
                        <div className="col-xl-6 col-md-6">
                            <form>
                                <input type="text" className="form-control "
                                       placeholder="name" {...register("name", {required: "This field is required"})}/>
                                <ErrorMessage name="name" errors={errors}
                                              render={({message}) => <p className="error-msg">{message}</p>}/><br/>
                                <input type="email" className="form-control "
                                       placeholder="email" {...register("email", {required: "This field is required"})}/>
                                <ErrorMessage name="email" errors={errors}
                                              render={({message}) => <p className="error-msg">{message}</p>}/><br/>
                                <input type="text" className="form-control "
                                       placeholder="mobile" {...register("mobile", {required: "This field is required"})}/>
                                <ErrorMessage name="mobile" errors={errors}
                                              render={({message}) => <p className="error-msg">{message}</p>}/><br/>
                            </form>
                        </div>

                        <div className="col-xl-6 col-md-6">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                    <select className="form-control"
                                        name="gender" {...register("gender", {required: "This field is required"})}>
                                    <option value="male">male</option>
                                        <option value="female">female</option></select>
                                    <ErrorMessage name="gender" errors={errors}
                                                  render={({message}) => <p className="error-msg">{message}</p>}/><br/>
                                    <input type="text" className="form-control "
                                           placeholder="age" {...register("age", {required: "This field is required"})}/>
                                    <ErrorMessage name="age" errors={errors}
                                                  render={({message}) => <p className="error-msg">{message}</p>}/><br/>
                                    <input type="password" className="form-control "
                                           placeholder="password" {...register("password", {required: "This field is required"})}/>
                                    <ErrorMessage name="password" errors={errors}
                                                  render={({message}) => <p className="error-msg">{message}</p>}/><br/>
                                    <button className="btn btn-primary">SignUp</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

)
}

export default SignUp;