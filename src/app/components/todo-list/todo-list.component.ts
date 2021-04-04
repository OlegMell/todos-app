import {Component, OnInit} from '@angular/core';
import {selectAllTodos} from "../../store";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos$

  constructor(private readonly store: Store) {
  }

  ngOnInit(): void {
    this.todos$ = this.store.select(selectAllTodos)
  }

  trackByFn(index, item) {
    return item.id
  }

}
