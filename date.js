const engMonths = [
    "Jan", "Feb", "Mar", "Apri", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec" 
]
const currentDate = document.querySelector("h2")


function makeDate (){
    const date = new Date();
    const year = date.getFullYear();
    const day = date.getDate();
    currentDate.innerHTML = `${day} ${engMonths[date.getMonth()]} ${year}`
}

function clockStyle(){
    currentDate.style.color = `#f0f0f0`
    currentDate.style.fontSize = `18px`
    currentDate.style.letterSpacing = `10px`
}


makeDate()
clockStyle()
