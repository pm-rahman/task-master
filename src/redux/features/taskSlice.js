import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      status: "pending",
      title: "First Task",
      description:
        "We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
      date: "2023-08-28",
      assignedTo: "Mokhles",
      priority: "high",
    },
  ],
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        const lestElement = state.tasks.at(-1);
        state.tasks.push({
          id: lestElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((item) => item.id !== payload);
    },
    updateStatus: (state, { payload }) => {
      const target = state.tasks.find((item) => item.id === payload.id);
      target.status = payload.updatedStatus;
    },
  },
});
export const { addTask,removeTask, updateStatus } = taskSlice.actions;

export default taskSlice.reducer;
