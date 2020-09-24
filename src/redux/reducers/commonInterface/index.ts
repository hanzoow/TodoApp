export interface MessageAction {
  type: string;
  payload: {
    message: string;
  };
}
export interface SuccessAction<T> {
  type: string;
  payload: T;
}
