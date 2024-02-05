

const clock = document.querySelector("h1")


function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    // const seconds = String(date.getSeconds()).padStart(2, "0")
    clock.innerText = `${hours}:${minutes}`
    // clock.style.color = `red`
}

function clockStyle(){
    clock.style.color = `#f0f0f0`
    clock.style.fontSize = `80px`
    clock.style.letterSpacing = `20px`

}
setInterval(getClock, 1000)
clockStyle();