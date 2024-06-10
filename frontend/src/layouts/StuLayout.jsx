import StuNavbar from "../components/StuNavbar.jsx";
import {Outlet, useNavigate} from "react-router-dom";
//import Footer from "../components/Footer.jsx";
import {useEffect} from "react";
import PublicFooter from "../components/PublicFooter.jsx";

function StuLayout() {
    const navigate = useNavigate();
    useEffect(() => {
        // console.log(localStorage.getItem("stuToken"));
        let token = localStorage.getItem("stuToken")
        if (!token) {
            navigate("/stu-login");
        }
        /*else{
            console.log(token)
        }*/
    }, [])
    return (
        <>
            <StuNavbar/>
            <Outlet/>
            <PublicFooter/>
        </>
    )
}

export default StuLayout;