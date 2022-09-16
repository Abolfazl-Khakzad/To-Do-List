import { createContext } from "react";


export const taskContex = createContext({
    taskItems :[] ,
    setTaskItems : ()=>{}
})