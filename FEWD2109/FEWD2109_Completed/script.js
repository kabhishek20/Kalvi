window.addEventListener("load", () => {
  const text = document.querySelector("#input-form-text");
  const form = document.querySelector("form");
  const container = document.querySelector(".container");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let task = text.value;
    // Iteration 1 : Store each words in the task string in an array named words
    let words=task.split(" ");
    let temp=0;
    // Iteration 2 : Iterate through every word in words array and update the value of temp to 1 if any word is 'and'
    for(let i=0;i<words.length;i++){
        if(words[i]=="and"){
            temp=1;
        }
      }
    // Iteration 3 : Check if the task entered is empty or not. If empty display an alert message asking the user to input some task
    if (text.value.length == 0) {
      alert("Enter the task first");
    } 
    else if(temp==1){
        alert("Enter two tasks differently for clear approach.")
    }
    else {
    // Iteration 4 : Change the first letter of the entered task to capital always  
      task = task.charAt(0).toUpperCase() + task.slice(1);
    // Iteration 5 : If the task is too long make the task smaller by considering only the first 20 characters and adding ... at the end
    if(task.length>20){
        task=task.slice(0,20)+"...";
    }
      const tasks = document.createElement("div");
      tasks.classList.add("task");
      container.appendChild(tasks);

      const content = document.createElement("div");
      content.classList.add("content");
      tasks.appendChild(content);

      const input_text = document.createElement("input");
      input_text.classList.add("input-text");
      input_text.type = "text";
      input_text.value = task;
      input_text.setAttribute("readonly", true);
      content.appendChild(input_text);

      const btn = document.createElement("div");
      btn.classList.add("btn");
      tasks.appendChild(btn);

      const clear = document.createElement("button");
      clear.setAttribute("id", "done");
      clear.innerHTML = `<i class="fa-solid fa-check"></i>`;

      const edit = document.createElement("button");
      edit.setAttribute("id", "edit");
      edit.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;

      const del = document.createElement("button");
      del.setAttribute("id", "del");
      del.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

      btn.appendChild(clear);
      btn.appendChild(edit);
      btn.appendChild(del);

      clear.addEventListener("click", () => {
        if (input_text.style.textDecoration == "none") {
          input_text.style.textDecoration = "line-through";
          tasks.style.backgroundColor = "#938f8f";
        } else {
          input_text.style.textDecoration = "none";
          tasks.style.backgroundColor = "#fff";
        }
      });

      edit.addEventListener("click", () => {
        if (
          input_text.style.color == "black" &&
          input_text.style.textDecoration == "none"
        ) {
          input_text.removeAttribute("readonly");
          input_text.style.color = "red";
          input_text.focus();
        } else {
          input_text.setAttribute("readonly", true);
          input_text.style.color = "black";
        }
      });
      del.addEventListener("click", () => {
        container.removeChild(tasks);
      });
      text.value = "";
    }
  });
});
