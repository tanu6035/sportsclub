const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')
const fileUpload = require("express-fileupload")
const {verify, decode} = require('jsonwebtoken')
const adminController = require("./controllers/admin.controller"); // controllers
const stuController = require("./controllers/stu.controller"); // controllers
const deptController = require("./controllers/dept.controller");

const cors = require("cors") // CORS

app.use(express.static('public'))

app.use(fileUpload())
app.use(cookieParser())
app.use(cors())
app.use(express.json()) ///  req.body undefined
//app.use(express.urlencoded({extended:true}))


//const connection =require("./connection");
const path = require("path")
const {AddEvent} = require("./controllers/admin.controller");

//Authorization
function adminAuthorization_HTTP_Request(req, res, next) {
    if (!req.body.token) {
        return res.json({error: 'Unauthorized Access', message: ''})
    }

    let token = req.body.token
    let secret = "abc@123"

    try {
        // verify token
        req['adminInfo'] = verify(token, secret) // return data
        next()
    } catch (error) {
        res.json({error: error.message, message: ''})
    }
}

function orgAuthorization_HTTP_Request(req, res, next) {
    if (!req.body.token) {
        return res.json({error: 'Unauthorized Access', message: ''})
    }

    let token = req.body.token
    let secret = "org@123"

    try {
        // verify token
        req['orgInfo'] = verify(token, secret) // return data
        next()
    } catch (error) {
        res.json({error: error.message, message: ''})
    }
}

function orgAuthorization_HTTP_GET_Request(req, res, next) {
    let token = req.headers.authorization.split(" ")[1]
    // console.log(token);

    if (!token) {
        return res.json({error: 'Token Not Found', message: ''});
    }

    try {
        // verify token
        let secret = "org@123"
        req['orgInfo'] = verify(token, secret) // return data
        next()
    } catch (e) {
        return res.json({error: e.message, message: ''})
    }
}

function stuAuthorization_HTTP_Request(req, res, next) {
    if (!req.body.token) {
        return res.json({error: 'Unauthorized Access', message: ''})
    }

    let token = req.body.token
    let secret = "stu@123"

    try {
        // verify token
        req['stuInfo'] = verify(token, secret) // return data
        next()
    } catch (error) {
        res.json({error: error.message, message: ''})
    }
}

function stuAuthorization_HTTP_GET_Request(req, res, next) {
    let token = req.headers.authorization.split(" ")[1]
    // console.log(token);

    if (!token) {
        return res.json({error: 'Token Not Found', message: ''});
    }

    try {
        // verify token
        let secret = "stu@123"
        req['stuInfo'] = verify(token, secret) // return data
        next()
    } catch (e) {
        return res.json({error: e.message, message: ''})
    }
}

// Dept
function DeptAuthorization_GET_Request(req, res, next) {
    let token = req.headers.authorization.split(" ")[1]
    // console.log(token);

    if (!token) {
        return res.json({error: 'Token Not Found', message: ''});
    }

    try {
        // verify token
        let secret = "dept@123"
        req['deptInfo'] = verify(token, secret) // return data
        next()
    } catch (e) {
        return res.json({error: e.message, message: ''})
    }
}

function deptAuthorization_POST_Request(req, res, next) {
    if (!req.body.token) {
        return res.json({error: 'Unauthorized Access', message: ''})
    }

    let token = req.body.token
    let secret = "dept@123"

    try {
        // verify token
        req['deptInfo'] = verify(token, secret) // return data
        next()
    } catch (error) {
        res.json({error: error.message, message: ''})
    }
}

/*function stuAuthorization(req, res, next) {
    // Check if token exists in the query parameters
    if (!req.body.token) {
        return res.json({error: 'Unauthorized Access', message: ''});
    }
    const token = req.body.token;

    // Decode the token to get the payload data
    const decodedToken = decode(token); //jwt.decode(token)
    console.log(decodedToken);

    //let token = req.query.token;
    let secret = "stu@123";
    try {
        // Verify token
        req['stuInfoGet'] = verify(token, secret, decodedToken);
        next();
    } catch (error) {
        res.json({error: error.message, message: ''});
    }
}*/

//HOME
app.get("/home_sch", deptController.ScheduleShow)
app.get("/result", deptController.Result)

//Department
app.post("/dept-login", deptController.DeptLogin)
app.get("/teamlist", DeptAuthorization_GET_Request, deptController.DeptTeam)
app.post("/teamlist", deptAuthorization_POST_Request, deptController.DeptUpdateCaptain)
app.post("/status_enrol", deptAuthorization_POST_Request, deptController.DeptEnrolStatus)

//STUDENT
app.post("/stu-signup", stuController.StuSignup)
app.post("/stu-login", stuController.StuLogin)
app.get("/stu-dashboard", stuController.StuDashboard)
app.post("/stu-changepwd", stuAuthorization_HTTP_Request, stuController.StuChangePwd)

app.post("/stu-gallery", stuAuthorization_HTTP_Request, stuController.StuGallery)
app.get("/stu-gallery", stuAuthorization_HTTP_GET_Request, stuController.ReadStuGallery)

//Organizer
app.post("/signup", adminController.SignUp)
app.post("/orglogin", adminController.OrgLogin)
app.get("/events", adminController.Events) ////author... GET //POST

app.post("/schedule", orgAuthorization_HTTP_Request, adminController.AddSchedule)
app.get("/schedule", orgAuthorization_HTTP_GET_Request, adminController.ReadSchedule)
app.delete("/schedule/:d_id", adminController.DeleteSchedule)

app.get("/org-pending-sch", orgAuthorization_HTTP_GET_Request, adminController.OrgPendingSch)
app.get("/dash-sch", adminController.OrgDash)

//Match
app.post("/match", orgAuthorization_HTTP_Request, adminController.AddMatch)
app.get("/match", orgAuthorization_HTTP_GET_Request, adminController.FetchMatch)
app.delete("/match/:id", adminController.DeleteMatch)

app.get("/org_prev_match", orgAuthorization_HTTP_GET_Request, adminController.OrgPrevMatch)

// Student**
app.post("/stu-enrol", stuAuthorization_HTTP_Request, stuController.StuEnroll)
app.get("/stu-enrol", stuAuthorization_HTTP_GET_Request, stuController.ReadStuEnroll)
app.delete("/stu-enrol/:del", stuController.DeleteStuEnroll)

//Get / Post
//login ADMIN
app.post("/admin-login", adminController.AdminLogin)
app.get("/admin-dashboard", (req, res) => {
    res.render('admin-dashboard')
})
app.post("/change-password", adminAuthorization_HTTP_Request, adminController.AdminChangePassword)
app.post("/games", adminController.AddGame)
app.get("/games", adminController.ReadGame)
app.delete("/games/:id", adminController.DeleteGame)

app.post("/event", adminController.AddEvent)
app.get("/event", adminController.ReadEvent)
app.delete("/event/:d_id", adminController.DeleteEvent)

app.get("/sch-list1", adminController.ListPendingSch)
app.get("/sch-list1/:d_id", adminController.ListPendingSchUpdate)
app.get("/sch-list2", adminController.ListApprovedSch)
app.get("/sch-list2/:d_id", adminController.ListApprovedSchUpdate)

app.post("/dept", adminController.AddDepartment)              //*** Department
app.get("/dept", adminController.ReadDepartment)
app.delete("/dept/:d_id", adminController.DeleteDepartment)

app.get("/register-stu", adminController.FetchStud)

//category
app.delete("/category/:id", adminController.DeleteCategory)
app.get("/category", adminController.ReadCategory)
app.post("/category", adminController.AddCategory)

app.set("/", (req, res) => {
    res.send("Response from Server");
    //console.log("Response from Server")
})


const port = 5000;
app.listen(port, (error) => {
    if (error) {
        console.log(error.message)
    } else {
        console.log("Server is running")
    }
})