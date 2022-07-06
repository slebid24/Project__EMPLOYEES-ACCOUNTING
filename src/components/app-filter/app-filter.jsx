import { Component } from "react";

import "./app-filter.css";

class AppFilter extends Component {
   constructor(props) {
      super(props);
      this.state = ({
         firtsButVid: true,
         secondButVid: false,
         thirdButVid: false,
      })
   }

   activeClass = (btn) => {
      let result = btn ? "btn-light": "btn-outline-light";
      return result;
   } 

   changer = (e) => {
      console.log(e.target)
   }

   render() {
      const {firtsButVid, secondButVid, thirdButVid} = this.state;
      return (
         <div className="btn-group">
            <button 
               className={"btn" + (() => {this.activeClass(secondButVid)})}
               type="button"
               onClick={this.changer}>
                  Всі співробітники
            </button>
            <button 
               className={"btn" + (() => {this.activeClass(secondButVid)})}
               type="button"
               onClick={this.changer}>
                  Співробітники на підвищення
            </button>
            <button 
               className={"btn" + (() => {this.activeClass(thirdButVid)})}
               type="button"
               onClick={this.changer}>
                  З/П більше 1000$
            </button>
         </div>
      )
   }
}

export default AppFilter;