import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../interfaces/todo.interface";

@Injectable({providedIn: 'root'})
export class TodosService {
  // API_URL: string = 'https://simple-test-todo-api.herokuapp.com/api/todos/';
  API_URL: string = 'http://localhost:8080/api/todos/';

  constructor(private readonly httpClient: HttpClient) {
  }

  public getTodos(): Observable<HttpResponse<any>> {
    return this.httpClient.get(this.API_URL, {
      observe: 'response',
    })
  }

  public removeTodo(id: string): Observable<HttpResponse<any>> {
    return this.httpClient.delete(`${this.API_URL}${id}`, {
      observe: 'response'
    })
  }

  public addTodo(todo: Todo): Observable<HttpResponse<any>> {
    return this.httpClient.post(this.API_URL, {
      ...todo
    }, {
      observe: 'response'
    })
  }
}
