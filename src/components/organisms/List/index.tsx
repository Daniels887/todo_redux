import React from 'react'

import Card from '../../molecules/Card'
import { TaskState } from '../../../store/task'

interface IProps {
  tasks: TaskState[]
}

const List: React.FC<IProps> = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <Card task={task} key={task.id} />
      ))}
    </>
  )
}

export default List
