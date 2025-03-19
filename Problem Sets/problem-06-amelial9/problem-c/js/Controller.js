"use strict";

import * as model from "./Model.js";
import { renderTaskList } from "./View.js";

function markCompleteCallback(task) {
  model.markComplete(task.id);
  renderTaskView();
}

export function renderTaskView() {
    const taskRoot = document.getElementById("tasks-root");
    taskRoot.innerHTML = "";
    taskRoot.appendChild(renderTaskList(markCompleteCallback));
}

document.getElementById("add-task-button").addEventListener("click", () => {
    const taskInput = document.getElementById("task-input");
    const taskDescription = taskInput.value.trim();
  
    if (taskDescription) {
      model.addTask(taskDescription);
      taskInput.value = "";
      renderTaskView();
    }
});