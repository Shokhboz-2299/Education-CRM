const FS = require('../lib/fsDeal')
const {verifyUser} = require('../lib/jwt')
const tasks = new FS('../model/task.json')
const allTask = JSON.parse(tasks.read())

module.exports = {
    TEACHERPOST : (req, res) =>{
        const token = req.cookies.token
            const verifyToken = verifyUser(token);
            const {task, textarea,group} = req.body
            allTask.push({id:allTask.length + 1, name:task,izoh:textarea, group,teacher: verifyToken.name})
            tasks.write(allTask)
        res.redirect('/teacher')
    }
}