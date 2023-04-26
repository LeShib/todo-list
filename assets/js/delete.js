// Variables
import { allTasks } from "./variables.js";

// Fonctions
import { updateTasks } from "./display.js";

// Supprimer une Tâche
export function deleteTask(event){
    if (event.target.tagName === "BUTTON") {
        // display(event.target.classList[1]);
		event.target.parentNode.remove();
        // Récupérer l'id de la tâche supprimée à partir de sa classe CSS
        let deletedTaskId = parseInt(event.target.classList[1]);
        // Trouver l'index de la tâche à supprimer dans la liste de toutes les tâches
        let deletedTaskIndex = allTasks.findIndex(task => task.id === deletedTaskId);
        // Supprimer la tâche de la liste de toutes les tâches
        if (deletedTaskIndex !== -1) {
            allTasks.splice(deletedTaskIndex, 1);
        }
        updateTasks();
	}
}

// Supprimer toutes les tâches marquées comme complètes
export function deleteCompletedTasks(){
    // Sélectionner tous les éléments avec la classe "completed"
    var completedTasks = document.querySelectorAll(".completed");
    completedTasks.forEach(function(task) {
        // Supprimer la tâche de la liste (allTasks)
        let deletedTaskIndex = allTasks.findIndex(t => t.id === parseInt(task.id.split(" ")[1]));
        if (deletedTaskIndex !== -1) {
            allTasks.splice(deletedTaskIndex, 1);
        }
        // Enregistrer la liste de toutes les tâches dans le stockage local
        localStorage.setItem("LIST", JSON.stringify(allTasks));
        // Supprimer la tâche de l'affichage
        task.remove();
    });
}