import {Component, Input, OnInit} from '@angular/core';
import {TodoResponseInterface} from "../../shared/interfaces/todo.interface";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input()
  todo: TodoResponseInterface

  constructor() { }

  ngOnInit(): void {
  }

}
