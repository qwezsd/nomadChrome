const loginForm = document.querySelector("#logIn")
const loginInput = document.querySelector("#logIn input")
const loginBtn = document.querySelector("button")

const summitName = document.querySelector("span")


function loginSubmit(event){
    event.preventDefault();
    loginForm.classList.add('hidden')
    const userName = loginInput.value;
    localStorage.setItem("userName", userName)
    writeName(userName)
}

function writeName(userName){
    summitName.innerText = `Hello, ${userName}`
    summitName.classList.remove('hidden')
}

const saveName = localStorage.getItem('userName')

if(saveName === null){
    loginForm.classList.remove('hidden')
    summitName.classList.add('hidden')
    loginForm.addEventListener("submit", loginSubmit)
}
else {
    writeName(saveName)
    loginForm.classList.add('hidden')
    summitName.classList.remove('hidden')
}

