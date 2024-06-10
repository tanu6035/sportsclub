import AdminNavbar from "../components/AdminNavbar";
import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import PublicFooter from "../components/PublicFooter.jsx";

function AdminLayout(){
    const navigate =useNavigate();
    useEffect(()=>{
        // console.log(localStorage.getItem("stuToken"));
        let token = localStorage.getItem("adminToken")
        if(!token){
            navigate("/admin-login");
        }
        /*else{
            console.log(token)
        }*/
    },[])
    return(
        <>
            <AdminNavbar/>
            <Outlet/>
            <PublicFooter/>
        </>
    )
}
export default AdminLayout;