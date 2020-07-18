const first name = document.getElementById('first name')
const last name = document.getElementById('last name')
const date of birth = document.getElementById('date of birth')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
form.addEventListener('submit',(e)=>){
let messages = []
if (name.value === '' || name.value == null){
messages.push('name is required')
}
if(password.length<=6){
messages.push('Password must be longer than 6 characters')
}
if(messsages.length>0){
e.preventDefault()
eerrorElement.innerText=messages.join(', ')
}
}}