import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {GetTodosRequestError, GetTodosRequestSuccess, TodosActions} from "../actions/todos.actions";
import {catchError, map, mergeMap} from "rxjs/operators";
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

  constructor(
    private actions$: Actions,
    private todosService: TodosService
  ) {
  }
}
