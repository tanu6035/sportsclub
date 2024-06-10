import OrgNavbar from "../components/OrgNavbar";
import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import PublicFooter from "../components/PublicFooter.jsx";

function AdminLayout(){
    const navigate =useNavigate();
    useEffect(()=>{
        // console.log(localStorage.getItem("stuToken"));
        let token = localStorage.getItem("orgToken")
        if(!token){
            navigate("/orglogin");
        }
        /*else{
            console.log(token)
        }*/
    },[])
    return(
        <>
            <OrgNavbar/>
            <Outlet/>
            <PublicFooter/>
        </>
    )
}
export default AdminLayout;