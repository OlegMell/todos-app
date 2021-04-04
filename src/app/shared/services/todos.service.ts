import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class TodosService {


  constructor(private readonly httpClient: HttpClient) {
  }

  public getTodos(): Observable<HttpResponse<any>> {
    return this.httpClient.get('https://simple-test-todo-api.herokuapp.com/api/todos', {
      observe: 'response',
    })
  }
}
