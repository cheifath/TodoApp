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
    
})

// //line-through
// checkBoxes.forEach(checkbox => {
//     checkbox.addEventListener('change', ()=> { 
//         const label = document.querySelector(`label[for="${checkbox.id}"]`);
//         if (checkbox.checked) {
//             label.style.textDecoration = 'line-through';
//         } else {
//             label.style.textDecoration='none'; 
//         }
//     });
// });
