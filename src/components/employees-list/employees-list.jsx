import EmpolyeesListItem from "../employees-list-item/employees-list-item"
import "./employees-list.css"



const EmpolyeesList = ({data}) => {

   const elements = data.map(item => {
      const {id, ...itemProps} = item; 

      return(
         // <EmpolyeesListItem name={item.name} salary={item.salary}/>
         <EmpolyeesListItem key={id} {...itemProps}/>
         
      )
   
   })

   return(
      <ul className="app-list list-group">
         {elements}
      </ul>
   )
}

export default EmpolyeesList;