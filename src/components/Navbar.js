
import React, { Component } from 'react'

export class Navbar extends Component {

    render() {
        return (
            
            <div>
                <nav className="navbar">
                    <div className="title">Parul University</div>
                    <ul className="nav-links">
                        <li><a href="#" className="links">Home</a></li>
                        <li><a href="#" className="links">Results</a></li>
                        <li><a href="#" className="links">Get Admission</a></li>
                         <li><a href="#" className="links">Events </a></li>
                        <li><a href="#" className="links">Log in</a></li>
                    </ul>
                </nav>

            </div>

        )
    }
}

export default Navbar
