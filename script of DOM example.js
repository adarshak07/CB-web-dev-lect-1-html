window.onload = function() {  //when window is loaded these js will be implemented , html and js is combined using DOM 
    let newtask = document.getElementById('newtask')  //newtask is the input 
    let addtask = document.getElementById('addtask')  //addtask is the button
    let todolist = document.getElementById('todolist') //list hai uska variable todolist hai 


addtask.onclick = function() {  //so when the addtask varibale is clciked we do these things to do list feel
    let li = document.createElement('li')  //li is the variable which will store 'li' feel


    //add the button to delete
     let xBtn = document.createElement('button')
     xBtn.innerText = '&'
     xBtn.onclick = function(event) {
        event.target.parentElement.remove() //when button is clicked there happens an event which remove its parentElement 
     }

     let upBtn = document.createElement('button')
     upBtn.innerText = 'U'
     upBtn.onclick = function (event) {

        event.target.parentElement.parentElement.insertBefore(event.target.parentElement,event.target.parentElementSibling)

     }
//Add the task text
let taskSpan = document.createElement('span')
taskSpan.innerText=newtask.value
     li.appendChild(xBtn)
     li.appendChild(upBtn)
     li.appendChild(taskSpan)
      todolist.appendChild(li) //todlist varaible me ham add kar diye li simple 

 

}

}