const FS = require('../lib/fsDeal')
const {verifyUser} = require('../lib/jwt')
const task = new FS('../model/task.json')
const allTask = JSON.parse(task.read())

module.exports = {
    STUDENTPOST : (req, res) =>{
        const token = req.cookies.token
            const verifyToken = verifyUser(token);
            const {task, textarea,group} = req.body
            allTask.push({id:allTask.length + 1, name:task,izoh:textarea, group,teacher: verifyToken.name})
            task.write(allTask)
        res.redirect('/teacher')
    }
}