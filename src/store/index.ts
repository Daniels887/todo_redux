import { combineReducers, createStore, CombinedState } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { taskReducer } from './task'
import storage from 'redux-persist/lib/storage'
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  TypedUseSelectorHook
} from 'react-redux'

const appReducer = combineReducers({
  tasks: taskReducer
})

export const rootReducer: typeof appReducer = (state, action) => {
  let newState = {
    ...state
  } as CombinedState<RootState> | undefined

  return appReducer(newState, action)
}

type RootState = ReturnType<typeof appReducer>

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

type ExtractedActions = typeof appReducer extends (
  state: CombinedState<RootState>,
  action: infer T
) => RootState
  ? T
  : never

type ActionTypes = ExtractedActions

type RootDispatch = <T extends ActionTypes>(action: T) => T

export const useDispatch = (): RootDispatch => useReduxDispatch()

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer)

const persistor = persistStore(store)

export { store, persistor }
