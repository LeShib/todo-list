// Variables
import { allTasks } from "./variables.js";

// Fonctions
import { updateTasks } from "./display.js";

// Créer un élément de liste pour chaque tâche
export function createListItem(task) {
    let listItem = document.createElement("li");
    listItem.setAttribute("id", "task " + task.id);
    listItem.setAttribute("class", "task " + task.id);
    let span = document.createElement("span");
    let text = document.createTextNode(task.taskLabel);
    // Créer la checkbox pour marquer les tâches complétées
    let divCb = document.createElement("div");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("class", "cb " + task.id);
    if (task.completed) {
        checkbox.checked = true;
        listItem.classList.add("completed");
    }
    checkbox.addEventListener("click", function() {
        listItem.classList.toggle("completed");
        task.completed = !task.completed;
        updateTasks();
    });
    // Créer le bouton de suppression
    let divBut = document.createElement("div");
    let button = document.createElement("button");
    button.setAttribute("class", "but " + task.id);
    button.appendChild(document.createTextNode("Supprimer"));
    button.addEventListener("click", function() {
        listItem.remove();
        // Supprimer la tâche du tableau (allTasks)
        let deletedTaskIndex = allTasks.findIndex(t => t.id === task.id);
        if (deletedTaskIndex !== -1) {
            allTasks.splice(deletedTaskIndex, 1);
        }
        updateTasks();
    });
    span.appendChild(text);
    divCb.appendChild(checkbox)
    divBut.appendChild(button);
    listItem.appendChild(span);
    listItem.appendChild(divCb);
    listItem.appendChild(divBut);
    return listItem;
}