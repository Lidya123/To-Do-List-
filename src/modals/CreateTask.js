import React,{useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({modal,toggle,save}) => {
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

  const handleSave=()=>{ //onClick taskObj has name and desp of each task and that is pushed to save func
    const taskObj = {} //when you create objects --> {}
    taskObj["Name"] = taskname
    taskObj["Description"] = taskdesp
    save(taskObj) 
    toggle(!modal)
    setTaskname('')
    setTaskdesp('')
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
          <Button color="primary" onClick={handleSave}>Create Task</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
};

export default CreateTask;