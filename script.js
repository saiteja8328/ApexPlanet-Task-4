// Contact Form (optional future enhancement)
console.log("Welcome to Sai Teja's Portfolio!");

// ------------------ TO-DO LIST ------------------
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, i) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.onclick = () => removeTask(i);
    taskList.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (!task) return;
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  loadTasks();
}

function removeTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

// ------------------ PRODUCTS ------------------
const products = [
  { name: "Laptop", category: "electronics", price: 800 },
  { name: "T-shirt", category: "clothing", price: 20 },
  { name: "Phone", category: "electronics", price: 500 },
  { name: "Jeans", category: "clothing", price: 40 }
];

function displayProducts(list) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.textContent = `${p.name} - ₹${p.price}`;
    container.appendChild(div);
  });
}

function filterProducts() {
  const category = document.getElementById("filter").value;
  const filtered = category === "all" ? products : products.filter(p => p.category === category);
  sortAndDisplay(filtered);
}

function sortProducts() {
  filterProducts();
}

function sortAndDisplay(filtered) {
  const sortType = document.getElementById("sort").value;
  const sorted = [...filtered];
  sorted.sort((a, b) => sortType === "asc" ? a.price - b.price : b.price - a.price);
  displayProducts(sorted);
}

window.onload = () => {
  loadTasks();
  displayProducts(products);
};
