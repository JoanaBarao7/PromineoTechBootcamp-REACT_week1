import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return (
            
            <div className="container" id="login">
				<div className="card bg-purple border-info">
					<div className="card-body text-info">						
						<div className="form-group">
							<input type="text" placeholder="Username" className="form-control"></input>
                            <br></br>
							<input type="password" placeholder="Password" className="form-control"></input>
                            <br></br>
                            <h3 className="card-title">Log In</h3>	
						</div>
					</div>
				</div>
			</div>   
        );    
       
    }
}