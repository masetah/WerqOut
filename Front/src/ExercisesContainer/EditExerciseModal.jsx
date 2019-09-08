import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class UpdateExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        category: props.exercises.category,
        name:props.exercises.name,
        equipment: props.exercises.equipment,
        duration: props.exercises.duration,
        directions: props.exercises.directions,
        modal:false
    };
  }
toggle= () =>{
    this.setState({
        modal: !this.state.modal
    })
}
handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    })
}
handleSubmit = (e)=> {
    e.preventDefault();
    this.props.updateExercise(this.props.id, this.state);
    this.toggle();
}
  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Edit {this.props.exercises.name}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Update {this.props.exercises.name} </ModalHeader>
          <ModalBody>
            <form onSubmit={this.handleSubmit}>
                Category: <input type="text" name="category" value={this.state.category} onChange={this.handleChange}></input><br></br>
                Name: <input type="text" name="name" value={this.state.name}  onChange={this.handleChange}></input><br></br>
                Equpment Used: <input type="text" name="equipment" value={this.state.equipment} onChange={this.handleChange}></input><br></br>
                Recomended Duration: <input type="text" name="duration" value={this.state.duration} onChange={this.handleChange}></input><br></br>
                Directions: <textarea name="directions" value={this.state.directions} onChange={this.handleChange}></textarea><br></br>
                {/* <input type="submit" value="Update Exercise" ></input> */}
            </form>
          </ModalBody>
          <ModalFooter>
              <Button color="primary" onClick={this.handleSubmit}>Update Exercise</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default UpdateExercise;