const endDate = "15 September 2023 10:00 AM";
document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input")

const clock = () => {
    const end = new Date(endDate)
    const now = new Date()
    const diff = Math.floor((end-now)/1000)

    if(diff < 0) return
    
    inputs[0].value = Math.floor(diff/3600/24) // calculating days
    inputs[1].value = Math.floor((diff/3600)%24) // calculating hours
    inputs[2].value = Math.floor((diff/60)%60) // calculating minutes
    inputs[3].value = Math.floor(diff%60) // calculating seconds
}

clock()

setInterval(
    () => {
        clock()
    },
    1000
)