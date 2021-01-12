import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor( private store: Store<AppState>,
    private router: Router) {
    this.txtInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {}

  agregar() {
    if (this.txtInput.invalid) {
      return;
    }
    this.store.dispatch(actions.crear({texto: this.txtInput.value}));
    this.txtInput.reset();

  }
  logOut(){
    localStorage.removeItem('idUser')
    localStorage.removeItem('status')
    this.router.navigateByUrl('/login');
    
  }
}
