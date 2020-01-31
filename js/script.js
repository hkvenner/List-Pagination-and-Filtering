/******************************************
List Filter and Pagination Project
******************************************/
   

// Global variables
const studentList = document.querySelectorAll(".student-list li");
const itemsPerPage = 10;


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
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
   Create the `appendPageLinks function` to generate, append, and add 
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
         showPage(studentList, e.target.textContent);
      })
   }
   
   /*
   <!-- pagination HTML to create dynamically -->
   <div class="pagination">
     <ul>
       <li>
         <a class="active" href="#">1</a>
       </li>
        <li>
         <a href="#">2</a>
       </li>
        <li>
         <a href="#">3</a>
       </li>
        <li>
         <a href="#">4</a>
       </li>
        <li>
         <a href="#">5</a>
       </li>
     </ul>
   </div>
   <!-- end pagination -->
   */
}
showPage(studentList, 1);
appendPageLinks(studentList);





// Remember to delete the comments that came with this file, and replace them with your own code comments.