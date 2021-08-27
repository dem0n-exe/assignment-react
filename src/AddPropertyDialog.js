import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import Property from './models/Property';

export default class AddPropertyDialog extends Component  {
    constructor(props){
        super(props);
        this.state = {
            properties: this.props.dataFromParent,
            show: false,
            name: '',
            description: '',
            size: 0
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleClose(){
        this.setState({
            show: false
        });
    }

    handleShow(){
        this.setState({
            show: true
        });
    }

    handleSave(){
      let property = new Property(this.state.name,this.state.description,this.state.size)
      const propertiesList = this.state.properties
      propertiesList.push(property)
      this.setState({
          properties: propertiesList,
          show: false,
          name: '',
          description: '',
          size: 0
      })
      console.log(this.state.properties);
      this.props.parentCallback(this.state.properties);
    }

    render() {
        return (
            <>
              <Button variant="primary" onClick={this.handleShow}>
                Add Property
              </Button>
        
              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Add Property</Modal.Title>
                </Modal.Header>
                <Form>
                <Modal.Body>
                  <Form.Control type="text" placeholder="Name" value={this.state.name} onChange={e=>this.setState({name: e.target.value})} />
                  <br/>
                  <Form.Control type="text" placeholder="Description" value={this.state.description} onChange={e=>this.setState({description: e.target.value})} />
                  <br/>
                  <Form.Control type="number" placeholder="Size" value={this.state.size} onChange={e=>this.setState({size: e.target.value})} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={this.handleSave}>
                    Add
                  </Button>
                </Modal.Footer>
                </Form>
              </Modal>
            </>
          );
    }
}