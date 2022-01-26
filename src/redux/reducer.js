import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const TodoReducer = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        // adding todo
        addTodos: (state, action) => {
            state.push(action.payload);
            return state;
        },

        //remove todo
        removeTodos: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },

        //update todo
        updateTodos: (state, action) => {
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        item: action.payload.item,
                    };
                }
                return todo;
            });
        },

        // completed
        completeTodos: (state, action) => {
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: true,
                    };
                }
                return todo;
            });
        },
    },
});

export const { addTodos, removeTodos, updateTodos, completeTodos } =
    TodoReducer.actions;
export const reducer = TodoReducer.reducer;
