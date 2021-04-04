import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";

import * as todos from './reducers/todos.reducer';

export interface State{
  todos: todos.State
}

export const reducers: ActionReducerMap<State> = {
  todos: todos.reducer
};

export const selectTodosState = (state: State) => state.todos

// export const selectTodosState = createSelector(
//
// )

export const selectAllTodos = createSelector(
  selectTodosState,
  (state: todos.State) => state.todoList
);
