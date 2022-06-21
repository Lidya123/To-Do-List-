import React, { useState } from 'react';
import EditModalPopUp from '../modals/EditModalPopUp';

const Card = ({taskObj,index,handleDeleteTask,updateArrayList}) => {
    const [modal,setModal] = useState(false)
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const handleDelete=(index)=>{
        handleDeleteTask(index)
    }

    const toggle=()=>{
        setModal(!modal)
    }
    const updateTask=(taskObj)=>{
        updateArrayList(taskObj,index)
        
    }

    return (
        <div> 
            <div className='card-wrapper mr-5' style={{"marginRight":"20px"}}>
                <div className='card-top' style={{"backgroundColor":colors[index%5].primaryColor}}></div>
                    <div className='task-holder'>
                        <span className='card-header' style={{"backgroundColor":colors[index%5].secondaryColor}}>{taskObj.Name}</span>
                        <p className="mt-3" style={{"paddingLeft":"10px"}}>{taskObj.Description}</p>
                    
                        <div style={{"position":"absolute","right":"10px,","bottom":"10px"}}>
                            <i class="fa-solid fa-trash" style={{"color":colors[index%5].primaryColor,"cursor":"pointer","padding-right":"5px"}} onClick={handleDelete}></i>
                            <i class="fa-solid fa-pen-to-square" style={{"color":colors[index%5].primaryColor}} onClick={()=>{setModal(true)}}></i>
                        </div>
                    </div>

                </div>
            <div>
            </div>
            <EditModalPopUp modal={modal} toggle={toggle} updateTask={updateTask} obj={taskObj}/>
        </div>
    );
};

export default Card;