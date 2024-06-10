const connection = require("../connection");
const {sign} = require("jsonwebtoken");

function StuSignup(req, res) {
    //console.log(req.body);
    // res.json({error:'',message:''})
    const {name, email, dept, gender, mobile, password, address, city, state} = req.body;
    let checkUser = `select * from student where email='${email}'`

    connection.query(checkUser, (error, record) => {
        if (error) {
            res.json({error: error.message, message: ''})
        } else {
            if (record.length > 0) {
                res.json({error: "Invalid, User already exist", message: ''})
            } else {
                const insertCommand = `insert into student(stu_name,email,department,password,gender,mobile,address,city,state,status) values('${name}','${email}',${dept},'${password}','${gender}','${mobile}','${address}','${city}','${state}','pending')`;
                connection.query(insertCommand, (error) => {
                    if (error) {
                        res.json({error: error.message, message: ''});
                    } else {
                        res.json({error: '', message: 'Student data Added.'});
                    }
                })
            }
        }
    })

}

function StuLogin(req, res) { //signIn
    //console.log(req.body)

    let {email, password} = req.body
    if (email == "" || password == "") {
        res.json({error: 'All Fields are required', message: ''})
    } else {
        //authenticate user
        let checkUser = `select * from student where email='${email}' and password='${password}' and status='approved'`;
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
                        id: record[0].stu_id,
                        fullName: record[0].stu_name,
                        email: record[0].email,
                        dept: record[0].department
                    }
                    //console.log(record[0].fullName)
                    let secret = "stu@123"
                    let expiry = 60 * 20 //sec. 1minute
                    let token = sign(payload, secret, {expiresIn: expiry})
                    //console.log(token)
                    res.json({error: '', message: ' Student Login successful', token: token})
                    // res.cookie('u_Token',token,{expires: new Date(Date.now()+expiry *1000)})  //storing token string in browser the COOKIE

                    //console.log('Cookies: ', req.cookies.u_Token) ///?????
                }
            }
        })
    }
}

function StuDashboard(req, res) {
    res.json({error: "", message: "welcome to Student dashboard"})
}

function StuChangePwd(req, res) {
    console.log(req.body);
    //res.json({error:"",message:""});
    try {
        let {id} = req.stuInfo;
        console.log(id)
        let {password, newPassword, confirmPassword} = req.body;

        let checkOldPassword = `select * from student where stu_id =${id}`;
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
                        let updateCommand = `update student set password='${newPassword}' where stu_id=${id}`;
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

function StuEnroll(req, res) {
    let {id} = req.stuInfo;
    //res.json({message:id})
    const {game_id} = req.body;
    try {
        let checkUser = `select * from enrollments where en_game_id=${game_id} And en_stu_id=${id}`;
        connection.query(checkUser, (error, record) => {
            if (error) {
                res.json({error: error.message, message: ''})
            } else {
                if (record.length > 0) {
                    res.json({error: "Invalid, Game entry already exist", message: ''})
                } else {
                    let insertCommand = `insert into enrollments(en_stu_id,en_game_id,play_captain,en_status) values(${id},${game_id},'player','pending')`;
                    connection.query(insertCommand, (error) => {
                        if (error) {
                            res.json({error: error.message, message: ''});
                        } else {
                            res.json({error: '', message: 'Enrolled to Game.'});
                        }
                    })
                }
            }
        })
    } catch (e) {
        res.json({error: e.message, message: ''});
    }

}

function ReadStuEnroll(req, res) {
    try {
        let {id} = req.stuInfo;

        //let readCommand=`SELECT game FROM enrollments inner join games on game_id=en_game_id`;
        let readCommand = `select en_id,game,en_status from enrollments inner join games on game_id=en_game_id AND enrollments.en_stu_id=${id}`;
        connection.query(readCommand, (error, records) => {
            if (error) {
                res.json({error: error.message, records: []});
            } else {
                res.json({error: '', records: records});
            }
        })
    } catch (e) {
        res.json({error: e.message, records: []})
    }
}

function DeleteStuEnroll(req, res) {
    let {del} = req.params;
    // console.log(del);
    let deleteCommand = `delete from enrollments where en_id=${del}`;
    connection.query(deleteCommand, (error) => {
        if (error) {
            res.json({error: error.message, message: ''})
        } else {
            res.json({error: '', message: ' Game Enrollment Deleted.'})
        }
    })
}

function StuGallery(req, res) {
    try {
        let {id} = req['stuInfo'];
        let {photo} = req.files;
        let time = new Date().getTime()
        let serverPath = `public/gallery/${time}_${photo.name}`;
        let dbPath = `/gallery/${time}_${photo.name}`;

        photo.mv(serverPath, (e) => {
            if (e) {
                res.json({error: e.message});
            } else {
                let insertGallery = `Insert Into s_gallery(stu_id, photo) Values(${id}, '${dbPath}')`;
                connection.query(insertGallery, (e) => {
                    if (e) {
                        res.json({error: e.message});
                    } else {
                        res.json({error: '', message: 'File Uploaded.'});
                    }
                })
            }
        })
    } catch (e) {
        res.json({error: e.message});
    }
}

function ReadStuGallery(req,res){
    let {id} =req.stuInfo;
    //console.log(id);
    let readCommand=`select * from s_gallery where stu_id=${id}`;
    connection.query(readCommand,(error,records)=>{
        if(error){
            res.json({error: error.message});
        }
        else{
            res.json({error: '', records: records});
        }
    })
}
module.exports = {
    StuSignup,
    StuLogin,
    StuDashboard,
    StuChangePwd,
    StuEnroll, ReadStuEnroll, DeleteStuEnroll,
    StuGallery,ReadStuGallery
}