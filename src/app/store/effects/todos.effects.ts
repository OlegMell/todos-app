import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  AddTodoRequest, AddTodoRequestError, GetTodosRequest,
  GetTodosRequestError,
  GetTodosRequestSuccess, RemoveTodoError,
  RemoveTodoRequest,
  RemoveTodoSuccess,
  TodosActions
} from "../actions/todos.actions";
import {catchError, map, mergeMap, switchMap} from "rxjs/operators";
import {TodosService} from "../../shared/services/todos.service";
import {of} from "rxjs";
import {Todo} from "../../shared/interfaces/todo.interface";

@Injectable({providedIn: 'root'})
export class TodosEffects {
  loadTodos$ = createEffect(() => this.actions$.pipe(
    ofType(TodosActions.GetTodoRequest),
    switchMap(() => this.todosService.getTodos()
      .pipe(
        map(res => res.body),
        map((todos: Todo[]) => new GetTodosRequestSuccess({todos})),
        catchError(() => of(new GetTodosRequestError()))
      ))
  ));

  removeTodo$ = createEffect(() => this.actions$.pipe(
    ofType(TodosActions.RemoveTodoRequest),
    mergeMap((action: RemoveTodoRequest) =>
      this.todosService.removeTodo(action.payload.todoId).pipe(
        map(() => new RemoveTodoSuccess({...action.payload})),
        catchError(() => of(new RemoveTodoError()))
      ))
  ));

  addToo$ = createEffect(() => this.actions$.pipe(
    ofType(TodosActions.AddTodoRequest),
    mergeMap((action: AddTodoRequest) =>
      this.todosService.addTodo(action.payload.todo).pipe(
        map(() => new GetTodosRequest()),
        catchError(() => of(new AddTodoRequestError()))
      ))
  ));

  constructor(
    private actions$: Actions,
    private todosService: TodosService
  ) {
  }
}
