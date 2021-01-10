import {Injectable} from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { listar, crear, borrar, borrarCompletados } from '../todos/todo.actions';
import { mergeMap, tap, map } from 'rxjs/operators';
import { ServiceLoginService } from '../services/service-login.service';
import { Todo } from '../todos/models/todo.model';

@Injectable()
export class deleteManyTodoEffects {

    constructor(
        private action$ : Actions,
        private serviceLogin: ServiceLoginService
    ){}

    deleteTodo$ = createEffect(
      ()=>this.action$.pipe(
          ofType(borrarCompletados),
          mergeMap(
              ()=> this.serviceLogin.deleteMany().pipe(
                map( () => 
                    listar() ),
              )
          )

      )
    );
    

}