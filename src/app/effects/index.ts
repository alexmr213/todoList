import { editEffects } from './editTodo.effects';
import { createTodoEffects } from './createTodo.effects';
import { todoEffects } from './todo.effects';
import { deleteTodoEffects } from './deleteOne.effects';
import { deleteManyTodoEffects } from './deleteMany.effects';
import { statusTodoEffects } from './statusAll.effects';

export const EffectsArray : any[] =[ todoEffects, createTodoEffects,editEffects,
                                     deleteTodoEffects,deleteManyTodoEffects, statusTodoEffects] 