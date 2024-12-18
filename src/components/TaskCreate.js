import React, { useState } from "react";

const TaskCreate = ({onCreate}) => {
    const [title,setTitle]=useState("");
    const [taskDesc,setTaskDesc]=useState("");
    const handleChange=(event)=>{
        setTitle(event.target.value);
    }
    const handleTaskChange=(event)=>{
        setTaskDesc(event.target.value);

    }
    const clearinput=()=>{
        setTitle('');
        setTaskDesc('');
    }
    const handlesubmit=(event)=>{
        event.preventDefault();
        onCreate(title,taskDesc)
        clearinput();
    }
  return (
    <div className="task-create">
        <h3>Lütfen Task Ekleyiniz</h3>
      <form className="task-form">
        <label className="task-label">Başlık</label>
        <input className="task-input" value={title} onChange={handleChange} />
        <label className="task-label">Task giriniz</label>
        <textarea className="task-input" rows={5} value={taskDesc} onChange={handleTaskChange}/>
        <button className="task-button" onClick={handlesubmit}>Oluştur</button>
      </form>
    </div>
  );
};

export default TaskCreate;