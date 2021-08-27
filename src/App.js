import './App.css';
import ListItem from './ListItem';
import Table from 'react-bootstrap/Table';
import AddPropertyDialog from './AddPropertyDialog';
import React, { Component } from 'react';
import Property from './models/Property';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      properties:[]
    }
    this.setDummyData()
  }

  callbackFunction = (childData) => {
    this.setState({properties:childData});
  }
  
  setDummyData() {
    console.log('adding dummy data')
    let property1 = new Property('House 1','Good house with front lawn',400);
    let property2 = new Property('House 2','Good house with back lawn',300);
    const propertiesList = this.state.properties
    propertiesList.push(property1)
    propertiesList.push(property2)
    this.setState({
      properties: propertiesList
    });
    console.log(this.state.properties)
  }

  render() {
    return (
      <>
        <div className="container">
        <h3>Properties List</h3>
          <Table bordered>
            <thead className="thead-light">
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Size</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <ListItem dataFromParent={this.state.properties} />
            </tbody>
          </Table>
          <AddPropertyDialog dataFromParent={this.state.properties} parentCallback={this.callbackFunction}/>
      </div>
      </>
    );
  }
}

export default App;
