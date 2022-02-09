import React from 'react';

export default class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-purple">
            <a className="navbar-brand" href="#">Cats</a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Cat Behavior</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Cat Food</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Cat Health</a>
                    </li>
                </ul>
            </div>
        </nav>

        );
    }


}