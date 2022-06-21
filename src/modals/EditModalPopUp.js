import React,{useState,useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditModalPopUp = ({modal,toggle,updateTask,obj}) => {
    const [taskname, setTaskname] = useState('')
    const [taskdesp,setTaskdesp] = useState('') //when String --> ''

  const handleTask = (e) => {
      const {name,value} = e.target

      if (name === "taskName"){
            setTaskname(value)
      }
      else {
            setTaskdesp(value)
      }
  }

   useEffect(()=>{
    setTaskname(obj.Name)
    setTaskdesp(obj.Description)
  },[])

  const handleUpdate=(e)=>{
    e.preventDefault();
    let tempObj = {}
    tempObj["Name"] = taskname
    tempObj["Description"] = taskdesp
    updateTask(tempObj)
  }

    return (
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
            <form>
                <div className='form-group'>
                    <label>Name of Task: </label>
                    <input type='text' className='form-control' value={taskname} name="taskName" onChange={handleTask}/>
                </div>
                <div className='form-group'>
                    <label>Description: </label>
                    <textarea row='5' className='form-control' value={taskdesp} name="taskDescription" onChange={handleTask}/>
                </div>
            </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate}>Update Task</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
};

export default EditModalPopUp;