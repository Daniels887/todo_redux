import React from 'react'

import { Container, Title, Checkbox } from './styles'
import { TaskState, checkTask } from '../../../store/task'
import { useDispatch } from '../../../store'

interface IProps {
  task: TaskState
}
const Card: React.FC<IProps> = ({ task }) => {
  const dispatch = useDispatch()

  return (
    <Container>
      <Title>{task.name}</Title>
      <Checkbox
        type="checkbox"
        checked={task.checked}
        onChange={() => dispatch(checkTask(task.id))}
      />
    </Container>
  )
}

export default Card
