import { Component } from "react";

import "./employees-add-form.css";

class EmpoyeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            salary: ""
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
    
        if (this.state.userName.length < 3 || 
            this.state.salary <= 0 || 
            this.state.salary[0] == 0) {
            return;
        } else {
            this.props.onPush(this.state.userName, this.state.salary)
            this.setState({
                userName: "",
                salary: ""
            })
        }  
        
    }

    render() {
        const { userName, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавте нового співробітника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Як його звати?"
                        name="userName"
                        value={userName}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange} />

                    <button type="submit"
                        className="btn btn-outline-light"
                    >Добавити</button>
                </form>
            </div>
        )
    }
}



export default EmpoyeesAddForm;