const connection = require("../connection");
const {sign} = require('jsonwebtoken')

//const cookieParser = require("cookie-parser");


function AddCategory(req, res) {
    console.log(req.body)
    const {categoryName} = req.body;
    const insertCommand = `insert into category(categoryName) values('${categoryName}')`;
    connection.query(insertCommand, (error) => {
        if (error) {
            res.json({error: error.message, message: ''});
        } else {
            res.json({error: '', message: 'Category Added.'});
        }
    })
}

function ReadCategory(req, res) {
    let readCommand = `select * from category`;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []})
        } else {
            res.json({error: '', records: records})
        }
    })
}

function DeleteCategory(req, res) {
    let {id} = req.params
    let deleteCommand = `delete from category where id=${id}`
    connection.query(deleteCommand, (error) => {
        if (error) {
            res.json({error: error.message, message: ''})   ///no space in empty string
        } else {
            res.json({error: '', message: 'Category Deleted.'})
        }
    })
}

function AdminLogin(req, res) {
    //console.log(req.body)

    let {email, password} = req.body
    if (email == "" || password == "") {
        res.json({error: 'All Fields are required', message: ''})
    } else {
        //authenticate user
        let checkUser = `select * from admin where email='${email}' and password='${password}'`
        //console.log(checkUser)
        connection.query(checkUser, (error, record) => {
            if (error) {
                res.json({error: error.message, message: ''})
            } else {
                console.log(record.length)
                if (record.length == 0) {
                    res.json({error: "Invalid Email or Password", message: ''})
                } else {
                    //generate JWT (payload,secret,expiry)
                    let payload = {
                        id: record[0].id,
                        email: record[0].email,
                        fullName: record[0].fullName
                    }
                    //console.log(record[0].fullName)
                    let secret = "abc@123"
                    let expiry = 60 * 20  //sec. 1minute
                    let token = sign(payload, secret, {expiresIn: expiry})
                    //console.log(token)
                    res.json({error: '', message: 'Login successful', token: token})
                    // res.cookie('u_Token',token,{expires: new Date(Date.now()+expiry *1000)})  //storing token string in browser the COOKIE

                    //console.log('Cookies: ', req.cookies.u_Token) ///?????
                }
            }
        })
    }
}

function AdminChangePassword(req, res) {  //
    console.log(req.body);
    //console.log(req.body.token)
    try {
        let {id} = req.adminInfo;
        console.log(id);
        let {password, newPassword, confirmPassword} = req.body;

        let checkOldPassword = `select * from admin where id =${id}`; // checking for validation that password entered matches with current password(password)
        connection.query(checkOldPassword, (error, record) => {
            if (error) {
                res.json({error: error.message, message: ''})
            } else {
                //console.log(record.length)
                if (record[0].password != password) {
                    res.json({error: "Invalid Current Password", message: ''})
                } else {
                    if (newPassword != confirmPassword) {
                        res.json({error: "New password & confirm password must be same.", message: ""})
                    } else {
                        let updateCommand = `update admin set password='${newPassword}' where id=${id}`;
                        connection.query(updateCommand, (error) => {
                            if (error) {
                                res.json({error: error.message, message: ""});
                            } else {
                                res.json({error: "", message: "Password Updated"});
                            }
                        })
                    }
                }
            }
        })
    } catch (error) {
        res.json({error: error.message, message: ""})
    }
}

function SignUp(req, res) {                       // Organizer***
    console.log(req.body);
    // res.json({error:'',message:''})
    const {name, email, gender, age, mobile, password} = req.body;
    let check=`select * from organizer where org_email='${email}'`;
    connection.query(check, (error,record) => {
        if (error) {
            res.json({error: error.message, message: ''})
        } else {
            if (record.length != 0) {
                res.json({error: "Already exist, try another email", message: ''})
            }
            else{
                const insertCommand = `insert into organizer(org_name,org_email,gender,age,mobile,password,status) values('${name}','${email}','${gender}','${age}','${mobile}','${password}','pending')`;
                connection.query(insertCommand, (error) => {
                    if (error) {
                        res.json({error: error.message, message: ''});
                    } else {
                        res.json({error: '', message: 'Organizer data Added.'});
                    }
                })}
        }
    })
}

function OrgLogin(req, res) {
    console.log(req.body)
    let {email, password} = req.body
    if (email == "" || password == "") {
        res.json({error: 'All Fields are required', message: ''})
    } else {
        //authenticate user
        let checkUser = `select * from organizer where org_email='${email}' and password='${password}' and status='approved'`;

        connection.query(checkUser, (error, record) => {
            if (error) {
                res.json({error: error.message, message: ''})
            } else {
                //console.log(record.length)
                if (record.length == 0) {
                    res.json({error: "Invalid Email or Password", message: ''})
                } else {
                    // res.json({error:'', message:'Valid Login'})
                    //generate JWT (payload,secret,expiry)
                    let payload = {
                        id: record[0].org_id,
                        email: record[0].org_email,
                        fullName: record[0].org_name
                    }

                    let secret = "org@123"
                    let expiry = 60 * 20//sec. 1minute   ********60*5 do it
                    let token = sign(payload, secret, {expiresIn: expiry})
                    //console.log(token)
                    res.json({error: '', message: 'Login successful', token: token})
                }
            }
        })
    }
}

function Events(req, res) {
    res.json({error: "", message: "welcome to Events Page"})
}

//GAMES****

function AddGame(req, res) {
    //console.log(req.body)
    // res.json({error:"",message:""})
    const {game, description} = req.body
    if (game == "") {
        res.json({error: 'All Fields are required', message: ''})
    }
    // validation if game already exist*
    let checkUser = `select * from games where game='${game}'`;
    connection.query(checkUser, (error, record) => {
        if (error) {
            res.json({error: error.message, message: ''})
        } else {
            if (record.length != 0) {
                res.json({error: "Invalid, Game Already exist", message: ''})
            } else {
                const insertCommand = `insert into games(game,description) values('${game}','${description}')`;
                connection.query(insertCommand, (error) => {
                    if (error) {
                        res.json({error: error.message, message: ''});
                    } else {
                        res.json({error: '', message: 'New Game Added.'});
                    }
                })
            }
        }
    })

}

function ReadGame(req, res) {
    let readCommand = `select * from games`;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []})
        } else {
            res.json({error: '', records: records})
        }
    })
}

function DeleteGame(req, res) {
    let {id} = req.params
    console.log(id)
    let deleteCommand = `delete from games where game_id=${id}`
    connection.query(deleteCommand, (error) => {
        if (error) {
            res.json({error: error.message, message: ''})   ///no space in empty string
        } else {
            res.json({error: '', message: 'Game Deleted.'})
        }
    })
}

//Event******

function AddEvent(req, res) {
    const {event} = req.body
    // validation if game already exist*
    let checkUser = `select * from event where event_name='${event}'`;
    connection.query(checkUser, (error, record) => {
        if (error) {
            res.json({error: error.message, message: ''})
        } else {
            if (record.length != 0) {
                res.json({error: "Event Already exist", message: ''})
            } else {
                const insertCommand = `insert into event(event_name) values('${event}')`;
                connection.query(insertCommand, (error) => {
                    if (error) {
                        res.json({error: error.message, message: ''});
                    } else {
                        res.json({error: '', message: 'New Event Added.'});
                    }
                })
            }
        }
    })
}

function ReadEvent(req, res) {
    let readCommand = `select * from event`;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []})
        } else {
            res.json({error: '', records: records})
        }
    })
}


function DeleteEvent(req, res) {
    let {d_id} = req.params
    console.log(d_id)
    let deleteCommand = `delete from event where event_id=${d_id}`
    connection.query(deleteCommand, (error) => {
        if (error) {
            res.json({error: error.message, message: ''})
        } else {
            res.json({error: '', message: 'Event Deleted.'})
        }
    })
}

//Schedules****
function AddSchedule(req, res) {
    let {id} = req.orgInfo;
    //console.log(id);
   // res.json({message:id})
    const {sch_date, sch_game_id, sch_event_id} = req.body
    let checkUser = `select * from schedule where sch_date='${sch_date}' and sch_game_id=${sch_game_id}`;
    connection.query(checkUser, (error, record) => {
        if (error) {
            res.json({error: error.message, message: ''})
        }
        else{
            if (record.length != 0){
                res.json({error: "Game is already in same schedule", message: ''})
            }
            else{
                const insertCommand = `insert into schedule(sch_date,sch_game_id,sch_event_id,sch_status,sch_org_id) values('${sch_date}',${sch_game_id},${sch_event_id},'pending',${id})`;
                connection.query(insertCommand, (error) => {
                    if (error) {
                        res.json({error: error.message, message: ''});
                    } else {
                        res.json({error: '', message: 'New Schedule Added.'});
                    }
                })
            }
        }
    })
}

//ORGANIZER
function ReadSchedule(req, res) {
    const {id} =req.orgInfo;
    //let readCommand=`select sch_id, DATE_FORMAT(sch_date,'%d %M %Y') as scheduleDate,sch_game_id,sch_event_id,sch_status from schedule`;
    let readCommand = `SELECT sch_id,DATE_FORMAT(sch_date,'%d %M %Y') as scheduleDate,game_id,game,event_id,event_name,sch_status FROM schedule
inner join games on game_id=sch_game_id inner join event on event_id=sch_event_id 
where sch_status='approved' and sch_org_id=${id}
and sch_date > CURRENT_DATE ORDER BY scheduleDate ASC`;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []})
        } else {
            res.json({error: '', records: records})
        }
    })
}

//ORGANIZER
function DeleteSchedule(req, res) {
    let {d_id} = req.params
    console.log(d_id)
    //*********************** valdidation if schedule is approved cant delete***********************

    let deleteCommand = `delete from schedule where sch_id=${d_id}`
    connection.query(deleteCommand, (error) => {
        if (error) {
            res.json({error: error.message, message: ''})
        } else {
            res.json({error: '', message: 'Schedule Deleted.'})
        }
    })
}

function OrgPrevMatch(req,res){
    let {id}=req.orgInfo;

    let readCommand=`SELECT 
    sch_detail_id, 
    DATE_FORMAT(schedule.sch_date,'%d %M %Y') AS scheduleDate, 
    deptA.dept_name AS teamAName, 
    deptB.dept_name AS teamBName, 
    sch_detail.time,
    games.game 
FROM 
    sch_detail 
INNER JOIN 
    schedule ON sch_detail.schedule = schedule.sch_id
INNER JOIN 
    games ON schedule.sch_game_id = games.game_id
INNER JOIN 
    department AS deptA ON sch_detail.teamA = deptA.dept_id
INNER JOIN 
    department AS deptB ON sch_detail.teamB = deptB.dept_id
where schedule.sch_org_id=${id}
and sch_date< CURRENT_DATE;  `;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []})
        } else {
            res.json({error: '', records: records})
        }
    })
}

//Approve & pending Schedules List
function ListPendingSch(req, res) {
   // let readCommand = `select sch_id, DATE_FORMAT(sch_date,'%d %M %Y') as scheduleDate,sch_game_id,sch_event_id,sch_status
//from schedule where sch_status='pending' and sch_date > CURRENT_DATE
//     ORDER BY scheduleDate ASC;`;
    let readCommand=`select sch_id, DATE_FORMAT(sch_date,'%d %M %Y') as scheduleDate,games.game,event.event_name,sch_status from schedule 
inner join games  on game_id=sch_game_id
inner join event on event_id=sch_event_id
where sch_status='pending' and sch_date > CURRENT_DATE
     ORDER BY scheduleDate ASC;`;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []})
        } else {
            res.json({error: '', records: records})
        }
    })
}

function ListPendingSchUpdate(req, res) {
    let {d_id} = req.params
    let updateCommand = `update schedule set sch_status='approved' where sch_id=${d_id}`;
    connection.query(updateCommand, (error) => {
        if (error) {
            res.json({error: error.message, message: ''})
        } else {
            res.json({error: "", message: 'Updated'})
        }
    })
}

function ListApprovedSch(req, res) {
    let readCommand = `select sch_id, DATE_FORMAT(sch_date,'%d %M %Y') as scheduleDate,games.game,event.event_name,sch_status  from schedule 
inner join games  on game_id=sch_game_id
inner join event on event_id=sch_event_id
where sch_status='approved'
and sch_date > CURRENT_DATE
     ORDER BY scheduleDate ASC;`;
    //console.log(readCommand);
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []})
        } else {
            res.json({error: '', records: records})
        }
    })
}

function ListApprovedSchUpdate(req, res) {
    let {d_id} = req.params
    let updateCommand = `update schedule set sch_status='pending' where sch_id=${d_id}`;
    connection.query(updateCommand, (error) => {
        if (error) {
            res.json({error: error.message, message: ''})
        } else {
            res.json({error: "", message: 'Updated'})
        }
    })
}

//Departments*******

function AddDepartment(req, res) {
    const {dept_name, dept_head, dept_email, dept_password} = req.body
    // validation if game already exist*
    let checkUser = `select * from department where dept_name='${dept_name}'`;
    connection.query(checkUser, (error, record) => {
        if (error) {
            res.json({error: error.message, message: ''})
        } else {
            if (record.length != 0) {
                res.json({error: "Department Already exist", message: ''})
            } else {
                const insertCommand = `insert into department(dept_name,dept_head,dept_email,dept_password) values('${dept_name}','${dept_head}','${dept_email}','${dept_password}')`;
                connection.query(insertCommand, (error) => {
                    if (error) {
                        res.json({error: error.message, message: ''});
                    } else {
                        res.json({error: '', message: 'New Department Added.'});
                    }
                })
            }
        }
    })

}

function ReadDepartment(req, res) {
    let readCommand = `select * from department`;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []})
        } else {
            res.json({error: '', records: records})
        }
    })
}


function DeleteDepartment(req, res) {
    let {d_id} = req.params
    console.log(d_id)
    let deleteCommand = `delete from department where dept_id=${d_id}`
    connection.query(deleteCommand, (error) => {
        if (error) {
            res.json({error: error.message, message: ''})
        } else {
            res.json({error: '', message: 'Department Deleted.'})
        }
    })
}

//** fetch students record admin
function FetchStud(req, res) {
    let readCommand = `SELECT stu_id,stu_name,dept_name,student.email,student.gender,student.mobile,student.address,student.city,
student.state,student.status from student 
inner join department on dept_id=department
order by status desc`;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []})
        } else {
            res.json({error: '', records: records})
        }
    })
}

function AddMatch(req, res) {
   // let {id}=req.orgInfo;
    //console.log(req.body);
    const {teamA,teamB,time,schedule}= req.body;  // prop ************** status fun()
    /*if (sch_status == 'pending') {
        res.json({error: "Schedule status is pending, can't Add Match", message: ''})
    }*/
    const insertCommand = `insert into sch_detail(schedule,teamA,teamB,time) values('${schedule}','${teamA}','${teamB}','${time}')`;
    connection.query(insertCommand, (error) => {
        if (error) {
            res.json({error: error.message, message: ''});
        } else {
            res.json({error: '', message: 'Match Added.'});
        }
    })
}


//Organizer "" schedule.sch_date

function FetchMatch(req, res) {
     let {id}=req.orgInfo;
    //let readCommand = `select sch_detail_id, DATE_FORMAT(schedule.sch_date,'%d %M %Y') as scheduleDate, sch_detail.teamA, sch_detail.teamB, sch_detail.time,games.game from sch_detail
    //inner join schedule on sch_id=schedule
    //inner join games on schedule.sch_game_id=games.game_id`;
    let readCommand=`SELECT 
    sch_detail_id, 
    DATE_FORMAT(schedule.sch_date,'%d %M %Y') AS scheduleDate, 
    deptA.dept_name AS teamAName, 
    deptB.dept_name AS teamBName, 
    sch_detail.time,
    games.game 
FROM 
    sch_detail 
INNER JOIN 
    schedule ON sch_detail.schedule = schedule.sch_id
INNER JOIN 
    games ON schedule.sch_game_id = games.game_id
INNER JOIN 
    department AS deptA ON sch_detail.teamA = deptA.dept_id
INNER JOIN 
    department AS deptB ON sch_detail.teamB = deptB.dept_id
where schedule.sch_org_id=${id}
and sch_date>= CURRENT_DATE;  `;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []})
        } else {
            res.json({error: '', records: records})
        }
    })
}


function DeleteMatch(req, res) {
    let {id} = req.params;
   // console.log(id)
    let deleteCommand = `delete from sch_detail where sch_detail_id=${id}`;
    connection.query(deleteCommand, (error) => {
        if (error) {
            res.json({error: error.message, message: ''})
        } else {
            res.json({error: '', message: 'Match Deleted.'})
        }
    })
}

//org
function OrgPendingSch(req,res){
    let {id} =req.orgInfo;
    let readCommand = `SELECT sch_id,DATE_FORMAT(sch_date,'%d %M %Y') as scheduleDate,game_id,game,event_id,event_name,sch_status FROM schedule
inner join games on game_id=sch_game_id 
inner join event on event_id=sch_event_id where sch_status='pending' and sch_org_id=${id}
ORDER BY scheduleDate desc`;
    //and sch_date >= CURRENT_DATE
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []})
        } else {
            res.json({error: '', records: records})
        }
    })
}

function OrgDash(req,res){
    let readCommand = `SELECT sch_id,DATE_FORMAT(sch_date,'%d %M %Y') as scheduleDate,game_id,game,event_id,event_name,sch_status,org_name FROM schedule inner join games on game_id=sch_game_id inner join event on event_id=sch_event_id
inner join organizer on org_id=sch_org_id;`;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []})
        } else {
            res.json({error: '', records: records})
        }
    })
}

module.exports = {
    AddCategory,
    ReadCategory,
    DeleteCategory,
    AdminLogin,
    AdminChangePassword,
    SignUp,
    OrgLogin,
    Events,
    AddGame, ReadGame, DeleteGame,
    AddEvent, ReadEvent, DeleteEvent,
    AddSchedule, ReadSchedule, DeleteSchedule,
    ListPendingSch, ListPendingSchUpdate, ListApprovedSch, ListApprovedSchUpdate,
    AddDepartment, ReadDepartment, DeleteDepartment,
    FetchStud,
    AddMatch,FetchMatch,DeleteMatch,
    OrgPendingSch,OrgDash,
    OrgPrevMatch
}