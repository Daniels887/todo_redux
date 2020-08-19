import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader/root'
import * as yup from 'yup'

import { Container, Form, Title, Error } from './styles'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'
import { useSelector, useDispatch } from '../../../store'
import { addTask } from '../../../store/task'
import List from '../../organisms/List'

const Home: React.FC = () => {
  const tasks = useSelector((state) => state.tasks)
  const dispatch = useDispatch()
  const [task, setTask] = useState('')
  const [error, setError] = useState('')

  const taskValidate = yup.object().shape({
    task: yup.string().min(5).required('É obrigatório')
  })

  const handleSubmit = () => {
    taskValidate.isValid({ task }).then((valid) => {
      if (valid) {
        dispatch(addTask(task))
        setTask('')
      } else {
        if (task.length && task.length < 5) {
          setError('Nome da tarefa muito pequeno, o mínimo são 5 caracteres.')
        }
        if (!task.length) {
          setError('É necessário preencher o campo da tarefa.')
        }
      }
    })
  }

  useEffect(() => {
    setError('')
  }, [task])

  return (
    <Container>
      <Title>Minhas tarefas</Title>
      <Form>
        <Input
          placeholder="Tarefa"
          value={task}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setTask(e.target.value)
          }
          id="task"
        />
        <Error id="error">{error}</Error>
        <Button onClick={() => handleSubmit()} id="button">
          Criar tarefa
        </Button>
      </Form>
      <List tasks={tasks} />
    </Container>
  )
}

export default hot(Home)
