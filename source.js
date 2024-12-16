checkBoxes=document.querySelectorAll(".checkboxes");
texts=document.querySelectorAll(".texts");

body=document.querySelector("body");
searchBar=document.querySelector(".search-bar");
allSelect=document.querySelector(".all-select");
icon=document.querySelector(".icon-2");
let isLight=true;



icon.addEventListener('click',()=>{
    if(isLight==true){
        body.style.backgroundColor="#313D5A";
        body.style.color="#FFF2F1";
        searchBar.style.backgroundColor="#313D5A";
        allSelect.style.color="#313D5A";
        icon.style.color="#313D5A";
        texts.forEach(text => {
            text.style.color="#66717E";
        });
        isLight=false;
    }else if(isLight==false){
        body.style.backgroundColor="#FFF2F1";
        searchBar.style.backgroundColor="#FFF2F1";
        allSelect.style.color="#FFF2F1";
        icon.style.color="#FFF2F1";
        isLight=true;
    }
    
});

const bar = document.querySelector(".search-bar");
const item = document.querySelector(".items");

function addTask() {
    if(bar.value===""){
        alert("Please enter the text");
    } else{
        // item.value=bar.value;
        let li = document.createElement("li"); //creating a new element dynamically
        li.innerHTML = bar.value; //assigning the value of the input tag to the new element
        item.appendChild(li); //adding the new element to a particular location

        let span = document.createElement("span");
        span.innerHTML= "&#10006";
        li.appendChild(span);
    }
    saveTask();
    //by calling this function the data is stored inside local os
    bar.value=""; // setting the  input box value to null after the entry
}

function saveTask(){ //saving the entered text into local storage
    localStorage.setItem("data",item.innerHTML);
    //localStorage is the keyword associated with storing on local os
    //setItem is also a keyword used to store or it put the data to local os
    //"data" is the keyword like an id which is unique
    //item.innerHTML is the element which is to be stored
}

function showtask(){ //show the saved data even if we refresh the website
    item.innerHTML = localStorage.getItem("data");
    //getItem is a keyword used to fetch the data we stored earlier without this the data is only stored cannot be seen
}
showtask();
//by callling the this function which is defned to fetch the data stored in local system it has to be called outside of the functions

item.addEventListener("click", function(e) { //adding event listener to the lists on click then creating a function with object

    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        //target is used to access the specified elements
        //classList is a class which is styled in css
        //toggle is used to toggle on and off the style sheet in this case
        saveTask();
        //saving the changes made
    } else if(e.target.tagName==="SPAN"){
        e.target.classList.remove();
    }

})