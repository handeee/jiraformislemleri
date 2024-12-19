import React from 'react'

const TaskShow = ({task,onDelete}) => {
const taskDelete=()=>{
onDelete(task.id);
}
  return (
    <div className='task-show'>
      <h3 className='task-title'>göreviniz</h3>
      <p>{task.title}</p>
      <h3 className='task-title'>yapılacaklar</h3>
      <p>{task.taskDesc}</p>
      <div>
        <button className='task-delete' onClick={taskDelete}>sil</button>
        <button className='task-edit'>güncelle</button>
      </div>
    </div>
  )
}

export default TaskShow
