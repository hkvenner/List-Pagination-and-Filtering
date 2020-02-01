/******************************************
List Filter and Pagination Project
******************************************/
   

// Global variables
const studentList = document.querySelectorAll(".student-list li");
const itemsPerPage = 10;


/*** 
   showPage function :hides all of the items in the 
   list except for the ten to show.

***/

function showPage(list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;

   //set the display for all of the unwanted list items to none
   for (let i = 0; i < list.length; i ++){
         list[i].style.display = "none";
   }
   
   //display only the list items you want to see
   for (let i = 0; i < list.length; i ++){
      if ( i >= startIndex && i < endIndex){
         list[i].style.display = "block";
      }
   }
}

/*** 
   appendPageLinks function:  generates, appends, and adds 
   functionality to the pagination buttons.
***/
function appendPageLinks(list){
   const div = document.createElement("div");
   div.className = "pagination";
   //the div with the class name "page"
   const pageDiv  = document.querySelector(".page");
   pageDiv.appendChild(div);
   
   const ul = document.createElement("ul");
   div.appendChild(ul);
   
   let numPages = Math.ceil(list.length / itemsPerPage);
   
   for (let i = 1; i <= numPages ; i++){
      const li = document.createElement("li");
      if (i === 1){
         li.innerHTML = "<a href = '#' class = 'active'>" + i + "</a>";
      } else {
         li.innerHTML = "<a href = '#'>" + i + "</a>";
      }
      
      ul.appendChild(li);
   }
   const a = document.querySelectorAll(".pagination a");

   for (let i = 0; i < a.length; i ++){
      a[i].addEventListener("click", (e) => {
         for (let i = 0; i < a.length; i ++){
            a[i].className = '';
         }
         e.target.className = 'active';
         showPage(list, e.target.textContent);
      })
   }
   
   
}
showPage(studentList, 1);
appendPageLinks(studentList);

/****
 * Added a search component
 ***/

const div = document.createElement("div");
div.className = "student-search";

const divPageHeader = document.querySelector(".page-header");
divPageHeader.appendChild(div);

//create input field and place it on page
const input = document.createElement("input");
input.placeholder = "Search for students";
div.appendChild(input);

//create button and put it on page
const button = document.createElement("button");
button.textContent = "Search";
div.appendChild(button);

//function that displays list items where h3 includes input string
function displayListItems(){
   const arr = [];
   const page = document.querySelector(".page");
   
    if (document.querySelector(".page h4")!== null){
      const h4 = document.querySelector(".page h4");
      console.log(h4.parentNode);
      page.removeChild(h4);
   }
   for (let i = 0; i < studentList.length; i++){
      const h3 = studentList[i].querySelector("h3");
      // if (h3.textContent.includes(input.value)){
      //    studentList[i].style.display = "block";
      // } else {
      //    studentList[i].style.display = "none";
      // }
      studentList[i].style.display = "none";

      if (h3.innerText.includes(input.value)){
         arr.push(studentList[i]);
      } 
   }
   showPage(arr,1);
   
   const div = document.querySelector(".pagination");
   const h4 = document.createElement("h4");
   if (arr.length === 0 ){      
      h4.textContent = "There are no matches";
      page.appendChild(h4);
   } 
   page.removeChild(div);
   appendPageLinks(arr);
}
//Added functionality to the search component
button.addEventListener('click', (e) =>{
   e.preventDefault();
   displayListItems();
});

input.addEventListener("keyup", ()=>{
   displayListItems();
});