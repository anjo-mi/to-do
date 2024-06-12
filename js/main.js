document.getElementById('add').addEventListener('click', addItem)

document.getElementById('clear').addEventListener('click', clearDone)

let tasks = 0

let list = document.getElementById('list')

function startTimer(date, timer){
    let countdown = setInterval(() =>{
        let time = date - Date.now()
        let days = Math.floor((time / (1000*60*60*24)))
        let hours = Math.floor(time % (1000*60*60*24) / (1000*60*60))
        let minutes = Math.floor(time % (1000*60*60) / (1000*60))
        let seconds = Math.floor(time % (1000*60) / 1000)
        timer.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`
        if (days > 0){
            timer.parentElement.style.color = 'black'
        }else if(0 < hours && hours < 24){
            timer.parentElement.style.color = 'orange'
        }else if(0 < minutes && minutes < 60){
            timer.parentElement.style.color = 'red'
        }else if(days === 0 && hours === 0 && minutes === 0 && seconds === 0){
            clearInterval(countdown)
        }
    },1000)

}

function addItem(){
    let addedItem = '  ' + document.getElementById('task').value
    let doneBy = +new Date(document.querySelector('input[type = "datetime-local"]').value)
    if (addedItem.trim()){
        tasks++
        let li = document.createElement('li')
        let input = document.createElement('input')
        let chore = document.createElement('span')
        li.setAttribute('class', 'listItem')
        input.setAttribute('type', 'checkbox')
        chore.setAttribute('class', 'chore')
        chore.innerText = addedItem
        li.appendChild(input)
        li.appendChild(chore)
        list.appendChild(li)
        if(tasks > 0) {
            document.querySelector('.didIt').style.display = 'block'
        }
        if(doneBy){
            let timer = document.createElement('span')
            timer.setAttribute('class', '.timer')
            li.appendChild(timer)
            startTimer(doneBy, timer)
        }
    }
    document.getElementById('task').value = ''
}

function clearDone(){
    let checks = document.querySelectorAll('input[type = "checkbox"]')
    checks.forEach(item => {
        if (item.checked === true){
            item.parentElement.remove()
            tasks--
        }
    if (tasks === 0){
        document.querySelector('.didIt').style.display = 'none'
    }
    })
    
    console.log(checks)
}
