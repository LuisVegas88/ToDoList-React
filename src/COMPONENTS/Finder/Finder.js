import React, { Component } from 'react';
import './Finder.css' ;

class Finder extends Component {
    
        componentDidMount(){
        }
    
        render() {
            return(
            <div id = "finderContainer">
                <h1>ToDo LIST</h1>
                <input  type = "text"
                        name = "finder"
                        id = "finder"
                        placeholder = "Buscar tarea en la lista..."
                        onChange = {this.props.callback} />
            </div>);
        }
};
export default Finder;