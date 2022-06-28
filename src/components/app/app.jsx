import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmpolyeesList from "../employees-list/employees-list";
import EmpoyeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

function App() {

   const data = [
      {name: "Gustavo F.", salary: 3000, increase: false, id: 1},
      {name: "Soul G.", salary: 2000, increase: true, id: 2},
      {name: "Nacho V.", salary: 1000, increase: false, id: 3},
   ]

   return (
      <div className="app">
         <AppInfo/>

         <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
         </div>

         <EmpolyeesList data={data}/>
         <EmpoyeesAddForm/>
      </div>
   );
}

export default App;