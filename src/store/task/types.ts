export interface TaskState {
  name: string
  checked: boolean
}

export const ADD_TASK = 'ADD_TASK'

export interface ADD_TASK {
  type: typeof ADD_TASK
  payload: { name: string; checked: boolean }
}

export type TaskActionTypes = ADD_TASK
