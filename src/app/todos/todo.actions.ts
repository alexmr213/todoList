import { createAction, props } from '@ngrx/store';
import { Todo } from './models/todo.model';


export const listar = createAction(
  '[Todo] Listar Todos',
);
export const juntarArray = createAction(
  '[Todo] agregar Todos',
  props<{ lista:Todo[] }>()
);
export const crear = createAction(
  '[Todo] Crear Todo',
  props<{ texto: string }>()
);
export const editar = createAction(
  '[Todo] Completar Todo',
  props<{ id: number, obj:{} }>()
);

export const borrar = createAction(
  '[Todo] Borrar Todo',
  props<{ id: number }>()
);
export const borrarCompletados = createAction(
  '[Todo] Borrar todos los Todos Completados',
);
export const activarDesactivar = createAction(
  '[Todo] activarDesactivar Todo',
  props<{ completado: boolean }>()
);
