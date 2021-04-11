import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {HttpClientModule} from "@angular/common/http";
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {TodoComponent} from './components/todo/todo.component';
import {reducers} from "./store";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from "@ngrx/effects";
import {TodosEffects} from "./store/effects/todos.effects";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ArchivedTodosComponent} from './components/archived-todos/archived-todos.component';
import {RemovedTodosComponent} from './components/removed-todos/removed-todos.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {AddTodoComponent} from './components/add-todo/add-todo.component';
import {MatInputModule} from "@angular/material/input";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ToastrModule} from 'ngx-toastr';
import {LoaderComponent} from './shared/components/loader/loader.component';
import {ToastComponent} from './shared/components/toast/toast.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent,
    ArchivedTodosComponent,
    RemovedTodosComponent,
    AddTodoComponent,
    LoaderComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([TodosEffects]),
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    ToastrModule.forRoot(),
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
