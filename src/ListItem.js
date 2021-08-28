import React, {Component} from 'react';

export default class ListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            properties: []
        }
        this.deleteProperty = this.deleteProperty.bind(this);
    }

    componentDidMount() {
        this.getData()
    }

    componentDidUpdate() {
        this.getData()
    }

    getData() {
        const uri = "https://api.airtable.com/v0/app8I82hxRIpOOx0z/property-table?api_key=keyF0lNsmSYSi7ISM"
        fetch(uri)
        .then(res => res.json())
        .then(res => {
            this.setState({properties:res.records})
        })
        .catch(error => console.log(error))
    }

    deleteProperty(property) {
        var index = this.state.properties.indexOf(property);
        this.state.properties.splice(index,1);
        this.setState({
            properties: this.state.properties
        });
    }

    propertyList() {
        return this.state.properties.map(currentProperty => { 
            return(
            <tr key={currentProperty.fields.name}>
            <td>{currentProperty.fields.name}</td>
            <td>{currentProperty.fields.description}</td>
            <td>{currentProperty.fields.size}</td>
            <td>
                <a className="btn btn-primary" href="/#" onClick={() => { this.deleteProperty(currentProperty) }} role="button">Delete</a>
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