import {Injectable} from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { listar, crear } from '../todos/todo.actions';
import { mergeMap, tap, map } from 'rxjs/operators';
import { ServiceLoginService } from '../services/service-login.service';
import { Todo } from '../todos/models/todo.model';

@Injectable()
export class createTodoEffects {

    constructor(
        private action$ : Actions,
        private serviceLogin: ServiceLoginService
    ){}

    createTodo$ = createEffect(
      ()=>this.action$.pipe(
          ofType(crear),
          mergeMap(
              (action)=> this.serviceLogin.createTodo(action.texto).pipe(
                map( () => 
                    listar() ),
              )
          )

      )
    );
    

}