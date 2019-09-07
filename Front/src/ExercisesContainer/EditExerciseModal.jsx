import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class UpdateExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        category:"",
        name:"",
        equipment:"",
        duration:"",
        directions: "",
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
    this.props.updateMovie(this.props.id, this.state);
}
  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Edit</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Edit Your Exercise</ModalHeader>
          <ModalBody>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="category" placeholder={this.props.exerciseCategory} onChange={this.handleChange}></input>
                <input type="text" name="category" placeholder={this.props.exerciseName} onChange={this.handleChange}></input>
                <input type="text" name="category" placeholder={this.props.exerciseEquipment} onChange={this.handleChange}></input>
                <input type="text" name="category" placeholder={this.props.exerciseDuration} onChange={this.handleChange}></input>
                <input type="text" name="category" placeholder={this.props.exerciseDirections} onChange={this.handleChange}></input>
                <input type="submit" value="Update Exercise" ></input>
            </form>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default UpdateExercise;