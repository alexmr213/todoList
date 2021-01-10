import { createReducer, on } from '@ngrx/store';
import {
  listar,
  juntarArray,
  crear,
  editar,
  borrar,
  borrarCompletados,
  activarDesactivar,
} from './todo.actions';
import { Todo } from './models/todo.model';


export const initialState: Todo[] = [
];

const _todoReducer = createReducer(
  initialState,
  on(listar, (state) => [...state]),
  on(juntarArray, (state, { lista }) => {
    // con esto fusionamos los arrays
    return state = [...lista];
  }),
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(editar, (state, { id, obj }) => {
    return state
  }),
  on(borrar, (state, { id }) => {
    return state
  }),
  on(borrarCompletados, (state) => {
    return state
  }),
  on(activarDesactivar, (state, { completado }) => {
    return state;
  })
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
