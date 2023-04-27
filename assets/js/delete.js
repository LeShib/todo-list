// Variables
import { allTasks } from "./variables.js";

// Fonctions
// Supprimer toutes les tâches marquées comme complètes
export function deleteCompletedTasks(){
    // Sélectionner tous les éléments avec la classe "completed"
    var completedTasks = document.querySelectorAll(".completed");
    completedTasks.forEach(function(task) {
        // Supprimer la tâche du tableau (allTasks)
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