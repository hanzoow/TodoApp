import { todoInfo } from "../../type/todos";
import { ThunkDispatch } from "redux-thunk";
import { todosAction } from "../../reducers/todos/interface";


export const createNewTodo = (todo: todoInfo) => {
  return (dispatch: ThunkDispatch<void,{},todosActions>) => {
    
  }
}

export type todosActions = todosAction<todoInfo>;