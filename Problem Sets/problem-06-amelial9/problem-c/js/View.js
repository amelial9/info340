'use strict';

import { getIncompleteTasks } from "./Model.js";

function renderSingleTask(task, callback) {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.textContent = " " + task.description;
  
    const button = document.createElement("button");
    button.classList.add("btn", "btn-sm", "btn-warning");
    button.innerHTML = '<span class="material-icons-outlined">done</span>';

    button.addEventListener("click", () => {
      if (callback) {
        callback(task);
      }
    });
  
    listItem.prepend(button);
  
    return listItem;
}

export function renderTaskList(callback) {
    const tasks = getIncompleteTasks();
  
    if (tasks.length === 0) {
      const messageDiv = document.createElement("div");
      messageDiv.textContent = "None!";
      return messageDiv;
    }
  
    const list = document.createElement("ul");
    list.classList.add("list-group", "list-group-flush");
  
    tasks.forEach(task => {
      list.appendChild(renderSingleTask(task, callback));
    });
  
    return list;
}
