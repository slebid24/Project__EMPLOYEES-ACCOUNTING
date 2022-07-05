import { Component } from "react";

import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmpolyeesList from "../employees-list/employees-list";
import EmpoyeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [
            { name: "Gustavo F.", salary: 3000, increase: false, id: 1 },
            { name: "Soul G.", salary: 2000, increase: true, id: 2 },
            { name: "Nacho V.", salary: 1000, increase: false, id: 3 },
         ]
      }
   }

   deleteItem = (id) => {
      this.setState(({data}) => {
         // const index = data.findIndex(elem => elem.id == id)
         
         // const before = data.slice(0, index);
         // const after = data.slice(index + 1)

         // const newArr = [...before, ...after]

         return {
            data: data.filter(item => item.id !== id)
         }
      })
   }

   render() {
      return (
         <div className="app">
            <AppInfo />

            <div className="search-panel">
               <SearchPanel />
               <AppFilter />
            </div>

            <EmpolyeesList data={this.state.data}
               onDelete={this.deleteItem} />
            <EmpoyeesAddForm />
         </div>
      );
   }

}

export default App;