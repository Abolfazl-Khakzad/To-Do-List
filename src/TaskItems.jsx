import React from 'react';
import { useContext } from 'react';
import { taskContex } from './taskContex';

const TaskItems = () => {
    const {taskItems , setTaskItems}=useContext(taskContex); 
    
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
                                    <i class="fa-solid fa-x text-warning me-3 pointer"></i>
                                    ) : (
                                    <i class="fa-solid fa-check text-success me-3 pointer"></i>
                                    )
                                }
                            
                            
                            <i class="fa-solid fa-trash text-danger pointer"></i>
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

