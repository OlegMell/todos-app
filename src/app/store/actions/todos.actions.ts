import {Action, createAction, props} from "@ngrx/store";
import {TodoResponseInterface} from "../../shared/interfaces/todo.interface";

export enum TodosActions {
  GetTodoRequest = "[Todo List] Get Todos Request",
  GetTodoRequestSuccess = "[Todo List] Get Todos Request Success",
  GetTodoRequestError = "[Todo List] Get Todos Request Error",

  RemoveTodoRequest = '[Todo List] Remove Todo Request',
  RemoveTodoSuccess = '[Todo List] Remove Todo Success',
  RemoveTodoError = '[Todo List] Remove Todo Error',
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

export class RemoveTodoRequest implements Action {
  readonly type = TodosActions.RemoveTodoRequest

  constructor(public readonly payload: { todoId: string }) {
  }
}

export class RemoveTodoSuccess implements Action {
  readonly type = TodosActions.RemoveTodoSuccess

  constructor(public readonly payload: { todoId: string }) {
  }
}

export class RemoveTodoError implements Action {
  readonly type = TodosActions.RemoveTodoError

  constructor(public readonly payload: { hasError: true }) {
  }
}

export type TodoActionsUnion =
  GetTodosRequest |
  GetTodosRequestSuccess |
  GetTodosRequestError |
  RemoveTodoRequest |
  RemoveTodoSuccess |
  RemoveTodoError
