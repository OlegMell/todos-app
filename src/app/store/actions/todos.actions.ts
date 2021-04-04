import {Action} from "@ngrx/store";
import {TodoResponseInterface} from "../../shared/interfaces/todo.interface";

export enum TodosActions {
  GetTodoRequest = "[Todo List] Get Todos Request",
  GetTodoRequestSuccess = "[Todo List] Get Todos Request Success",
  GetTodoRequestError = "[Todo List] Get Todos Request Error",
}

export class GetTodosRequest implements Action {
  readonly type = TodosActions.GetTodoRequest
}

export class GetTodosRequestSuccess implements Action {
  readonly type = TodosActions.GetTodoRequestSuccess

  constructor(public readonly payload: { todos: TodoResponseInterface[] }) {
  }
}

export class GetTodosRequestError implements Action {
  readonly type = TodosActions.GetTodoRequestError
}


export type TodoActionsUnion =
  GetTodosRequest | GetTodosRequestSuccess | GetTodosRequestError
