import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Store} from "@ngrx/store";
import {AddTodoRequest} from "../../store/actions/todos.actions";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Todo} from "../../shared/interfaces/todo.interface";
import {selectHasError} from "../../store";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '500px',
        position: 'absolute',
        zIndex: '9999',
        backgroundColor: 'white'
      })),
      state('closed', style({
        height: 'auto',
        backgroundColor: 'black'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ])
  ]
})
export class AddTodoComponent implements OnInit {
  todoForm: FormGroup
  isFocused: boolean

  constructor(private store: Store) {
    this.todoForm = new FormGroup({
      'title': new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  toggleFocus() {
    this.isFocused = !this.isFocused
  }

  addTodo() {
    if (!this.todoForm.valid) return

    const todo: Todo = {
      title: this.title.value,
      description: "",
      endDate: new Date(),
      beginDate: new Date(),
      status: 1,
      priority: 1
    }

    this.store.dispatch(new AddTodoRequest({todo}));
    this.store.select(selectHasError).subscribe(hasError => {
      if (!hasError) {
        this.todoForm.reset();
        Object.keys(this.todoForm.controls).forEach(control => {
          this.todoForm.get(control).setErrors(null)
        })
      }
    })
  }


  get title(): FormControl {
    return <FormControl>this.todoForm.get('title');
  }
}
