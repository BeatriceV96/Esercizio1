const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("listContainer");

function addTask() {
    if (inputBox.value === "") {
        alert("Scrivi qualcosa!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
    }
    inputBox.value="";
}

var removeTaskButton1 = document.getElementById("removeTask1");
removeTaskButton1.addEventListener("click", function() {
    var listContainer = document.getElementById("listContainer");
    listContainer.innerHTML = "";
});