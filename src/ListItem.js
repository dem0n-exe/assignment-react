import React, {Component} from 'react';

export default class ListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            properties: [],
            refresh: false
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
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyF0lNsmSYSi7ISM'}).base('app8I82hxRIpOOx0z');
        base('property-table').destroy(property.id, function(err, deletedRecord) {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Deleted record', deletedRecord.id);
        });

        this.setState({
            refresh: !this.state.refresh,
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