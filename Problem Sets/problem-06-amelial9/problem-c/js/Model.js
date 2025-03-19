'use strict';

import tasks from "./task-data.js";

let currentTaskList = tasks.map((task, index) => ({ 
    ...task,
    id: index + 1
}));

export function getIncompleteTasks() {
    return currentTaskList.filter(task => task.status === "incomplete");
}

export function addTask (description) {
    const newTask = {
        id: currentTaskList.length > 0 ? currentTaskList[currentTaskList.length - 1].id + 1 : 1,
        description,
        status: "incomplete"
    };
    
    currentTaskList = [...currentTaskList, newTask];
}

export function markComplete(taskId) {
    currentTaskList = currentTaskList.map(task =>
        task.id === taskId ? { ...task, status: "complete" } : { ...task }
    );
}