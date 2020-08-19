export interface TaskState {
  id: number
  name: string
  checked: boolean
}

export const ADD_TASK = 'ADD_TASK'
export const CHECK_TASK = 'CHECK_TASK'

export interface ADD_TASK {
  type: typeof ADD_TASK
  payload: { id: number; name: string; checked: boolean }
}

export interface CHECK_TASK {
  type: typeof CHECK_TASK
  payload: number
}

export type TaskActionTypes = ADD_TASK | CHECK_TASK
