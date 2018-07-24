import React from 'react'
import { Route, Link } from 'react-router-dom'
const Home = props => {
	if (props.user) {
		return (
			<div className="Home">
				<div class="container">
					<div class="row">
						<div class="col-md-1">
							<p>Welcome to Trivia Game</p>
						</div>
						<div class="row">
							{/* <div class="col-md-1">
							<p>Current User's Login Data:</p>
							<code>
							{JSON.stringify(props)}
							</code>
						</div> */}
						</div>

						<div class="btn-group">
						</div>
					</div>
				</div>
				<div className="container">
				<ul>
					<li className="col-sm-3 chooseGame btn1">
						<Link to="/trivia">
							Solo
				</Link>
					</li>
					<li className="col-sm-3 chooseGame btn1">
						<Link to="/mptrivia">
							Multi
				</Link>
					</li>
				</ul>
				</div>
			</div>
		)

	} else {
		return (
			<div className="Home">
			<div className="welcome">
			<h1>Trivia Game
			</h1>
			</div>
				{/* <p>You must log in to continue</p> */}
			</div>
		)
	}
}
export default Home