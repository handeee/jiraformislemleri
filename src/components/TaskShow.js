import React, { useState } from 'react'

const TaskShow = ({task,onDelete,onEdit,onchangeform}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [changetaskDesc,setchangeTaskDesc]=useState("");
  const [changetitle,setchangetitle]=useState("");
const taskDelete=()=>{
onDelete(task.id);
}
const taskedit=()=>{
  onEdit(task.title,task.taskDesc);
  setIsEdit(true);

}
const handleChangetask=(event)=>{
  setchangeTaskDesc(event.target.value);
  setchangetitle(event.target.value);

  onchangeform(changetitle,changetaskDesc,task.id)
}
const handleEditsubmit=()=>{

}
  return (
    <div className="task-show">
    {!isEdit ? (
      // Normal Gösterim
      <>
        <h3 className="task-title">Göreviniz</h3>
        <p>{task.title}</p>
        <h3 className="task-title">Yapılacaklar</h3>
        <p>{task.taskDesc}</p>
        <div>
          <button className="task-delete" onClick={taskDelete}>
            Sil
          </button>
          <button className="task-edit" onClick={taskedit}>
            Güncelle
          </button>
        </div>
      </>
    ) : (
      // Düzenleme Formu
      <form className="task-form" onSubmit={handleEditsubmit}>
        <label className="task-label">Başlığı düzenleyiniz</label>
        <input
          className="task-input"
          name="title"
          value={changetitle}
          onChange={handleChangetask}
        />
        <label className="task-label">Task düzenleyiniz</label>
        <textarea
          className="task-input"
          name="taskDesc"
          rows={5}
          value={changetaskDesc}
          onChange={handleChangetask}
        />
        <button className="task-button" type="submit">
          Düzenle
        </button>
      </form>
    )}
  </div>
  )
}

export default TaskShow
