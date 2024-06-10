//import reactLogo from './assets/react.svg'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Category from "./pages/admin/Category.jsx";
import AdminLogin from "./pages/admin/AdminLogin.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import ChangePassword from "./pages/admin/ChangePassword.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import SignUp from "./pages/organizer/SignUp.jsx";
import OrgLogin from "./pages/organizer/OrgLogin.jsx";
import Events from "./pages/organizer/Events.jsx";
import StuSignup from "./pages/student/StuSignup.jsx";
import StuLogin from "./pages/student/StuLogin.jsx";
import StuDashboard from "./pages/student/StuDashboard.jsx";
import StuLayout from "./layouts/StuLayout.jsx";
import OrgLayout from "./layouts/OrgLayout.jsx";
import StuChangePwd from "./pages/student/StuChangePwd.jsx";
import Games from "./pages/admin/Games.jsx";
import Event from "./pages/admin/Event.jsx";
import PageNotFound from "./PageNotFound.jsx";
import Schedule from "./pages/organizer/Schedule.jsx";
import Department from "./pages/admin/Department.jsx";

import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import ScheduleList1 from "./pages/admin/ScheduleList1.jsx";
import ScheduleList2 from "./pages/admin/ScheduleList2.jsx";
import RegisteredStudents from "./pages/admin/RegisteredStudents.jsx";
import Enrollments from "./pages/student/Enrollments.jsx";
import DeptLogin from "./pages/department/DeptLogin.jsx";
import TeamList from "./pages/department/TeamList.jsx";
import About from "./pages/About.jsx";
import PublicLayout from "./layouts/PublicLayout.jsx";
import DeptLayout from "./layouts/DeptLayout.jsx";
import Gallery from "./pages/Gallery.jsx";
import Match from "./pages/organizer/Match.jsx";
import UploadGallery from "./pages/student/UploadGallery.jsx";
import PlayerProfiles from "./pages/PlayerProfiles.jsx";
import Dashboard from "./pages/organizer/Dashboard.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PublicLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="category" element={<Category/>}/>
                        {/*<Route path="pub-nav" element={<PublicNavbar/>} />*/}
                        <Route path="contact" element={<Contact/>}/>
                        <Route path="gallery" element={<Gallery/>}/>
                        <Route path="player-prof" element={<PlayerProfiles/>}/>
                        <Route path="about" element={<About/>}/>
                        <Route path="admin-login" element={<AdminLogin/>}/>{/*Admin */}
                        <Route path="event" element={<Event/>}/>
                        <Route path="signup" element={<SignUp/>}/> {/* organizer's*/}
                        <Route path="orglogin" element={<OrgLogin/>}/>
                        <Route path="stu-signup" element={<StuSignup/>}/>{/* Student*/}
                        <Route path="stu-login" element={<StuLogin/>}/>
                        <Route path="dept-login" element={<DeptLogin/>}/>
                    </Route>


                    <Route path="/admin" element={<AdminLayout/>}>
                        <Route path="admin-dashboard" element={<AdminDashboard/>}/>
                        <Route path="change-password" element={<ChangePassword/>}/>
                        <Route path="games" element={<Games/>}/>
                        <Route path="event" element={<Event/>}/>
                        <Route path="dept" element={<Department/>}/>
                        <Route path="sch-list1" element={<ScheduleList1/>}/>
                        <Route path="sch-list2" element={<ScheduleList2/>}/>
                        <Route path="register-stu" element={<RegisteredStudents/>}/>
                    </Route>

                    <Route path="/org" element={<OrgLayout/>}>
                        <Route path="dash-sch" element={<Dashboard/>}/>
                        <Route path="events" element={<Events/>}/>
                        <Route path="schedule" element={<Schedule/>}/>
                        <Route path="match" element={<Match/>}/>
                    </Route>

                    <Route path="/dept" element={<DeptLayout/>}>
                        <Route path="teamlist" element={<TeamList/>}/>
                    </Route>

                    <Route path="/student" element={<StuLayout/>}>
                        <Route path="stu-dashboard" element={<StuDashboard/>}/>
                        <Route path="stu-changepwd" element={<StuChangePwd/>}/>
                        <Route path="stu-enrol" element={<Enrollments/>}/>
                        <Route path="stu-gallery" element={<UploadGallery/>}/>
                    </Route>

                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
