import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

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
      var Airtable = require('airtable');
      var base = new Airtable({apiKey: 'keyF0lNsmSYSi7ISM'}).base('app8I82hxRIpOOx0z');
      base('property-table').create([
        {
          "fields": {
            "name": this.state.name,
            "description": this.state.description,
            "size": this.state.size
          }
      }],
      {typecast:true},
      function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
      });
      this.setState({
        show: false,
        name: '',
        description: '',
        size: 0
      })
      this.props.parentCallback(true);
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