// Variables
import { list, allTasks } from "./variables.js";
let id = allTasks.length > 0 ? allTasks.reduce((maxId, task) => Math.max(maxId, task.id), 0) + 1 : 0;

// Fonctions
import { createListItem } from "./create.js";
import { updateTasks } from "./display.js";

// Ajouter une nouvelle tâche à la liste
export function addTask(event){
    // Empêcher le comportement par défaut du formulaire (recharger la page)
    event.preventDefault();
    let input = document.getElementById("input").value;
    if(input.trim() === "") {
        alert("Veuillez saisir une tâche");
        return;
    }
    let newTask = {id: id, taskLabel: input};
    allTasks.push(newTask);
    id++;
    let listItem = createListItem(newTask);
    list.appendChild(listItem);
    // Effacer le champ de saisie de texte
    document.getElementById("input").value = "";
    updateTasks();
}