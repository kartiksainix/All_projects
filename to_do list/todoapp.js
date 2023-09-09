const item = document.querySelector("#item")
const todoBox = document.querySelector("#to-do-box")

item.addEventListener(
    "keyup",
    function(event){
        if(event.key == "Enter"){
            addTodo(this.value);
            this.value="";
        }
    }
)

const addTodo = (item) => {

    const itemList = document.createElement("li");
    itemList.innerHTML = `
        ${item}
        <i class="fa-regular fa-circle-xmark xm"></i>
    `;
    
    itemList.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
        }
    )
     
    itemList.querySelector("i").addEventListener(
        "click",
        function(){
            itemList.remove();
            save();
        }
    )

    // itemList.querySelector("i").addEventListener(
    //     "click",
    //     function() {
    //       if (this.parentElement.children.length === 1) {
    //         localStorage.remove("tasks");
    //       } else {
    //         this.parentElement.removeChild(this);
    //       }
    //       save();
    //     }
    //   );

    todoBox.appendChild(itemList);
    save();
}

const save = () => {
    // Get all the to-do items from the DOM
    const toDoItems = document.querySelectorAll("#to-do-box li");
    const data = [];
  
    toDoItems.forEach((listItem) => {
      data.push(listItem.textContent.trim());
    });
  
    window.localStorage.setItem("tasks", JSON.stringify(data));
    // if (data.length === 0) {
    //     window.localStorage.remove("tasks");
    // } else {
    //     window.localStorage.setItem("tasks", JSON.stringify(data));
    // }
};

(
    function() {
        const lstodo = JSON.parse(localStorage.getItem("tasks"));
        // if (lstodo === null) {
        //     addTodo()
        // } else {
            
        // }
        lstodo.forEach(
            (lsitem) => {
                addTodo(lsitem)
            }
        )
    }
)()

// const save = () => {
    //     const todoItems = document.querySelectorAll(".to-do-box li");
    //     const todoItems = Array.from(todoBox.querySelectorAll("li"));
//     console.log(todoItems[0].);
//     for (let i = 0; i < todoItems.length; i++) {
//         console.log(todoItems[i].textContent);
//     }
//     console.log(todoItems[0].textContent);
// }

// const save = () => {
//     const todoItems = Array.from(todoBox.querySelectorAll("li"));
//     // const todoItems = document.querySelectorAll(".to-do-box li");

//     // Get the text of the newly added list item
//     const newItemText = todoItems[todoItems.length - 1].textContent;

//     // Print the text of the newly added list item to the console
//     console.log(newItemText);
// };

// const localStorage = window.localStorage
// const save = () => {
//     // Get all the to-do items from the DOM
//     const toDoItems = Array.from(todoBox.querySelectorAll("li"));
//     const data = [];

//     toDoItems.forEach(
//         (listItem) => {
//             data.push(listItem.textContent);
//         }
//     )

//     if(data.length == 0){
//         window.localStorage.remove("tasks");
//     }
//     else{
//         window.localStorage.setItem("tasks",JSON.stringify(data))
//     }

//     // Convert the to-do items to a JSON string
//     // const toDoItemsJson = JSON.stringify(toDoItems);

//     // Save the to-do items to localStorage
//     // localStorage.setItem("toDoItems", toDoItemsJson);
// };



