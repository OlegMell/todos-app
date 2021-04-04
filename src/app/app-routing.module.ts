import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {ArchivedTodosComponent} from "./components/archived-todos/archived-todos.component";
import {RemovedTodosComponent} from "./components/removed-todos/removed-todos.component";


const routes: Routes = [
  {
    path: 'todos',
    component: TodoListComponent
  },
  {
    path: 'archive',
    component: ArchivedTodosComponent
  },
  {
    path: 'removed',
    component: RemovedTodosComponent
  },
  {
    path: '**',
    redirectTo: 'todos'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
