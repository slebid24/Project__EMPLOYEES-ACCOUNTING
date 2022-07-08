import { Component } from "react";

import "./app-filter.css";

class AppFilter extends Component {
   constructor(props) {
      super(props);
      this.state = {
         all: true,
         rise: false,
         kilo: false
      }
   }

   toAcsessSortRise = (e) => {
      const filt = this.props.accsess;

      if (!filt.some(item => {
         return item.rise == true;
      })) {
         return;
      } else {
         this.toSortSwitch(e);
      }

   }

   toAcsessSortKilo = (e) => {
      const filt = this.props.accsess;

      if (!filt.some(item => {
         return item.salary > 1000;
      }).length < 1) {
         return;
      } else {
         this.toSortSwitch(e);
      }

   }

   toSortSwitch = (e) => {
      const defen = e.target.getAttribute("data-number")
      this.setState(state => {
         return {
            all: (defen == 1) ? true : false,
            rise: (defen == 2) ? true : false,
            kilo: (defen == 3) ? true : false,
         }
      }
      )

      if (defen == 1) {
         this.props.sortDefault();
      } else if (defen == 2) {
         this.props.sortRise();
      } else {
         this.props.sortKilo();
      }
   }

   render() {
      const { all, rise, kilo } = this.state;
      return (
         <div className="btn-group">
            <button
               className={`btn ${all ? "btn-light" : "btn-outline-light"}`}
               data-number="1"
               type="button"
               onClick={this.toSortSwitch}>
               Всі співробітники
            </button>
            <button
               className={`btn ${rise ? "btn-light" : "btn-outline-light"}`}
               data-number="2"
               type="button"
               onClick={this.toAcsessSortRise}>
               Співробітники на підвищення
            </button>
            <button
               className={`btn ${kilo ? "btn-light" : "btn-outline-light"}`}
               data-number="3"
               type="button"
               onClick={this.toAcsessSortKilo}>
               З/П більше 1000$
            </button>
         </div>
      )
   }
}

export default AppFilter;