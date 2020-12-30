import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { activarDesactivar } from '../todo.actions';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {


  seleccionar = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  marcar(){
    this.seleccionar = !this.seleccionar;

    this.store.dispatch(activarDesactivar({completado: this.seleccionar}));
  }

}
