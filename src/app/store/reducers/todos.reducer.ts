import {TodoActionsUnion, TodosActions} from "../actions/todos.actions";
import {TodoResponseInterface} from "../../shared/interfaces/todo.interface";

export interface State {
  pending: boolean,
  todoList: TodoResponseInterface[]
}

export const initialState: State = {
  pending: false,
  todoList: []
};

export function reducer(state: State = initialState, action: TodoActionsUnion): State {
  switch (action.type) {
    case TodosActions.GetTodoRequest:
      return {
        ...state,
        pending: true
      }
    case TodosActions.GetTodoRequestSuccess:
      return {
        ...state,
        pending: false,
        todoList: [...action.payload.todos]
      }
    case TodosActions.GetTodoRequestError:
      return {
        ...state,
        pending: false
      }
    default:
      return {
        ...state
      }
  }
}

export const pending = (state: State) => state.pending;
export const todos = (state: State) => state.todoList;
