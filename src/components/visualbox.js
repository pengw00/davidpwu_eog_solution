import React, { Component } from 'react';

class Box extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <ul>
                    <li>Atittude: {this.props.data.temperature}</li>
                    <li>longtitue: {this.props.data.temperature}</li>
                    <li>temperature: {this.props.data.temperature}</li>
                    <li>temperature: {this.props.data.temperature}</li>
                </ul>
            </div>
        )
    }
}

export default Box;