import { createReducer, on } from '@ngrx/store';
import {
  crear,
  completado,
  editar,
  borrar,
  borrarCompletados,
  activarDesactivar,
} from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('salvar al mundo'),
  new Todo('comprar el pan'),
  new Todo('hacer chocolate'),
  new Todo('cenar pizza'),
];

const _todoReducer = createReducer(
  initialState,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(completado, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),
  on(editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto,
        };
      } else {
        return todo;
      }
    });
  }),
  on(borrar, (state, { id }) => {
    return state.filter((todo) => {
      return todo.id !== id;
    });
  }),
  on(borrarCompletados, (state) => {
    return state.filter(todo => !todo.completado)
  }),
  on(activarDesactivar, (state, { completado }) => {
    return state.map((todo) => {
      return { ...todo, completado };
    });
  })
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
