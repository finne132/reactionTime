import React from 'react'
const Home = props => {
	if (props.user) {
		return (
			<div className="Home">
				<div class="container">
					<div class="row">
						<div class="col-md-1">
							<p>Welcome to APP NAME</p>
						</div>
					<div class="row">
						<div class="col-md-1">
							<p>Current User's Login Data:</p>
							<code>
							{JSON.stringify(props)}
							</code>
						</div>
					</div>

					<div class="btn-group">
  <button type="button" class="btn btn-primary">New Game</button>
  <button type="button" class="btn btn-primary">Join Game</button>
  <button type="button" class="btn btn-primary">Log Out</button>
</div>
						
	
				</div>
			</div>
			</div>
			// rest of the home page goes here 
		)

	} else {
		return (
			<div className="Home">
				<p>You must log in to continue</p>
			</div>
		)
	}
}
export default Home