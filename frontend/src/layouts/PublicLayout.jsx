import PublicNavbar from "../components/PublicNavbar.jsx";
import {Outlet} from "react-router-dom";
import PublicFooter from "../components/PublicFooter.jsx";

function PublicLayout() {
    return (
        <>
            <PublicNavbar/>
            <Outlet/>
            <PublicFooter/>
        </>
    )
}

export default PublicLayout;