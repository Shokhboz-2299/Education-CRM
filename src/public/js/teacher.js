


// HTML DOM 

let Group = document.querySelector('.group-btn')
let Task = document.querySelector('.work-btn')
let Teacher = document.querySelector('.teacher-btn')
let group = document.querySelector('.table-group')
let student = document.querySelector('.table-student')
let work = document.querySelector('.table-homework')

//   Events

Teacher.addEventListener('click', function (){

    student.classList.add('show')
    group.classList.remove('show')
    work.classList.remove('show')

})
Group.addEventListener('click', function (){

    student.classList.remove('show')
    work.classList.remove('show')
    group.classList.add('show')

})
Task.addEventListener('click', function (){
    student.classList.remove('show')
    group.classList.remove('show')
    work.classList.add('show')

})
