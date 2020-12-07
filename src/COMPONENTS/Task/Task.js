import React, { Component } from 'react';
import './Task.css' ;

class Task extends Component {
    constructor(props){
        super(props);
        this.state = {
            strike: "",
            checked: false
        }
    }

    componentDidMount(){
    }

   
    onClickCheckbox = () => {
        this.setState({ strike : this.state.strike === "" ? "strike" : "",
                        checked : !this.state.checked}, () => console.log("Llamada a setState del Item",this.props.id,this.state.checked));
    }

    onClickedDeleteButton = () => {
        this.props.callback(this.props.id);
    }

    render() {
        if (this.props.id === 2)
            console.log("Soy el 2",this.state.checked);
        return(
        <div id = "itemContainer">
            <input  type = "checkbox"
                    id = {this.props.id}
                    onClick = {this.onClickCheckbox}
                    name = {this.props.id}
                    value = {this.props.text}
                    checked = {this.state.checked}></input>
            <p  className = {this.state.strike}
                onClick = {this.onClickCheckbox}>{this.props.text}</p>
            <button type = "button"
                    id = "deleteButton"
                    onClick = {this.onClickedDeleteButton}>Eliminar</button>
            
        </div>);
    }
};

export default Task;