import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as actions from '../../filtro/filtro.actions';
import { borrarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  pendientes: number = 0;
  constructor(private store: Store<AppState>) { }

  filtroActual: actions.filtrosValidos;
  filtros: actions.filtrosValidos[] = ['todos', 'pendientes', 'completados'];

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      switch (this.filtroActual) {
        case 'todos':
          this.pendientes = state.todos.filter(todo => todo).length;
          break;
        case 'pendientes':
          this.pendientes = state.todos.filter(todo => !todo.completado).length;
          break;
        case 'completados':
          this.pendientes = state.todos.filter(todo => todo.completado).length;
          break;
      
        default:
          break;
      }
    });
  }


filt(filtro: actions.filtrosValidos){
  this.store.dispatch(actions.setFiltro({filtro}));
}

borrarCompletados(){
  this.store.dispatch(borrarCompletados())
}

}
