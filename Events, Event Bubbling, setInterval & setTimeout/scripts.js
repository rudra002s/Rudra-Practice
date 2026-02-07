let button = document.getElementById("btn")

//LIST OF EVENTS
//https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// button.addEventListener("click",()=>{ //for single click
button.addEventListener("dblclick", () => {
    // alert("I was clicked")
    document.querySelector(".box").innerHTML = "<b> yesss you were clicked </b>" //when btn is pressed it changes the element inside box
})

button.addEventListener("contextmenu", () => {
    //it is used for right click
    alert("RIGHT CLICK")  
})

//KEYBOARD EVENTS

button.addEventListener("keydown", (e) => {
    // here e is used an event

    //in this whenever the cursor is at the button and a key is pressed its output can be seen 
    console.log(e)
    console.log(e.key) //here key will also be printed along with the output
})
