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
            { name: "Gustavo F.", salary: 3000, increase: false, rise: true, id: 1 },
            { name: "Soul G.", salary: 2000, increase: true, rise: false, id: 2 },
            { name: "Nacho V.", salary: 1000, increase: false, rise: false, id: 3 },
         ],
         sortRise: [
            
         ],
         sortKilo: [
            
         ],
         total: 3,
         bonus: 1,
         term: "",
      }
      this.minID = 4;
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
      this.showTotal();
      this.showBonus();
   }

   pushItem = (name, salary) => {  
      this.setState(({data}) => {
         const newData = data
         newData.push({ 
            name: name, 
            salary: salary, 
            increase: false, 
            rise: false, 
            id: this.minID++})
         return {
            data: newData
         }
      })
      this.showTotal();
   }

   onToggleIncrease = (id) => {
      // this.setState(({data}) => {
      //    const index = data.findIndex(elem => elem.id === id);

      //    const old = data[index];
      //    const newItem = {...old, increase: !old.increase};
      //    const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

      //    return {
      //       data: newArr
      //    }
      // })

      this.setState(({data}) => ({
         data: data.map(item => {
            if (item.id === id) {
               return {...item, increase: !item.increase}
            }
            return item;
         })
      }))
      this.showBonus();
   }

   onToggleRise = (id) => {
      this.setState(({data}) => ({
         data: data.map(item => {
            if (item.id === id) {
               return {...item, rise: !item.rise}
            }
            return item;
         })
      }))
   }

   showTotal = () => {
      this.setState(state => ({
         total: state.data.length
      }))
   }

   showBonus = () => {
      this.setState(({data}) => {
         const listOfBonus = data.filter(item => {
            if (item.increase) {
               return item;
            }
         })
 
         return{
            bonus: listOfBonus.length
         }
      })
   }

   searchEmp = (items, term) => {
      if (term.length === 0) {
         return items;
      }

      return items.filter(item => {
         return item.name.indexOf(term) > -1
      })
   }

   sortDefault = () => {
      this.setState(state => ({
         sortRise: [],
         sortKilo: []
      }))
   }

   sortRise = () => {
      this.setState(state => ({
         sortRise: this.state.data.filter(item => {
            return item.rise;
         }),
         sortKilo: []
      }))
   }

   sortKilo = () => {
      this.setState(state => ({
         sortKilo: this.state.data.filter(item => {
            return item.salary > 1000;
         }),
         sortRise: []
      }))
   }

   onUpdateSearch = (term) => {
      this.setState({term});
   }

   render() {
      const {data, total, bonus, term, sortKilo, sortRise} = this.state;
      const visibleData = this.searchEmp(((sortRise.length > 0) ? sortRise : false || (sortKilo.length > 0) ? sortKilo : data), term);
      return (
         <div className="app">
            <AppInfo 
               total={total}
               bonus={bonus}/>

            <div className="search-panel">
               <SearchPanel onUpdateSearch={this.onUpdateSearch} />
               <AppFilter 
               sortDefault={this.sortDefault}
               sortRise={this.sortRise}
               sortKilo={this.sortKilo}
               accsess={data}
                />
            </div>

            <EmpolyeesList data={visibleData}
               onDelete={this.deleteItem}
               onToggleIncrease={this.onToggleIncrease}
               onToggleRise={this.onToggleRise} />
            <EmpoyeesAddForm onPush={this.pushItem}/>
         </div>
      );
   }

}

export default App;