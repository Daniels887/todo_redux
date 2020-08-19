import { TaskState, ADD_TASK, CHECK_TASK, TaskActionTypes } from './types'

const initialState = [
  { id: Math.floor(Math.random() * 10), name: 'Tarefa 1', checked: false }
]

const taskReducer = (
  state: TaskState[] = initialState,
  action: TaskActionTypes
) => {
  switch (action.type) {
    case ADD_TASK:
      const newTasks = [...state, action.payload]
      return newTasks
    case CHECK_TASK:
      return state.map((task) => {
        if (task.id == action.payload) {
          return {
            ...task,
            checked: !task.checked
          }
        }
        return task
      })
    default:
      return state
  }
}

export default taskReducer
