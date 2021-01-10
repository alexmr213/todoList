import {Injectable} from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { listar, editar } from '../todos/todo.actions';
import { mergeMap, tap, map } from 'rxjs/operators';
import { ServiceLoginService } from '../services/service-login.service';
import { Todo } from '../todos/models/todo.model';

@Injectable()
export class editEffects {

    constructor(
        private action$ : Actions,
        private serviceLogin: ServiceLoginService
    ){}

    editTodo$ = createEffect(
      ()=>this.action$.pipe(
          ofType(editar),
          mergeMap(
              (action)=> this.serviceLogin.editTodoObj(action.id,action.obj).pipe(
                map( () => 
                    listar() ),
              )
          )

      )
    );
    

}