import Banner from "../../components/Banner.jsx";
import {ErrorMessage} from "@hookform/error-message";
import {useForm} from "react-hook-form";
import {useEffect, useState} from 'react';

//import {useNavigate} from "react-router-dom";

function UploadGallery() {
    //const navigate =useNavigate();
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm();

    /*const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };*/

    async function handleUploadClick(data) {
        let token = localStorage.getItem("stuToken");
        if (!token) {
            // console.log("Unverified");
            // navigate("/stu-login");
        } else {
            let photo = data.photo[0];
            let formData = new FormData();
            formData.append("photo", photo)
            formData.append("token", token)

            const url = "http://localhost:5000/stu-gallery";

            let response = await fetch(url, {
                method: 'POST',
                // headers: {
                //     'Content-Type': 'application/json'
                // },
                body: formData
            });
            response = await response.json();
            console.log(response);
            reset();
            // console.log(data);
        }
    }

    const [task, setTask] = useState([]);

    async function fetchGallery() {
        let token = localStorage.getItem("stuToken");
        if (!token) {
            //  navigate("/stu-login");
        } else {
            let token = localStorage.getItem("stuToken");
            const url = "http://localhost:5000/stu-gallery";

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const responseData = await response.json();
            console.log(responseData);
            console.log(responseData.records);
            if (responseData.error) {
                // navigate("/stu-login");
                alert("no token found");
            } else {
                setTask(responseData.records)
            }
        }
    }

    useEffect(() => {
        fetchGallery()
    }, [])


    return (
        <>
            <Banner pageTitle="Student Gallery"/>
            <div className="container">
                <div className="pt-4">
                    <div style={{backgroundColor: 'white', padding: 100}}>
                        <div style={{color: 'darkgray', backgroundColor: 'whitesmoke'}}>
                            <div className="login-area" style={{padding: 28, backgroundColor: 'slategrey'}}>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="login-form">
                                                <div className="section-title">
                                                    <h2> UPLOAD IMAGES</h2>
                                                </div>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <form onSubmit={handleSubmit(handleUploadClick)}>
                                                            <div className="form">
                                                                <input type="file" className="form-control "
                                                                       placeholder="choose file" {...register("photo", {required: "This field is required"})}/><br/>
                                                                <ErrorMessage name="photo" errors={errors}
                                                                              render={({message}) => <p
                                                                                  className="error-msg">{message}</p>}/>
                                                            </div>


                                                            <div className="form">
                                                                <button type="submit" className="btn">Upload <i
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
                    </div>
                </div>

                <div className="rts-gallery-section pt-1">
                    <div className="container">
                        <div className="top-wrap">
                            <div className="filter-button-group">
                                <h2>My gallery </h2>
                            </div>
                        </div>
                        <div className="filterd-items fifa20">
                            <div className="gallery-grid">
                                <div className="row mt-2 mb-2">


                                    {task.length == 0 ? <div>
                                            <h4>No Data Available</h4></div> :
                                        task.map((value, index) =>
                                            <div className="col-xl-4 col-md-4 col-sm-4 col-12 mb-2" key={index}>
                                                <img src={`http://localhost:5000${value.photo}`} style={{height:"200px",width:"100%"}}
                                                     alt="gallery-image"/>
                                            </div>
                                        )}


                                    {/*<div className="col-xl-4 col-md-6">
                                        <div className="gallery-item">
                                            <div className="gallery-image image-popup-vertical-fit"
                                               href="assets/images/gallery/full2.png" title="Football.png"><img
                                                src="assets/images/gallery/2.png" alt="gallery-image"/>
                                                <button className="pop-btn"><i className="fal fa-plus"></i></button>
                                            </div>
                                        </div>
                                     </div>*/}

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* <div className="rts-trainer-section-section section-gap">
                    <div className="container">
                        <div className="section-title-area section-title-area-inner mb--50">
                            <h1 className="section-title">My Gallery</h1>
                        </div>
                        <div className="table-area table-full">
                            <table className="table table-bordered">
                                <thead className="thead-dark">
                                </thead>
                                <tbody>
                                <tr className="head-tr">
                                    <th></th>
                                    <th scope="col">IMAGES</th>
                                </tr>
                                {task.length == 0 ? <tr>
                                    <td>No Data Available</td>
                                </tr> : task.map((value, index) =>
                                    <tr key={index}>
                                        <td>
                                            {value.photo}
                                        </td>
                                        <td><span className="text"><img src={`http://localhost:5000${value.photo}`}/></span></td>
                                    </tr>
                                )}

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>*/}
            </div>
        </>
    )
}

/*background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);*/
export default UploadGallery;