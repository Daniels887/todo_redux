import { ADD_TASK, CHECK_TASK } from './types'

const addTask = (task: string) => {
  const id = Math.floor(Math.random() * 10)

  return {
    type: ADD_TASK,
    payload: { id, name: task, checked: false }
  }
}

const checkTask = (id: number) => {
  return {
    type: CHECK_TASK,
    payload: id
  }
}
export { addTask, checkTask }
