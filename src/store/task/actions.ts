import { ADD_TASK } from './types'

const addTask = (task: string) => {
  return {
    type: ADD_TASK,
    payload: { name: task, checked: false }
  }
}

export { addTask }
