import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { taskContex } from './taskContex';


const TopForm = () => {
  const [task , setTask]=useState("");

  const {taskItems , setTaskItems} = useContext(taskContex)

  const handleSetTask = (event)=>{
    setTask(event.target.value)
  }

  const handleAddTask = (event)=>{
    event.preventDefault()
    setTaskItems([...taskItems , {id:Math.random(), title:task , done:false}])
  }

    return ( 
        <>
            <h4 className="text-center my-3 text-info">To Do List</h4>
                    <form>
                      <div className="d-flex">
                        <input type="text" className="form-control" placeholder="next plan!!" value={task} onChange={handleSetTask}/>
                        <button type="submit" className="btn btn-success ms-1" onClick={handleAddTask}>Go</button>
                      </div>
                    </form>
        </>
     );
}
 
export default TopForm;