import { TaskState, ADD_TASK, TaskActionTypes } from './types'

const initialState = [{ name: 'Tarefa 1', checked: false }]

const taskReducer = (
  state: TaskState[] = initialState,
  action: TaskActionTypes
) => {
  switch (action.type) {
    case ADD_TASK:
      console.log('aqui')
      const newTasks = [...state, action.payload]
      return newTasks
    default:
      return state
  }
}

export default taskReducer
