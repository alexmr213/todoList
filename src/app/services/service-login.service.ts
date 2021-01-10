import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../todos/models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceLoginService {
constructor(private http: HttpClient) { }

login(user):Observable<any>{
    return this.http.post(environment.apiUrl+'/login',user);

  }
  registro(user):Observable<any>{
    return this.http.post(environment.apiUrl+'/singin',user)
  }
  
  status(){
    let status = localStorage.getItem('status');
    if(status == 'true'){
      return true;
    } else {
      return false;
    }
  }
  getTodo():Observable<Todo[]>{
  const id = localStorage.getItem('idUser')
    return this.http.get<Todo[]>(environment.apiUrl+'/todo/'+ id)
  }
  createTodo(texto):Observable<Todo[]>{
    const id = localStorage.getItem('idUser')
    return this.http.post<Todo[]>(environment.apiUrl+'/todo/'+ id,{texto})
  }
  editTodoObj(id,obj):Observable<Todo[]>{
    return this.http.put<Todo[]>(environment.apiUrl+'/todo/'+ id,obj)
  }
  editComplete(completado):Observable<Todo[]>{
    return this.http.put<Todo[]>(environment.apiUrl+'/todo',{completado})
  }
  deleteOne(id):Observable<Todo[]>{
    return this.http.delete<Todo[]>(environment.apiUrl+'/todo/'+ id)
  }
  deleteMany():Observable<Todo[]>{
    return this.http.delete<Todo[]>(environment.apiUrl+'/todo/')
  }
  
}