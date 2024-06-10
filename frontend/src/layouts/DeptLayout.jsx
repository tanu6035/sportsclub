import DeptNavbar from "../components/DeptNavbar.jsx";
import {Outlet, useNavigate} from "react-router-dom";
//import Footer from "../components/Footer.jsx";
import {useEffect} from "react";
import PublicFooter from "../components/PublicFooter.jsx";

function StuLayout() {
    const navigate = useNavigate();
    useEffect(() => {
        // console.log(localStorage.getItem("stuToken"));
        let token = localStorage.getItem("deptToken")
        if (!token) {
            navigate("/dept-login");
        }
        /*else{
            console.log(token)
        }*/
    }, [])
    return (
        <>
            <DeptNavbar/>
            <Outlet/>
            <PublicFooter/>
        </>
    )
}

export default StuLayout;