// const { cookie } = require("express/lib/response");
const FS = require('../lib/fsDeal')
const users = new FS('../model/users.json')
const courses = new FS('../model/courses.json')
const groups = new FS('../model/groups.json')
const task = new FS('../model/task.json')

const { signUser, verifyUser} = require('../lib/jwt')

const allUsers = JSON.parse(users.read())
const allCourses = JSON.parse(courses.read())
const allGroups = JSON.parse(groups.read())
const allTask = JSON.parse(task.read())
module.exports = {
    LOGIN: (req, res)=>{
         try {
            res.render('login')
        } catch (err){
            console.log(err);
        }
    },
    LOGINPOST: (req,res)=>{
        try {
            const {role} = req.body

                if(role == 'admin'){
                    res.redirect('admin')
                }
                if(role == 'teacher'){
                 res.redirect('teacher')
                 }
                 if(role == 'student'){
                     res.redirect('student')
                 }
         
       } catch (err){
           console.log(err);
       }
   },
    
    ADMIN:(req, res)=>{
        try{
            const token = req.cookies.token
            if(!token){
                res.redirect('/')
            } 
            const temp = verifyUser(token);
            if(temp && temp.role == 'admin') {
                const foundTeacher = allUsers.filter((e) => e.role == 'teacher')
                res.render('admin',{allUsers, allCourses,allGroups,allTask,foundTeacher});
            }else{
                res.redirect('/')
            }
        } catch(err) {
            res.status(401).send({
                msg: "Invalid token"
            })
        }

    },
    TEACHER:(req, res)=>{
        try{
            const token = req.cookies.token
            if(!token){
                res.redirect('/')
            } 
            const temp = verifyUser(token);
            if(temp && temp.role == 'teacher') {
                const foundStudent = allUsers.filter((e) => e.teacher == temp.name)
                
                const foundGroups = allGroups.filter((e) =>e.teacher == temp.name)
                const foundTask = allTask.filter((e) =>e.teacher == temp.name)
                res.render('teacher',{ foundStudent,foundGroups,allCourses,allTask,allGroups,foundTask});
            }else{
                res.redirect('/');
            }
        } catch(err) {
            res.status(401).send({
                msg: "Invalid token"
            })
        }
        
    },
    STUDENT:(req, res)=>{
         try{
            const token = req.cookies.token
            if(!token){
                res.redirect('/')
            } 
            const temp = verifyUser(token);
            if(temp  && temp.role == 'student') {
                const foundStudent = allUsers.filter((e) => e.teacher == temp.name)        
                const foundTask = allTask.filter((e) =>e.teacher == temp.name)
                res.render('student',{ foundStudent,allTask,foundTask});
            }else{
                res.redirect('/');
            }
        } catch(err) {
            console.log(err);
        }
        res.render('student')
    }
}