const connection = require("../connection");
const {sign} = require("jsonwebtoken");

function DeptLogin(req, res) { //signIn
    //console.log(req.body)

    let {email, password} = req.body
    if (email == "" || password == "") {
        res.json({error: 'All Fields are required', message: ''})
    } else {
        //authenticate user
        let checkUser = `select * from department where dept_email='${email}' and dept_password='${password}'`;
        //console.log(checkUser)
        connection.query(checkUser, (error, record) => {
            if (error) {
                res.json({error: error.message, message: ''})
            } else {
                // console.log(record.length)
                if (record.length == 0) {
                    res.json({error: "Invalid Email or Password", message: ''})
                } else {
                    //generate JWT (payload,secret,expiry)
                    let payload = {
                        id: record[0].dept_id,
                        name: record[0].dept_name,
                        email: record[0].dept_email
                    }
                    //console.log(record[0].fullName)
                    let secret = "dept@123"
                    let expiry = 60 * 20 //sec. 1minute
                    let token = sign(payload, secret, {expiresIn: expiry})
                    //console.log(token)
                    res.json({error: '', message: ' Department Login successful', token: token})
                }
            }
        })
    }
}

function DeptTeam(req, res) {
    try {
        // console.log("dept team");
        let {id} = req.deptInfo;
        let display = `SELECT enrollments.*, student.stu_name, student.department, games.game,department.dept_name  FROM enrollments 
inner join student on enrollments.en_stu_id=student.stu_id inner join department on student.department=department.dept_id
inner join games on game_id=en_game_id where dept_id=${id} order by en_game_id desc`;
        connection.query(display, (error, records) => {
            if (error) {
                res.json({error: error.message, records: []});
            } else {
                res.json({error: '', records: records});
            }
        })
    } catch (e) {
        res.json({error: e.message, records: []});
    }
}

/*function DeptUpdateCaptain(req, res) {
    console.log(req.body);
    let {id} = req.deptInfo;
    let {action, stu_id} = req.body;
    // res.json({});
    let a = `SELECT enrollments.*, student.stu_name, student.department, games.game,department.dept_name  FROM enrollments 
inner join student on enrollments.en_stu_id=student.stu_id inner join department on student.department=department.dept_id
inner join games on game_id=en_game_id where dept_id=${id} and play_captain='captain' `;
    connection.query(a, (error, record) => {
        if (error) {
            res.json({error: error.message, message: ''})
        } else {
            if (record.length != 0) {
                res.json({error: "Captain already exist", message: ''})
            } else {
                let update = `update enrollments set play_captain='${action}' where en_stu_id=${stu_id}`;
                connection.query(update, (error) => {
                    if (error) {
                        res.json({error: error.message, message: ''});
                    } else {
                        res.json({error: '', message: 'Updated'});
                    }
                })
            }

        }
    })
}*/


//HOME PAGE************ FUNCTIONS****
function ScheduleShow(req, res) {
    //let read=`SELECT DATE_FORMAT(sch_date,'%d %M %Y') as scheduleDate,game,event_name FROM sport.schedule inner join games on game_id=sch_game_id
//inner join event on event_id=sch_event_id
//WHERE sch_date >= CURRENT_DATE
//ORDER BY scheduleDate ASC;`;
    let read = `SELECT DATE_FORMAT(sch_date,'%d %M %Y') as scheduleDate,game,event_name FROM sport.schedule inner join games on game_id=sch_game_id
inner join event on event_id=sch_event_id 
WHERE sch_date >= CURRENT_DATE and sch_status='approved'
ORDER BY scheduleDate ASC;`;
    connection.query(read, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []});
        } else {
            res.json({error: '', records: records});
        }
    })

}

function Result(req, res) {
    let read = `select sch_detail_id, schedule.sch_id,
    DATE_FORMAT(schedule.sch_date,'%d %M %Y') AS scheduleDate, 
    games.game,event.event_name,
    deptA.dept_name AS teamAName, 
    deptB.dept_name AS teamBName,
    win.dept_name AS result
from sch_detail inner join schedule on sch_id=schedule
inner join games on game_id=sch_game_id
inner join event on event_id=sch_event_id
INNER JOIN 
    department AS deptA ON sch_detail.teamA = deptA.dept_id
INNER JOIN 
    department AS deptB ON sch_detail.teamB = deptB.dept_id
inner join department AS win on sch_detail.winner=win.dept_id    
ORDER BY scheduleDate desc;`;
    connection.query(read, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []});
        } else {
            res.json({error: '', records: records});
        }
    })
}

//dept

function DeptUpdateCaptain(req,res){
    let {action, s_id} = req.body;
    let update = `update enrollments set play_captain='${action}' where en_stu_id=${s_id}`;
    connection.query(update, (error) => {
        if (error) {
            res.json({error: error.message, message: ''});
        } else {
            res.json({error: '', message: 'player/captain status'});
        }
    })
}
function DeptEnrolStatus(req, res) {
    // console.log(req.body);
    // let {id} = req.deptInfo;
    // console.log(id);
    let {action, en_id} = req.body;
    let update = `update enrollments set en_status='${action}' where en_id=${en_id}`;
    connection.query(update, (error) => {
        if (error) {
            res.json({error: error.message, message: ''});
        } else {
            res.json({error: '', message: 'Student Selected for game'});
        }
    })

}

module.exports = {
    DeptLogin,
    DeptTeam,
    DeptUpdateCaptain,
    ScheduleShow, Result,
    DeptEnrolStatus
}