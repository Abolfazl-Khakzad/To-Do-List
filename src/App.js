import { useState } from "react";
import { taskContex } from "./taskContex";
import TaskItems from "./TaskItems";
import TopForm from "./TopForm";

const App =()=> {

  const[taskItems , setTaskItems] =useState([
    {
      id:1 ,
      title : "first plan",
      done: false
    },
    {
      id:4 ,
      title : "forth plan",
      done: false
    },
    {
      id:2 ,
      title : "second plan" ,
      done: true
    },
    {
      id:3 ,
      title : "third plan" ,
      done: false
    }
  ])
  return (
    <div className="container w-100 h-100">
                <div className="row justify-content-center">
                  <div className="col-12 bg-light m-3 rounded ">
              <taskContex.Provider  value={{
                taskItems ,
                setTaskItems
              }}>
                    <TopForm/>
                    <TaskItems/>
            </taskContex.Provider>
                  </div>
                </div>
            </div>
  );
}

export default App;
