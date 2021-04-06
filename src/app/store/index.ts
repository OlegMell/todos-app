import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";

import * as todos from './reducers/todos.reducer';

export interface State {
  todos: todos.State
}

export const reducers: ActionReducerMap<State> = {
  todos: todos.reducer
};

export const selectTodosState = (state: State) => state.todos

export const selectAllTodos = createSelector(
  selectTodosState,
  (state: todos.State) => state.todoList
);

export const selectPending = createSelector(
  selectTodosState,
  (state: todos.State) => state.pending
)

export const selectHasError = createSelector(
  selectTodosState,
  (state: todos.State) => state.hasError
)
