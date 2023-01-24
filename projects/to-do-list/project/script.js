let count = 0;

function addTask() {
   let newTask = document.querySelector("#newTask");
   let lista = document.querySelector("#taskList");
   let hr = document.createElement("hr")
   hr.setAttribute("id", "hr"+count)
   lista.appendChild(liElement(newTask.value, count));
   lista.appendChild(hr)
   count++;
   newTask.value = "";
}

function clearTask() {
   let newTask = document.querySelector("#newTask");
   newTask.value = "";
}

function liElement(taskTXT, index) {
   let li = document.createElement("li");
   li.setAttribute("id", "task" + index);
   li.appendChild(spanTXT(taskTXT, index));
   li.appendChild(taskData(taskTXT, index))
   return li;
}

function taskData(taskTXT, index) {
   if(taskTXT.length > 1) {
      let div = document.createElement("div")
      div.setAttribute("id", "divTask"+index)
      div.textContent="Feito"
      div.appendChild(taskDoneCheck(index))
      div.appendChild(editButton(index));
      div.appendChild(deleteButton(index));
      let br = document.createElement("br");
      div.appendChild(br);

      div.appendChild(br)


      return div
   }
}

function spanTXT(taskTXT, index) {
   let span = document.createElement("span");
   let br = document.createElement("br");
   span.setAttribute("id", "spanTask" + index);
   span.textContent = taskTXT;
   span.appendChild(br);
   return span;
}

function taskDoneCheck(index) {
   let checkBox = document.createElement("input")
   checkBox.setAttribute("type", "checkbox")
   checkBox.setAttribute("id", "checkbox"+index)
   checkBox.setAttribute("onchange", "taskDone("+index+")")
   return checkBox
}

function taskDone (index) {
   let checkBox = document.querySelector("#checkbox"+index)
   let spanTask = document.querySelector("#spanTask"+index)
   let editButton = document.querySelector("#editField"+index)
   
   if(checkBox.checked == true){
      spanTask.style.color = "gray";
      spanTask.style.textDecoration = "line-through";
      editButton.disabled = true;
   } else {
      spanTask.style.color = "black"
      spanTask.style.textDecoration = "none";
      editButton.disabled = false;
   }
}

function deleteButton(index) {
   let dltBTN = document.createElement("button");
   dltBTN.setAttribute("id", "deleteTask" + index);
   dltBTN.setAttribute("onclick", "removeTask(" + index + ")");
   dltBTN.style.backgroundImage = "url('./media/exc.png')"
   dltBTN.style.width = "20px"
   dltBTN.style.height = "20px"
   dltBTN.style.border = "0px transparent"
   dltBTN.style.backgroundSize = "cover"
   return dltBTN;
}

function removeTask(index) {
   let lista = document.querySelector("#taskList");
   let taskToRemove = document.querySelector("#task" + index);
   let hr = document.querySelector("#hr" + index)
   console.log(taskToRemove);
   console.log(lista);
   lista.removeChild(taskToRemove);
   lista.removeChild(hr)
}

function clearTaskList() {
   let lista = document.querySelector("#taskList");
   lista.innerHTML = ""
}

function editButton(index) {
   let editBTN = document.createElement("button");
   editBTN.setAttribute("id", "editField" + index);
   editBTN.setAttribute("onclick", "changeTask(" + index + ")");
   editBTN.style.backgroundImage = "url('./media/edit.png')"
   editBTN.style.width = "20px"
   editBTN.style.height = "20px"
   editBTN.style.border = "0px transparent"
   editBTN.style.backgroundSize = "cover"
   
   return editBTN;
}

function changeTask(index) {
   let input = document.createElement("input");
   let liPai = document.querySelector("#spanTask" + index);
   input.setAttribute("id", "inputTask" + index);
   input.setAttribute("type", "text");
   if (liPai.childElementCount < 2) {
      liPai.appendChild(input);
      liPai.appendChild(buttonEditOK(index));
   }
}

function buttonEditOK(index) {
   let btnEditOK = document.createElement("button");
   btnEditOK.setAttribute("id", "editOK" + index);
   btnEditOK.setAttribute("onclick", "allOK(" + index + ")");
   btnEditOK.textContent = "OK";

   return btnEditOK;
}

function allOK(index) {
   let input = document.querySelector("#inputTask" + index);
   let taskOriginal = document.querySelector("#spanTask" + index);
   let btnOK = document.querySelector("#editOK" + index);
   taskOriginal.textContent = input.value;

   taskOriginal.removeChild(btnOK);
   taskOriginal.removeChild(input);
}



