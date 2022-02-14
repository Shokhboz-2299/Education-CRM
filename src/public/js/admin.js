

// html DOM 

let newCourseDom = document.querySelector('.course')
let newStudentDom = document.querySelector('.student')
let newGroupDom = document.querySelector('.group')
let newTeacherDom = document.querySelector('.teacher')
let addEvent = document.querySelector('.addEvent')
let tableCours = document.querySelector('.table-cours')
let tableStudent = document.querySelector('.table-student')
let tableTeacher = document.querySelector('.table-teacher')
let tableGroup = document.querySelector('.table-group')


newTeacherDom.addEventListener('click', function () {
    addEvent.setAttribute('data-bs-target', '#teacher')
    addEvent.setAttribute('aria-controls', 'teacher')
    addEvent.textContent = "Add teacher";
 

    tableTeacher.classList.add('show')
    tableStudent.classList.remove('show')
    tableGroup.classList.remove('show')
    tableCours.classList.remove('show')
})
newStudentDom.addEventListener('click', function () {
    addEvent.setAttribute('data-bs-target', '#student')
    addEvent.setAttribute('aria-controls', 'student')
    addEvent.textContent = "Add student";

    tableTeacher.classList.remove('show')
    tableStudent.classList.add('show')
    tableGroup.classList.remove('show')
    tableCours.classList.remove('show')
})
newCourseDom.addEventListener('click', function () {
    addEvent.setAttribute('data-bs-target', '#course')
    addEvent.setAttribute('aria-controls', 'course')


    addEvent.textContent = "Add course ";
    tableTeacher.classList.remove('show')
    tableStudent.classList.remove('show')
    tableGroup.classList.remove('show')
    tableCours.classList.add('show')
})
newGroupDom.addEventListener('click', function () {
    addEvent.setAttribute('data-bs-target', '#group')
    addEvent.setAttribute('aria-controls', 'group')
    addEvent.textContent = "Add group ";

    tableTeacher.classList.remove('show')
    tableStudent.classList.remove('show')
    tableGroup.classList.add('show')
    tableCours.classList.remove('show')
})
