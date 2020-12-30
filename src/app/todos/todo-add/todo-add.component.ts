import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as actions from '../todo.actions';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  txtInput: FormControl;

  constructor( private store: Store<AppState>) {
  }

  ngOnInit(): void {}

  agregar() {
    if (this.txtInput.invalid) {
      return;
    }
    this.store.dispatch(actions.crear({texto: this.txtInput.value}));
    this.txtInput.reset();

  }
}
