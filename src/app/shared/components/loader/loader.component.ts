import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {selectPending} from "../../../store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  isActive$: Observable<boolean>

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.isActive$ = this.store.select(selectPending)
  }

}
