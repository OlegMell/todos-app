import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {GetTodosRequest} from "./store/actions/todos.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Todos'

  constructor(private readonly store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetTodosRequest())
  }


}
