import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {RemoveTodoRequest} from "../../store/actions/todos.actions";
import {Todo} from "../../shared/interfaces/todo.interface";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],

})
export class TodoComponent implements OnInit {
  @Input()
  todo: Todo

  constructor(private readonly store: Store) {
  }

  ngOnInit(): void {
  }

  removeTodo(_id: string) {
    this.store.dispatch(new RemoveTodoRequest({
      todoId: _id
    }))
  }

  archiveTodo(_id: string) {
    alert("TODO ARCHIVE CLICK")
  }


}
