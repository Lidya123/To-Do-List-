import React,{useState,useEffect} from 'react';
import CreateTask from '../modals/CreateTask';
import Card from './Card';

const TodoList = () => {
    const [modal,setModal] = useState(false);
    const [taskList,setTaskList] = useState([]) //when create Array --> []

    const toggle=()=>{
        setModal(!modal)
    }

    useEffect(()=>{
        let arr = localStorage.getItem("taskList")
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    },[])

//taskList (initially empty) --> tempList (pushed or appened taskObjs) --> setTaskList (Update List) --> hence taskList has values
    const save =(taskObj)=>{  // takes individual tasks and appends it to array taskList
        let tempList = taskList 
        tempList.push(taskObj)
        localStorage.setItem("taskList",JSON.stringify(tempList)) //store the tempList array values --> can't store array hence JSON stringyfy func 
        setTaskList(tempList)  // items will be stored in the name --> "taskList"
    
    }

    const handleDeleteTask=(index)=>{
        let tempList = taskList
        tempList.splice(index,1)
        localStorage.setItem("taskList",JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
      }

    const updateArrayList=(obj,index)=>{
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList",JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    return (
    <div>
        <div className='header text-center'>
            <h1>Todo List</h1>
            <button className='btn btn-primary' onClick={()=>{setModal(true)}}>Create List</button>
        </div>
        <div className = "task-container">
            {taskList && taskList.map((obj , index) => <Card taskObj = {obj} index = {index} handleDeleteTask = {handleDeleteTask} updateArrayList = {updateArrayList}/> )}
        </div>
            <CreateTask modal={modal} toggle={toggle} save={save} />
    </div>
      
    );
};

export default TodoList;