import React from 'react'
import TaskShow from './TaskShow';

const TaskList = ({tasks,onDelete,onEdit}) => {

  return (
    <div className='task-list'>
      {
        tasks.map((task,index) => {
          return <TaskShow key={index} task={task} onDelete={onDelete} onchangeform={onEdit}/>
}) }
    </div>
  );
}

export default TaskList
