import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../../../../app/config/axiosInstance";

const TASK_API = "/tasks"; // replace with your actual endpoint

const MyTask = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
    dueDate: "",
  });

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(TASK_API);
      setTasks(response.data.tasks || response.data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!newTask.title.trim()) return;

    try {
      const response = await axiosInstance.post(TASK_API, newTask);
      const createdTask = response.data.task || response.data;

      setTasks((prev) => [createdTask, ...prev]);
      setNewTask({
        title: "",
        description: "",
        priority: "Medium",
        dueDate: "",
      });
    } catch (error) {
      console.error("Failed to add task:", error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axiosInstance.delete(`${TASK_API}/${taskId}`);
      setTasks((prev) =>
        prev.filter((task) => (task._id || task.id) !== taskId)
      );
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  const filteredTasks = tasks.filter((task) =>
    task.title?.toLowerCase().includes(search.toLowerCase())
  );

  const completed = tasks.filter((task) => task.status === "Completed").length;
  const pending = tasks.filter(
    (task) => !task.status || task.status === "Pending"
  ).length;
  const inProgress = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const stats = [
    { label: "Total Tasks", value: tasks.length, accent: "var(--color-primary)" },
    { label: "Pending", value: pending, accent: "var(--color-tertiary)" },
    { label: "In Progress", value: inProgress, accent: "var(--color-secondary)" },
    { label: "Completed", value: completed, accent: "#8bd5a8" },
  ];

  const statusClass = (status) => {
    if (status === "Completed") {
      return "bg-[#20392e] text-[#8bd5a8]";
    }
    if (status === "In Progress") {
      return "bg-[#30294a] text-[var(--color-primary)]";
    }
    return "bg-[#3d3320] text-[var(--color-tertiary)]";
  };

  const priorityClass = (priority) => {
    if (priority === "High") return "text-[var(--color-error)]";
    if (priority === "Low") return "text-[#8bd5a8]";
    return "text-[var(--color-tertiary)]";
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] p-4 text-[var(--color-on-surface)] sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-[var(--color-primary)]">
              Employee Workspace
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight">
              My Tasks
            </h1>
            <p className="mt-2 text-sm text-[var(--color-on-surface-variant)]">
              Manage your assigned work and track your progress.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--color-outline-variant)] bg-[var(--color-surface-container)] p-4">
            <p className="text-sm text-[var(--color-on-surface-variant)]">
              Completion
            </p>
            <p className="mt-1 text-2xl font-bold text-[var(--color-primary)]">
              {tasks.length
                ? Math.round((completed / tasks.length) * 100)
                : 0}
              %
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-low)] p-5"
            >
              <p className="text-sm text-[var(--color-on-surface-variant)]">
                {stat.label}
              </p>
              <p
                className="mt-2 text-3xl font-bold"
                style={{ color: stat.accent }}
              >
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Add Task */}
        <form
          onSubmit={handleAddTask}
          className="mb-6 rounded-2xl border border-[var(--color-outline-variant)] bg-[var(--color-surface-container)] p-5"
        >
          <h2 className="mb-4 text-lg font-semibold">Add a Task</h2>

          <div className="grid gap-3 md:grid-cols-2">
            <input
              type="text"
              placeholder="Task title"
              value={newTask.title}
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
              required
              className="rounded-xl border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-lowest)] px-3 py-2.5 text-sm outline-none placeholder:text-[var(--color-on-surface-variant)] focus:border-[var(--color-primary)]"
            />

            <input
              type="text"
              placeholder="Description"
              value={newTask.description}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
              className="rounded-xl border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-lowest)] px-3 py-2.5 text-sm outline-none placeholder:text-[var(--color-on-surface-variant)] focus:border-[var(--color-primary)]"
            />

            <select
              value={newTask.priority}
              onChange={(e) =>
                setNewTask({ ...newTask, priority: e.target.value })
              }
              className="rounded-xl border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-lowest)] px-3 py-2.5 text-sm outline-none focus:border-[var(--color-primary)]"
            >
              <option value="Low">Low Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="High">High Priority</option>
            </select>

            <input
              type="date"
              value={newTask.dueDate}
              onChange={(e) =>
                setNewTask({ ...newTask, dueDate: e.target.value })
              }
              className="rounded-xl border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-lowest)] px-3 py-2.5 text-sm outline-none focus:border-[var(--color-primary)]"
            />
          </div>

          <button
            type="submit"
            className="mt-4 rounded-xl bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--color-on-primary)] transition hover:opacity-90"
          >
            + Add Task
          </button>
        </form>

        {/* Task List */}
        <div className="overflow-hidden rounded-2xl border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-low)]">
          <div className="flex flex-col gap-3 border-b border-[var(--color-outline-variant)] p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold">Assigned Tasks</h2>
              <p className="mt-1 text-sm text-[var(--color-on-surface-variant)]">
                {filteredTasks.length} task(s)
              </p>
            </div>

            <input
              type="text"
              placeholder="Search tasks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-xl border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-lowest)] px-3 py-2.5 text-sm outline-none placeholder:text-[var(--color-on-surface-variant)] focus:border-[var(--color-primary)] sm:w-64"
            />
          </div>

          {loading ? (
            <p className="p-10 text-center text-[var(--color-on-surface-variant)]">
              Loading tasks...
            </p>
          ) : filteredTasks.length === 0 ? (
            <p className="p-10 text-center text-[var(--color-on-surface-variant)]">
              No tasks found.
            </p>
          ) : (
            <div className="divide-y divide-[var(--color-outline-variant)]">
              {filteredTasks.map((task) => {
                const taskId = task._id || task.id;

                return (
                  <div
                    key={taskId}
                    className="flex flex-col gap-4 p-5 transition hover:bg-[var(--color-surface-container)] sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="min-w-0">
                      <h3 className="font-semibold">{task.title}</h3>
                      <p className="mt-1 text-sm text-[var(--color-on-surface-variant)]">
                        {task.description || "No description provided."}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                        <span className={`font-semibold ${priorityClass(task.priority)}`}>
                          {task.priority || "Medium"} Priority
                        </span>
                        {task.dueDate && (
                          <span className="text-[var(--color-on-surface-variant)]">
                            Due {new Date(task.dueDate).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold ${statusClass(
                          task.status
                        )}`}
                      >
                        {task.status || "Pending"}
                      </span>

                      <button
                        type="button"
                        onClick={() => handleDeleteTask(taskId)}
                        className="rounded-xl border border-[var(--color-error)]/40 px-3 py-2 text-sm font-medium text-[var(--color-error)] transition hover:bg-[var(--color-error-container)]/10"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyTask;