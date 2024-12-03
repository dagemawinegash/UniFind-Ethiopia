import { createSlice } from "@reduxjs/toolkit";

const loadListFromLocalStorage = () => {
  const savedList = localStorage.getItem('list');
  return savedList ? JSON.parse(savedList) : [];
};

const listSlice = createSlice({
  name: 'list',
  initialState: loadListFromLocalStorage(),
  reducers:{
    add(state, action){
      state.push(action.payload);
      localStorage.setItem('list', JSON.stringify(state)); 
    },
    remove(state, action) {
      const updatedList = state.filter((product) => product.id !== action.payload.id);
      localStorage.setItem("list", JSON.stringify(updatedList)); 
      return updatedList; 
    }
    
  }
})

export const { add, remove } = listSlice.actions;
export default listSlice.reducer;