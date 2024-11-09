import { createSlice } from "@reduxjs/toolkit";

export const colimsSlice = createSlice({
  name: "colums",
  initialState: {
    colums: [],
  },
  reducers: {
    addColums: (state, action) => {
      state.colums.push(action.payload);
    },

    addCards: (state, action) => {
      const column = state.colums.find(
        (col) => col.id === action.payload.columnId
      );

      if (column) {
        column.cards.push(action.payload);
      }
    },
    EditCards: (state, action) => {
      console.log(action.payload);

      const { columnId, cardId, newText } = action.payload;
      const column = state.colums.find((col) => col.id === columnId);
      if (column) {
        const card = column.cards.find((card) => card.id === cardId);
        if (card) {
          card.title = newText;
        }
      }
    },
    deleteColumns: (state, action) => {
      const { columnId } = action.payload;
      console.log(columnId);

      state.colums = state.colums.filter((col) => col.id !== columnId);
    },
  },
});

export const { addColums, addCards, EditCards, deleteColumns } =
  colimsSlice.actions;

export default colimsSlice.reducer;
