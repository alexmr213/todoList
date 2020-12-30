import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  chkCompletado: FormControl;
  txtInput: FormControl;
  editando: boolean = false;

  @ViewChild('inputFisico') textInputFisico: ElementRef;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe((valor) => {
      this.store.dispatch(actions.completado({ id: this.todo.id }));
    });
  }

  editar() {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);

    if (this.editando) {
      setTimeout(() => {
        this.textInputFisico.nativeElement.select();
      }, 1);
    }
  }

  guardar() {
    this.editando = false;
    if (this.txtInput.invalid) {
      return;
    }
    if (this.todo.texto !== this.txtInput.value) {
      this.store.dispatch(
        actions.editar({ id: this.todo.id, texto: this.txtInput.value })
      );
    }
  }

  borrar(){
    this.store.dispatch(actions.borrar({id: this.todo.id}));
  }
}
