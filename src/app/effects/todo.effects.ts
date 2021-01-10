import {Injectable} from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { listar, juntarArray } from '../todos/todo.actions';
import { mergeMap, tap, map } from 'rxjs/operators';
import { ServiceLoginService } from '../services/service-login.service';
import { Todo } from '../todos/models/todo.model';

@Injectable()
export class todoEffects {

    constructor(
        private action$ : Actions,
        private serviceLogin: ServiceLoginService
    ){}

    cargarTodo$ = createEffect(
      ()=>this.action$.pipe(
          ofType(listar),
          mergeMap(
              ()=> this.serviceLogin.getTodo().pipe(
                map( (user:Todo[]) => 
                    juntarArray({ lista: user }) ),
              )
          )

      )
    );
    

}