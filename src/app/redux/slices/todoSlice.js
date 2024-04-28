import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getTasksByPriority } from "../../features/todo/utils/todo";

export const fetchTasks = createAsyncThunk("todos/fetchTasks", async () => {
  const { data } = await axios.get("http://localhost:3000/todos");

  return getTasksByPriority(data);
});

export const createTask = createAsyncThunk(
  "todos/createTask",
  async (task, thunkAPI) => {
    await axios.post("http://localhost:3000/todos", task);
    thunkAPI.dispatch(fetchTasks());
  }
);

export const updateTask = createAsyncThunk(
  "todos/updateTask",
  async ({ task, id }, thunkAPI) => {
    await axios.put(`http://localhost:3000/todos/${id}`, task);
    thunkAPI.dispatch(fetchTasks());
  }
);

export const deleteTask = createAsyncThunk(
  "todos/deleteTask",
  async (id, thunkAPI) => {
    await axios.delete(`http://localhost:3000/todos/${id}`);
    thunkAPI.dispatch(fetchTasks());
  }
);

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    title: "Todo feature",
    highPriorityList: [],
    mediumPriorityList: [],
    lowPriorityList: [],
  },
  reducers: {
    updateTitle: (state, action) => {
      state.title = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.highPriorityList = action.payload.highPriorities;
      state.mediumPriorityList = action.payload.mediumPriorities;
      state.lowPriorityList = action.payload.lowPriorities;
    });
  },
});

export const { updateTitle } = todoSlice.actions;

export default todoSlice.reducer;
