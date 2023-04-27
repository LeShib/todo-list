// Variables
import { list, allTasks } from "./variables.js";

// Fonctions
import { createListItem } from "./create.js";

// Afficher toutes les tâches dans la liste
export function displayAllTasks(){
    // Vider le contenu du conteneur de liste
    list.innerHTML = "";
    allTasks.forEach(function(task) {
        let listItem = createListItem(task);
        list.appendChild(listItem);
    });
}

// Mettre à jour la liste des tâches dans le stockage local
export function updateTasks() {
    // Enregistrer les tâches dans le stockage local
    localStorage.setItem("LIST", JSON.stringify(allTasks));
    // Réafficher toutes les tâches
    displayAllTasks();
}