import {Action} from "@ngrx/store";
import {Todo} from "../../shared/interfaces/todo.interface";

export enum TodosActions {
  GetTodoRequest = "[Todo List] Get Todos Request",
  GetTodoRequestSuccess = "[Todo List] Get Todos Request Success",
  GetTodoRequestError = "[Todo List] Get Todos Request Error",

  RemoveTodoRequest = '[Todo List] Remove Todo Request',
  RemoveTodoSuccess = '[Todo List] Remove Todo Success',
  RemoveTodoError = '[Todo List] Remove Todo Error',

  AddTodoRequest = '[Todo List] Add Todo Request',
  AddTodoRequestSuccess = '[Todo List] Add Todo Request Success',
  AddTodoRequestError = '[Todo List] Add Todo Request Error',
}

export class GetTodosRequest implements Action {
  readonly type = TodosActions.GetTodoRequest
}

export class GetTodosRequestSuccess implements Action {
  readonly type = TodosActions.GetTodoRequestSuccess

  constructor(public readonly payload: { todos: Todo[] }) {
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
}

export class AddTodoRequest implements Action {
  readonly type = TodosActions.AddTodoRequest

  constructor(public readonly payload: { todo: Todo }) {
  }
}

export class AddTodoRequestSuccess implements Action {
  readonly type = TodosActions.AddTodoRequestSuccess
}

export class AddTodoRequestError implements Action {
  readonly type = TodosActions.AddTodoRequestError
}

export type TodoActionsUnion =
  GetTodosRequest |
  GetTodosRequestSuccess |
  GetTodosRequestError |
  RemoveTodoRequest |
  RemoveTodoSuccess |
  RemoveTodoError |
  AddTodoRequest |
  AddTodoRequestSuccess |
  AddTodoRequestError
