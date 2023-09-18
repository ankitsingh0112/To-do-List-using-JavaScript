// when clicked with mouse
document.querySelector("#submit").addEventListener("click", dosomething);
// when we hit enter button
document.querySelector("input").addEventListener("keyup", function(e) {
    // if enter button is pressed then dosomething will be called
    if(e.keyCode == 13){
        dosomething(); 
    }
})

// function to add tasks
function dosomething() {
    // checking whether any task is entered or not
    if (document.querySelector("input").value.length == 0) {
        alert("Please enter a task...");
    } 
    // adding the task to to-do list
    else {
        document.querySelector("#todo_list").innerHTML += `
            <div class = "todo">
                <span>${document.querySelector('input').value}</span>
                <div class = "btn">
                    <i class="fa-solid fa-square-check fa-lg done"></i>
                    <i class="fa-solid fa-trash fa-lg dlt"></i>
                </div>
            </div>
        `;
        // making the input box empty after adding the task
        document.querySelector("input").value = "";

        // for deleting the task
        let active_todo = document.querySelectorAll(".dlt");
        for (let i = 0; i < active_todo.length; i++) {
            active_todo[i].onclick = function () {
                this.parentNode.parentNode.remove();
            }
        }

        // for marking done to the task
        let done_todo = document.querySelectorAll(".done");
        for (let i = 0; i < done_todo.length; i++) {
            done_todo[i].onclick = function () {
                this.parentNode.parentNode.children[0].style.color = "gray";
                this.parentNode.parentNode.children[0].style.textDecoration = "line-through red";
            }
        }
    }
}