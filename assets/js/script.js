// Variables
import * as variables from "./variables.js"

// Fonctions
import { displayAllTasks } from "./display.js";
import { addTask } from "./add.js";
import { deleteCompletedTasks } from "./delete.js";

// appels de fonctions
displayAllTasks();

// Evenements
variables.form.addEventListener("submit", addTask);
variables.deleteBut.addEventListener("click", deleteCompletedTasks);