import {TodoActionsUnion, TodosActions} from "../actions/todos.actions";
import {Todo} from "../../shared/interfaces/todo.interface";

export interface State {
  pending: boolean,
  hasError: boolean,
  todoList: Todo[]
}

export const initialState: State = {
  pending: false,
  hasError: false,
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

    case TodosActions.RemoveTodoRequest:
      return {
        ...state,
        pending: true
      }
    case TodosActions.RemoveTodoSuccess:
      return {
        ...state,
        pending: false,
        todoList: [...state.todoList.filter(todo => todo._id !== action.payload.todoId)]
      }
    case TodosActions.RemoveTodoError:
      return {
        ...state,
        pending: false
      }
    case TodosActions.AddTodoRequest:
      return {
        ...state,
        pending: true
      }
    case TodosActions.AddTodoRequestSuccess:
      return {
        ...state,
        pending: false
      }
    case TodosActions.AddTodoRequestError:
      return {
        ...state,
        hasError: true
      }
    default:
      return {
        ...state
      }
  }
}

export const pending = (state: State) => state.pending;
export const todos = (state: State) => state.todoList;
export const hasError = (state: State) => state.hasError;
