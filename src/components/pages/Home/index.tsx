import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader/root'

import { Container, Form } from './styles'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'
import { useSelector, useDispatch } from '../../../store'
import { addTask } from '../../../store/task'

const Home: React.FC = () => {
  const tasks = useSelector((state) => state.tasks)
  const dispatch = useDispatch()
  const [task, setTask] = useState('')

  const handleSubmit = () => {
    dispatch(addTask(task))
    setTask('')
  }

  return (
    <Container>
      <Form>
        <Input
          placeholder="Tarefa"
          value={task}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setTask(e.target.value)
          }
        />
        <Button onClick={() => handleSubmit()}>Criar tarefa</Button>
      </Form>
      {tasks.map((task) => (
        <h1>{task.name}</h1>
      ))}
    </Container>
  )
}

export default hot(Home)
