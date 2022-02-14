const FS = require('../lib/fsDeal')
const user = new FS('../model/users.json')
const courses = new FS('../model/courses.json')
const groups = new FS('../model/groups.json')
const allUsers = JSON.parse(user.read())
const allCourse = JSON.parse(courses.read())
const allGroups = JSON.parse(groups.read())

module.exports = {
    ADMINPOST : (req, res) =>{
        if(req.body.role == "teacher"){
            const {username,password, role, course} = req.body
    
            allUsers.push({id:allUsers.length + 1, username, role, password, course })
            user.write(allUsers)
        }
        if(req.body.role == "student"){
            const {username, role, password, course, teacher, group} = req.body
    
            allUsers.push({id:allUsers.length + 1, username,role, password, course,teacher,group })
            user.write(allUsers)
        }
        if(req.body.role == "course"){
            const {course, teacher} = req.body
    
            allCourse.push({id:allCourse.length + 1, course, teacher})
            courses.write(allCourse)
        }
        if(req.body.role == "group"){
            const {group,course,password,teacher} = req.body
    
            allGroups.push({id:allGroups.length + 1,password, group,course,teacher})
            groups.write(allGroups);
        }

        res.redirect('/admin')
    }
}