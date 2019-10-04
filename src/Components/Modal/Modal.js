import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Input, Modal } from 'semantic-ui-react';



class ModalRobot extends Component {

  closeModal = () => {
    
    this.setState({
      modal: !this.props.state.modal,
    })
  }

  render() {
    return (
      <h1>
        <Modal
          open={this.props.state.modal}
          onClose={this.props.state.modal}
        >
          <Input name='robot-name' value={this.props.state.name} />
          <Input name='username' value={this.props.state.username}/>
          <Input name='email' value={this.props.state.email}/>
          <Button onClick={this.props.handleCard}>Close</Button>

        </Modal>
      </h1>
    )
  }

}

export default ModalRobot;