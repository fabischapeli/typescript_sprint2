/// <reference path = "to-do-classes-interfaces.ts"/>
/// <reference path = "to-do-people.ts"/>
var people = ToDoList.people;
var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the dishes.", "high"));
tasks.push(new ToDoList.HomeTask("Buy chocolate.", "low", people.diane));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", "high"));
tasks.push(new ToDoList.HobbyTask("Practice origami."));
tasks.push(new ToDoList.HobbyTask("Bake a pie."));
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);
tasks.push(new ToDoList.WorkTask(today, "Update blog.", "high", people.diane));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "medium", people.thor));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", "low", people.loki));
console.log(tasks);
