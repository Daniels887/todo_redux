import React from 'react'

import { Container, Title, Checkbox } from './styles'
import { TaskState, checkTask } from '../../../store/task'
import { useDispatch } from '../../../store'

interface IProps {
  task: TaskState
  id: string
}
const Card: React.FC<IProps> = ({ task, id }) => {
  const dispatch = useDispatch()

  return (
    <Container id={`card-${id}`}>
      <Title>{task.name}</Title>
      <Checkbox
        type="checkbox"
        checked={task.checked}
        onChange={() => dispatch(checkTask(task.id))}
        id={`checkbox-${id}`}
      />
    </Container>
  )
}

export default Card
