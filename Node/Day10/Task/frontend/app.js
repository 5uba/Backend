// ── Config ────────────────────────────────────────────────────────────────────
const API_URL = "http://localhost:5000/tasks";

// ── State ─────────────────────────────────────────────────────────────────────
let editingTaskId = null;

// ── DOM References ────────────────────────────────────────────────────────────
const taskForm      = document.getElementById("task-form");
const titleInput    = document.getElementById("title");
const descInput     = document.getElementById("description");
const submitBtn     = document.getElementById("submit-btn");
const cancelBtn     = document.getElementById("cancel-btn");
const formTitle     = document.getElementById("form-title");
const taskList      = document.getElementById("task-list");
const loadingEl     = document.getElementById("loading");
const emptyStateEl  = document.getElementById("empty-state");
const totalCount    = document.getElementById("total-count");
const completedCount= document.getElementById("completed-count");
const pendingCount  = document.getElementById("pending-count");
const toastEl       = document.getElementById("toast");

// ── Toast Helper ──────────────────────────────────────────────────────────────
function showToast(message, type = "success") {
  toastEl.textContent = message;
  toastEl.className = `toast ${type}`;
  setTimeout(() => toastEl.classList.add("hidden"), 3000);
}

// ── Date Formatter ────────────────────────────────────────────────────────────
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleString("en-IN", {
    day: "2-digit", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}

// ── Stats Updater ─────────────────────────────────────────────────────────────
function updateStats(tasks) {
  const total     = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending   = total - completed;
  totalCount.textContent     = `Total: ${total}`;
  completedCount.textContent = `Completed: ${completed}`;
  pendingCount.textContent   = `Pending: ${pending}`;
}

// ── Render Tasks ──────────────────────────────────────────────────────────────
function renderTasks(tasks) {
  taskList.innerHTML = "";
  updateStats(tasks);

  if (tasks.length === 0) {
    emptyStateEl.classList.remove("hidden");
    return;
  }

  emptyStateEl.classList.add("hidden");

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = `task-item ${task.completed ? "completed" : ""}`;
    li.dataset.id = task._id;

    li.innerHTML = `
      <input
        type="checkbox"
        class="task-checkbox"
        ${task.completed ? "checked" : ""}
        title="Toggle complete"
      />
      <div class="task-content">
        <div class="task-title">${escapeHtml(task.title)}</div>
        ${task.description ? `<div class="task-description">${escapeHtml(task.description)}</div>` : ""}
        <div class="task-meta">🕒 ${formatDate(task.createdAt)}</div>
      </div>
      <div class="task-actions">
        <button class="btn-edit"  title="Edit task">✏️ Edit</button>
        <button class="btn-delete" title="Delete task">🗑️ Delete</button>
      </div>
    `;

    // Toggle completed
    li.querySelector(".task-checkbox").addEventListener("change", () =>
      toggleComplete(task._id, task.completed, task.title, task.description)
    );

    // Edit
    li.querySelector(".btn-edit").addEventListener("click", () =>
      startEdit(task)
    );

    // Delete
    li.querySelector(".btn-delete").addEventListener("click", () =>
      deleteTask(task._id)
    );

    taskList.appendChild(li);
  });
}

// XSS prevention helper
function escapeHtml(text) {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(text));
  return div.innerHTML;
}

// ── CRUD Operations ───────────────────────────────────────────────────────────

// ── READ: Fetch all tasks ─────────────────────────────────────────────────────
async function fetchTasks() {
  loadingEl.classList.remove("hidden");
  taskList.innerHTML = "";
  emptyStateEl.classList.add("hidden");

  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch tasks");
    const tasks = await res.json();
    renderTasks(tasks);
  } catch (err) {
    showToast("❌ Could not load tasks. Is the server running?", "error");
    console.error(err);
  } finally {
    loadingEl.classList.add("hidden");
  }
}

// ── CREATE: Add new task ──────────────────────────────────────────────────────
async function createTask(title, description) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Failed to create task");
  }

  return res.json();
}

// ── UPDATE: Update a task ─────────────────────────────────────────────────────
async function updateTask(id, data) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Failed to update task");
  }

  return res.json();
}

// ── DELETE: Delete a task ─────────────────────────────────────────────────────
async function deleteTask(id) {
  if (!confirm("Are you sure you want to delete this task?")) return;

  try {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Failed to delete task");
    showToast("🗑️ Task deleted successfully");
    fetchTasks();
  } catch (err) {
    showToast("❌ " + err.message, "error");
  }
}

// ── Toggle completed status ───────────────────────────────────────────────────
async function toggleComplete(id, currentStatus, title, description) {
  try {
    await updateTask(id, { title, description, completed: !currentStatus });
    showToast(currentStatus ? "🔄 Marked as pending" : "✅ Marked as completed");
    fetchTasks();
  } catch (err) {
    showToast("❌ " + err.message, "error");
  }
}

// ── Enter Edit Mode ───────────────────────────────────────────────────────────
function startEdit(task) {
  editingTaskId   = task._id;
  titleInput.value = task.title;
  descInput.value  = task.description || "";
  formTitle.textContent  = "✏️ Edit Task";
  submitBtn.textContent  = "Update Task";
  cancelBtn.classList.remove("hidden");
  titleInput.focus();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ── Cancel Edit ───────────────────────────────────────────────────────────────
function cancelEdit() {
  editingTaskId   = null;
  taskForm.reset();
  formTitle.textContent  = "➕ Add New Task";
  submitBtn.textContent  = "Add Task";
  cancelBtn.classList.add("hidden");
}

// ── Form Submit ───────────────────────────────────────────────────────────────
taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title       = titleInput.value.trim();
  const description = descInput.value.trim();

  if (!title) {
    showToast("⚠️ Title is required", "error");
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = editingTaskId ? "Updating..." : "Adding...";

  try {
    if (editingTaskId) {
      await updateTask(editingTaskId, { title, description });
      showToast("✅ Task updated successfully");
      cancelEdit();
    } else {
      await createTask(title, description);
      showToast("✅ Task added successfully");
      taskForm.reset();
    }
    fetchTasks();
  } catch (err) {
    showToast("❌ " + err.message, "error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = editingTaskId ? "Update Task" : "Add Task";
  }
});

cancelBtn.addEventListener("click", cancelEdit);

// ── Init ──────────────────────────────────────────────────────────────────────
fetchTasks();
