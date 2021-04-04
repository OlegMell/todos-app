import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Store} from "@ngrx/store";
import {GetTodosRequest} from "./store/actions/todos.actions";
import {selectAllTodos} from "./store";

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

    this.store.select(selectAllTodos).subscribe(todos => {
      console.log(todos);
    })
  }


}
