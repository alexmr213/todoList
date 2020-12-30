import { Action, createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from '../filtro/filtro.actions';

export const initialState: filtrosValidos = 'todos';

const _filtros = createReducer(
    initialState,
    on(setFiltro, (state, {filtro}) => filtro),
);

export function filtroReducer(state, action) {
    return _filtros(state, action);
}