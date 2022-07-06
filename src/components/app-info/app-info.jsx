import "./app-info.css";

const AppInfo = (props) => {
   const {total, bonus} = props;
   return (
      <div className="app-info">
         <h1>Облік співробітників в компанії</h1>
         <h2>Загальна кількість співробітників: {total}</h2>
         <h2>Премію отримають: {bonus}</h2>
      </div>
   )
}


export default AppInfo;