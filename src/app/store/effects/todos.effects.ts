import {Injectable} from "@angular/core";
import {act, Actions, createEffect, ofType} from "@ngrx/effects";
import {
  GetTodosRequestError,
  GetTodosRequestSuccess, RemoveTodoError,
  RemoveTodoRequest,
  RemoveTodoSuccess,
  TodosActions
} from "../actions/todos.actions";
import {catchError, exhaustMap, map, mergeMap} from "rxjs/operators";
import {TodosService} from "../../shared/services/todos.service";
import {of} from "rxjs";
import {TodoResponseInterface} from "../../shared/interfaces/todo.interface";

@Injectable({providedIn: 'root'})
export class TodosEffects {
  loadTodos$ = createEffect(() => this.actions$.pipe(
    ofType(TodosActions.GetTodoRequest),
    mergeMap(() => this.todosService.getTodos()
      .pipe(
        map(res => res.body),
        map((todos: TodoResponseInterface[]) => new GetTodosRequestSuccess({todos})),
        catchError(() => of(new GetTodosRequestError()))
      )
    ))
  );

  removeTodo$ = createEffect(() => this.actions$.pipe(
    ofType(TodosActions.RemoveTodoRequest),
    mergeMap((action: RemoveTodoRequest) =>
      this.todosService.removeTodo(action.payload.todoId).pipe(
        map(() => new RemoveTodoSuccess({...action.payload})),
        catchError(() => of(new RemoveTodoError({hasError: true})))
      ))
  ))

  constructor(
    private actions$: Actions,
    private todosService: TodosService
  ) {
  }
}
