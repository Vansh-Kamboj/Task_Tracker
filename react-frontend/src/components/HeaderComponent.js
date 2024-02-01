import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    headerStyle = {
        color: 'white',
        padding: '5px', 
        textAlign: 'center',
        textTransform: 'uppercase', 
        boxShadow: '0px 4px 8px rgba(0.5, 0.3, 0.2, 0.1)', 
    };
    render() {
        return (
            <div>
                <header>
                    {/* <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div style={this.headerStyle}>Tasks Management App</div>
                    </nav> */}
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div className="mx-auto" style={this.headerStyle}>
                            Tasks Management App
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
