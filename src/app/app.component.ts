import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {GetTodosRequest} from "./store/actions/todos.actions";
import {ToastrService} from "ngx-toastr";
import {selectHasError} from "./store";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Todos'

  constructor(private readonly store: Store,
              private readonly toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetTodosRequest())

    this.store.select(selectHasError)
      .pipe(
        map(hasError => {
          if (hasError)
            this.toastrService.error("Something was wrong! Please try again", "Error")
        })
      )
  }


}
