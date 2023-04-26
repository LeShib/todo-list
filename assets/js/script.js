// Variables
import * as variables from "./variables.js"

// Fonctions
import { displayAllTasks } from "./display.js";
import { addTask } from "./add.js";
import { deleteTask } from "./delete.js";
import { deleteCompletedTasks } from "./delete.js";

// appels de fonctions
displayAllTasks();

// Evenements
variables.form.addEventListener("submit", addTask);
variables.list.addEventListener("click", deleteTask);
variables.deleteBut.addEventListener("click", deleteCompletedTasks);