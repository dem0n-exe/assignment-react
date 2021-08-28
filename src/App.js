import './App.css';
import ListItem from './ListItem';
import Table from 'react-bootstrap/Table';
import AddPropertyDialog from './AddPropertyDialog';
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      refresh:false
    }
  }

  callbackFunction = (refreshValue) => {
    this.setState({refresh:refreshValue});
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
              <ListItem refresh={this.state.refresh} />
            </tbody>
          </Table>
          <AddPropertyDialog parentCallback={this.callbackFunction}/>
      </div>
      </>
    );
  }
}

export default App;
