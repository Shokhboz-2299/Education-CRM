const express =require('express');
const router = express.Router()

const {LOGIN, ADMIN, TEACHER, STUDENT, LOGINPOST} = require('./authController')
const {ADMINPOST} = require('./adminController')
const {TEACHERPOST} = require('./teacherController')
const auth = require('../middlewares/auth')

router
.get('/',LOGIN)
.post('/',auth, LOGINPOST)
.get('/admin',ADMIN)
.post('/admin',ADMINPOST)
.get('/teacher',TEACHER)
.post('/teacher',TEACHERPOST)
.get('/student',STUDENT)



module.exports = router;