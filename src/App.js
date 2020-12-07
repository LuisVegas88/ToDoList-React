
import Finder from './COMPONENTS/Finder/Finder';
import TaskList from './COMPONENTS/TaskList/TaskList';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.completeList = [
      {id : 1, text: "Hacer la comida"},
      {id : 2, text: "Limpiar la arena de los gatos"},
      {id : 3, text: "Ir al gimnasio"},
      {id : 4, text: "Renovar la subscripción del parking"},
      {id : 5, text: "Ir al Supermercado"},
      {id : 6, text: "Llamar a Ana Matias"},
      {id : 7, text: "Comprar los regalos de los sobrinos"},
    ];
    this.state = {
      Adata : this.completeList,
      data : this.completeList
    };
  }
  componentDidMount(){
  }

  callMeBack = (e) => {
    let regEx = new RegExp(`^${e.target.value}.*$`, "i");
    this.setState({Adata : this.completeList.filter(element => {return regEx.test(element.text)})});
  }

  deleteFromList = (id) => {
    console.log("Eliminar Tarea ", id);
    this.completeList = this.completeList.filter(el => {return el.id !== id});
    this.setState({Adata : this.completeList, data :this.completeList});
  }

  render() {
    return(
      <header className = "App-header">
        <div id= "ListContainer">
          <Finder callback = {this.callMeBack} />
          <TaskList dataList = {this.state.Adata} callback = {this.deleteFromList}/>
        </div>
    </header>
    )
  }
};

export default App;


 
