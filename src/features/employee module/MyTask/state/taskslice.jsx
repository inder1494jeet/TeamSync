import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../app/config/axiosInstance";

// Fetch employee tasks
export const getEmployeeTasks = createAsyncThunk(
  "/tasks/my-tasks",
  async (_, thunkapi) => {
    try {
      const res = await axiosInstance.get("/tasks");
      console.log(res);
      return res.data.data;
    } catch (error) {
      return thunkapi.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// Add a new task
export const addEmployeeTask = createAsyncThunk(
  "/tasks/add",
  async (taskData, thunkapi) => {
    try {
      const res = await axiosInstance.post("/tasks", taskData);
      console.log(res);
      return res.data.data;
    } catch (error) {
      return thunkapi.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// Delete a task
export const deleteEmployeeTask = createAsyncThunk(
  "/tasks/delete",
  async (taskId, thunkapi) => {
    try {
      const res = await axiosInstance.delete(`/tasks/${taskId}`);
      console.log(res);
      return taskId; // Return ID so reducer can remove it from state
    } catch (error) {
      return thunkapi.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);