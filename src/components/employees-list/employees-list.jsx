import EmpolyeesListItem from "../employees-list-item/employees-list-item"
import "./employees-list.css"



const EmpolyeesList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {

   const elements = data.map(item => {
      const {id, ...itemProps} = item; 

      return(
         // <EmpolyeesListItem name={item.name} salary={item.salary}/>
         <EmpolyeesListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleIncrease={() => onToggleIncrease(id)}
            onToggleRise={() => onToggleRise(id)}/>
         
      )
   
   })

   return(
      <ul className="app-list list-group">
         {elements}
      </ul>
   )
}

export default EmpolyeesList;