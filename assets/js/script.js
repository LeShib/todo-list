// Variables
const listContainer = document.getElementById("list-container");
const list = document.getElementById("list");
const form = document.getElementById("form");
const deleteBut = document.getElementById("delete-button");
// Pour conserver les éléments de la liste lorsque l'on rafraichit la page 
let allTasks = JSON.parse(localStorage.getItem("LIST")) || []; 
let id = allTasks.length > 0 ? allTasks.reduce((maxId, task) => Math.max(maxId, task.id), 0) + 1 : 0;


// Fonctions
// Créer un élément de liste pour chaque tâche
function createListItem(task) {
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
  
// Fonction pour afficher toutes les tâches dans la liste
function displayAllTasks(){
    // Vider le contenu du conteneur de liste
    list.innerHTML = "";
    allTasks.forEach(function(task) {
        let listItem = createListItem(task);
        list.appendChild(listItem);
    });
}

// Mettre à jour la liste des tâches dans le stockage local
function updateTasks() {
    // Enregistrer toutes les tâches dans le stockage local
    localStorage.setItem("LIST", JSON.stringify(allTasks));
    // Réafficher toutes les tâches
    displayAllTasks();
}
  
// Ajouter une nouvelle tâche à la liste
function addTask(event){
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

function deleteTask(event){
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

function deleteCompletedTasks(){
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

// appels de fonctions
displayAllTasks();

// Evenements
form.addEventListener("submit", addTask);
list.addEventListener("click", deleteTask);
deleteBut.addEventListener("click", deleteCompletedTasks);