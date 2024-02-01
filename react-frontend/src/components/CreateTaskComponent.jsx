import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateTaskComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            title: '',
            description: '',
            due_date: '',
            completed: '',
            formError: false,
        }
        this.changetitleHandler = this.changetitleHandler.bind(this);
        this.changedescriptionHandler = this.changedescriptionHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }
    isAnyFieldEmpty = () => {
        const { title, description, due_date, completed } = this.state;
        return [title, description, due_date, completed].some((field) => field.trim() === '');
    };


    // step 3
    componentDidMount() {

        // step 4
        if (this.state.id === '_add') {
            return
        } else {
            EmployeeService.getEmployeeById(this.state.id).then((res) => {
                let employee = res.data;
                this.setState({
                    title: employee.title,
                    description: employee.description,
                    due_date: employee.due_date,
                    completed: employee.completed
                });
            });
        }
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = { title: this.state.title, description: this.state.description, due_date: this.state.due_date, completed: this.state.completed };
        console.log('employee => ' + JSON.stringify(employee));
        if (this.isAnyFieldEmpty()) {
            // Set formError to true if any field is empty
            console.log('Error Occured');

            this.setState({ formError: true });
        } else {
            // Process form submission when all fields are non-empty
            // Add your logic here
            console.log('Form submitted successfully!');

            // step 5
            if (this.state.id === '_add') {
                EmployeeService.createEmployee(employee).then(res => {
                    this.props.history.push('/employees');
                });
            }
            else {
                EmployeeService.updateEmployee(employee, this.state.id).then(res => {
                    this.props.history.push('/employees');
                });
            }
        }
    }

    changetitleHandler = (event) => {
        this.setState({ title: event.target.value });
    }

    changedescriptionHandler = (event) => {
        this.setState({ description: event.target.value });
    }

    changedue_dateHandler = (event) => {
        this.setState({ due_date: event.target.value });
    }
    changecompletedHandler = (event) => {
        this.setState({ completed: event.target.value });
    }

    cancel() {
        this.props.history.push('/employees');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Task</h3>
        } else {
            return <h3 className="text-center">Update Task</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Title: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                            value={this.state.title} onChange={this.changetitleHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> description: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                            value={this.state.description} onChange={this.changedescriptionHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> due_date: </label>
                                        <input placeholder="Email Address" name="emailId" className="form-control"
                                            value={this.state.due_date} onChange={this.changedue_dateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> completed: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                            value={this.state.completed} onChange={this.changecompletedHandler} />
                                    </div>
                                    <br />
                                    {this.state.formError && <p style={{ color: 'red' }}>Please fill in all fields.</p>}

                                    <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateTaskComponent
