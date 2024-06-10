import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {ErrorMessage} from "@hookform/error-message";
import Banner from "../../components/Banner.jsx";

function StuSignup() {
    const navigate =useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm();

    async function onSubmit(data) {
        console.log(data);
        let url = "http://localhost:5000/stu-signup"
        let response = await fetch(url,{
            method: 'POST',
            headers: {'Content-Type': 'Application/json'},
            body: JSON.stringify(data)
        });
        response = await response.json();
        console.log(response);
        if(response.error != ""){
           // alert(response.error)
            Qual.errordb('Error',response.error)

        }else{
            reset();
            Qual.successdb('Registered',response.message)
            navigate("/stu-login")
        }
    }

    return (
        <>
            <Banner pageTitle="Student Signup"/>
            <div className="container pt-5 pb-4">
                <h3 className="section-header">SIGN UP</h3>
                <div className="player-activity-area">
                    <div className="row">
                        <div className="col-xl-6 col-md-6">
                            <form>
                                <input type="text" className="form-control" placeholder="fullname"
                                       {...register("name", {required: "This field is required"})}/>
                                <ErrorMessage name="name" errors={errors}
                                              render={({message}) => <p className="error-msg">{message}</p>}/><br/>
                                <input type="email" className="form-control" placeholder="email"
                                       {...register("email", {required: "This field is required"})}/>
                                <ErrorMessage name="email" errors={errors}
                                              render={({message}) => <p className="error-msg">{message}</p>}/><br/>
                                <select className="form-control"
                                        name="dept" {...register("dept", {required: "This field is required"})}>
                                    <option selected disabled> select department</option>
                                    <option value="1">computer science</option>
                                    <option value="4">business management</option>
                                    <option value="3">physical education</option>
                                    <option value="2">commerce</option>
                                </select>
                                <ErrorMessage name="dept" errors={errors}
                                              render={({message}) => <p className="error-msg">{message}</p>}/><br/>
                                <input type="text" className="form-control" placeholder="phone"
                                              {...register("mobile", {required: "This field is required"})}/>
                                <ErrorMessage name="mobile" errors={errors}
                                              render={({message}) => <p className="error-msg">{message}</p>}/><br/>
                                <textarea rows="1" className="form-control" cols="10" placeholder="address"
                                                   {...register("address", {required: "This field is required"})}></textarea>
                                <ErrorMessage name="address" errors={errors}
                                              render={({message}) => <p className="error-msg">{message}</p>}/><br/>
                            </form>
                        </div>

                        <div className="col-xl-6 col-md-6">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <select className="form-control"
                                        name="gender" {...register("gender", {required: "This field is required"})}>
                                    <option selected disabled> select gender</option>
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                </select>
                                <ErrorMessage name="gender" errors={errors}
                                              render={({message}) => <p className="error-msg">{message}</p>}/><br/>
                                <input type="password" className="form-control" placeholder="password"
                                       {...register("password", {required: "This field is required"})}/>
                                <ErrorMessage name="password" errors={errors}
                                              render={({message}) => <p className="error-msg">{message}</p>}/><br/>
                                <input type="text" className="form-control" placeholder="city"
                                       {...register("city", {required: "This field is required"})}/>
                                <ErrorMessage name="city" errors={errors}
                                              render={({message}) => <p className="error-msg">{message}</p>}/><br/>
                                <input type="text" className="form-control" placeholder="state"
                                       {...register("state", {required: "This field is required"})}/>
                                <ErrorMessage name="state" errors={errors}
                                              render={({message}) => <p className="error-msg">{message}</p>}/><br/>
                                <button className="  btn btn-primary"> SignUp</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

                {/* hfhgkjgk*/}
                {/* <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div className=" pt-2">
                            NAME: <input type="text" className="form-control"
                                         {...register("name", {required: "This field is required"})}/>
                            <ErrorMessage name="name" errors={errors}
                                          render={({message}) => <p className="error-msg">{message}</p>}/>
                        </div>
                        <div className=" pt-3 ">
                            EMAIL: <input type="email" className="form-control"
                                          {...register("email", {required: "This field is required"})}/>
                            <ErrorMessage name="email" errors={errors}
                                          render={({message}) => <p className="error-msg">{message}</p>}/>
                        </div>
                        <div className="pt-3 ">
                            GENDER: <select className="form-control"
                                            name="gender" {...register("gender", {required: "This field is required"})}>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>
                            <ErrorMessage name="gender" errors={errors}
                                          render={({message}) => <p className="error-msg">{message}</p>}/>
                        </div>
                        <div className="pt-3">
                            PASSWORD: <input type="password" className="form-control"
                                             {...register("password", {required: "This field is required"})}/>
                            <ErrorMessage name="password" errors={errors}
                                          render={({message}) => <p className="error-msg">{message}</p>}/>
                        </div>

                        <div className="pt-3">
                            DEPARTMENT: <select className="form-control"
                                                name="dept" {...register("dept", {required: "This field is required"})}>
                            <option value="1">computer science</option>
                            <option value="4">business management</option>
                            <option value="3">physical education</option>
                            <option value="2">commerce</option>
                        </select>
                            <ErrorMessage name="dept" errors={errors}
                                          render={({message}) => <p className="error-msg">{message}</p>}/>
                        </div>
                        {/*
                        <div className="pt-3">
                            Course: <select className="form-control"
                                            name="course" {...register("course", {required: "This field is required"})}>
                            <option value="BCA">BCA</option>
                            <option value="BBA">BBA</option>
                            <option value="BA Phy Edu">BA Phy Edu</option>
                            <option value="Bcom">Bcom</option>
                        </select>
                            <ErrorMessage name="dept" errors={errors}
                                          render={({message}) => <p className="error-msg">{message}</p>}/>
                        </div>

                        <div className=" pt-3 ">
                            PHONE: <input type="text" className="form-control"
                                          {...register("mobile", {required: "This field is required"})}/>
                            <ErrorMessage name="mobile" errors={errors}
                                          render={({message}) => <p className="error-msg">{message}</p>}/>
                        </div>
                        <div className=" pt-3 ">
                            ADDRESS: <textarea rows="1" className="form-control" cols="10"
                                               {...register("address", {required: "This field is required"})}></textarea>
                            <ErrorMessage name="address" errors={errors}
                                          render={({message}) => <p className="error-msg">{message}</p>}/>
                        </div>
                        <div className="pt-3 ">
                            CITY: <input type="text" className="form-control"
                                         {...register("city", {required: "This field is required"})}/>
                            <ErrorMessage name="city" errors={errors}
                                          render={({message}) => <p className="error-msg">{message}</p>}/>
                        </div>
                        <div className=" pt-3 ">
                            STATE: <input type="text" className="form-control"
                                          {...register("state", {required: "This field is required"})}/>
                            <ErrorMessage name="state" errors={errors}
                                          render={({message}) => <p className="error-msg">{message}</p>}/>
                        </div>

                    </div>
                    <br/>
                    <center>
                        <button className="form-control w-25 btn btn-primary"> SignUp</button>
                    </center>
                </form>*/}


        </>
    )
}

export default StuSignup;