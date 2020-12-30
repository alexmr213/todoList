import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[Todo] Crear Todo',
  props<{ texto: string }>()
);
export const completado = createAction(
  '[Todo] Completar Todo',
  props<{ id: number }>()
);
export const editar = createAction(
  '[Todo] Editar Todo',
  props<{ id: number; texto: string }>()
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
