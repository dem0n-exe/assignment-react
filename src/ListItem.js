import React, {Component} from 'react';

export default class ListItem extends Component {
    constructor(props){
        super(props);

        this.deleteProperty = this.deleteProperty.bind(this);
        this.state = {
            properties: this.props.dataFromParent
        };
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
                <a className="btn btn-primary" href="/#" onClick={() => { this.deleteProperty(currentProperty.name) }} role="button">Delete</a>
            </td>
        </tr>
        )
        });
    }
    
    render(){
        return(
        <>
          {this.propertyList()}
        </>
        )
    }
}