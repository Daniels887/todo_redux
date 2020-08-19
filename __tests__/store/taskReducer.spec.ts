import configureStore from 'redux-mock-store'
import {
  addTask,
  ADD_TASK,
  checkTask,
  taskReducer,
  CHECK_TASK
} from '../../src/store/task'

describe('testing task reducer', () => {
  const middlewares: [] = []
  const mockStore = configureStore(middlewares)

  describe('testing actions', () => {
    it('should addTask action works correctl', () => {
      const initialState = {}
      const store = mockStore(initialState)

      store.dispatch(addTask('Teste'))

      const actions = store.getActions()

      expect(actions[0].payload.name).toEqual('Teste')
    })

    it('should checkTask action works correctly', () => {
      const initialState = { id: 1, name: 'Teste', checked: false }
      const store = mockStore(initialState)

      store.dispatch(checkTask(1))

      const actions = store.getActions()

      expect(actions[0].payload).toEqual(1)
    })
  })

  describe('testing task reducer', () => {
    it('should handle ADD_TASK', () => {
      expect(
        taskReducer(undefined, {
          type: ADD_TASK,
          payload: { id: 1, name: 'Teste', checked: false }
        }).length
      ).toStrictEqual(2)
    })
  })
})
