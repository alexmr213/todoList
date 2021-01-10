import {Injectable} from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { listar, crear, activarDesactivar } from '../todos/todo.actions';
import { mergeMap, tap, map } from 'rxjs/operators';
import { ServiceLoginService } from '../services/service-login.service';
import { Todo } from '../todos/models/todo.model';

@Injectable()
export class statusTodoEffects {

    constructor(
        private action$ : Actions,
        private serviceLogin: ServiceLoginService
    ){}

    createTodo$ = createEffect(
      ()=>this.action$.pipe(
          ofType(activarDesactivar),
          mergeMap(
              (action)=> this.serviceLogin.editComplete(action.completado).pipe(
                map( () => 
                    listar() ),
              )
          )

      )
    );
    

}