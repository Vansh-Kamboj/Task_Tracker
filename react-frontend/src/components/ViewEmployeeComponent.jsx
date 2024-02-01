import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({ employee: res.data });
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center" style={{ color: 'brown' }}> View Task Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label style={{ color: 'blue', padding: '1px 8px 1px' }}>Title -- </label>
                            <div> {this.state.employee.title}</div>
                        </div>
                        <div className="row">
                            <label style={{ color: 'purple', padding: '1px 8px 1px' }}>description -- </label>
                            <div> {this.state.employee.description}</div>
                        </div>
                        <div className="row">
                            <label style={{ color: 'blue', padding: '1px 8px 1px' }}> due_date --   </label>
                            <div> {this.state.employee.due_date}</div>
                        </div>
                        <div className="row">
                            <label style={{ color: 'purple', padding: '1px 8px 1px' }}>  completed -- </label>
                            <div> {this.state.employee.completed}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
