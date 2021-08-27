import React, {Component} from 'react';
import Property from './models/Property';

export default class ListItem extends Component {
    constructor(props){
        super(props);

        this.deleteProperty = this.deleteProperty.bind(this);
        this.state = {
            properties:[]
        };
    }

    getDummyData() {
        let property1 = new Property('House 1','Good house with front lawn',400);
        let property2 = new Property('House 2','Good house with back lawn',300);
        return [property1,property2];
    }

    componentDidMount() {
        console.log(this.getDummyData())
        this.setState({
            properties: this.getDummyData()
        });
    }

    deleteProperty(name) {
        this.setState({
            properties: this.state.properties.filter(property => property.name !== name)
        });
    }

    propertyList() {
        return this.state.properties.map(currentProperty => { return(
            <tr key={currentProperty.name}>
            <td>{currentProperty.name}</td>
            <td>{currentProperty.description}</td>
            <td>{currentProperty.size}</td>
            <td>
                <a className="btn btn-primary" href="/#" onClick={() => { this.deleteProperty(currentProperty.name) }} role="button">delete</a>
            </td>
        </tr>
        )
        });
    }

    addProperty() {

    }
    
    render(){
        return(
        <div>
        <h3>Properties List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Size</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.propertyList()}
          </tbody>
        </table>
        <button type="button" class="btn btn-primary" data-toggle="modal" href="#foo">
            Add Property</button>

            <div class="modal fade" id="foo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="addPropertyModalLabel">Add Property</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      </div>
        )
    }
}