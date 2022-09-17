import React from 'react';
import { useContext } from 'react';
import { taskContex } from './taskContex';

const TaskItems = () => {
    const {taskItems , setTaskItems}=useContext(taskContex); 
    

    const handleToDoTask = (id)=>{
        const index = taskItems.findIndex(t=>t.id == id);
        let newTaskItems = [...taskItems];
        newTaskItems[index].done= !newTaskItems[index].done;
        setTaskItems(newTaskItems);
    }
    const deleteTask = (id)=>{
        let newTask = taskItems.filter(t=>t.id !=id);
        setTaskItems(newTask);
    }
    if(taskItems.length){
        return (
            <>
                <ul className="list-group mt-3">
    
                    {
                        taskItems.map(t=>(
                            <li 
                           
                            className={`list-group-item d-flex justify-content-between rounded mb-2 ${ t.done ? "list-group-item-success" : "" }`}> 
                            {t.title}
                            <span>
                                {
                                    t.done ? (
                                    <i class="fa-solid fa-x text-warning me-3 pointer" onClick={()=>handleToDoTask(t.id)}></i>
                                    ) : (
                                    <i class="fa-solid fa-check text-success me-3 pointer" onClick={()=>handleToDoTask(t.id)}></i>
                                    )
                                }
                            
                            
                            <i class="fa-solid fa-trash text-danger pointer" onClick={()=>deleteTask(t.id)}></i>
                            </span>
                          </li>
                        ))
                    }
                    </ul>
            </>
          );
    }else{
        return <h4 className='text-center text-danger m-4'>there's no plan .... !</h4>
    }
    
}
 
export default TaskItems;

