import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { AppState } from '../../app.state';
import { filtrosValidos } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filtro:filtrosValidos;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('filtro').subscribe(filtro =>{
      this.filtro = filtro;
      this.listTodo(this.filtro)
  });
  }

  listTodo(filtro){
    this.store.select('todos').subscribe((todo) => {
      switch (filtro) {
        case 'todos':
          return this.todos = todo;
          
        case 'completados':
          return this.todos = todo.filter(todo=> todo.completado);
          
        case 'pendientes':
          return this.todos = todo.filter(todo=> !todo.completado);
          
      }
    });
  };
  
}
