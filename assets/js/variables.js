// Variables
export const list = document.getElementById("list");
export const form = document.getElementById("form");
export const deleteBut = document.getElementById("delete-button");
// Pour conserver les éléments de la liste lorsque l'on rafraichit la page 
export let allTasks = JSON.parse(localStorage.getItem("LIST")) || []; 
// export let id = allTasks.length > 0 ? allTasks.reduce((maxId, task) => Math.max(maxId, task.id), 0) + 1 : 0;