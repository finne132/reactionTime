import React from 'react'
import { Route, Link } from 'react-router-dom'
const Home = props => {
	if (props.user) {
		return (
			<div className="Home">
				<div class="container">
					<div class="row">
						<div class="col-md-1">
							<p>Welcome to ChillTime Trivia</p>
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
				<div className="welcome">
			<h1>ChillTime Trivia
			</h1>
			</div>
			<div className="flex">
				<ul>
					<li className="col-sm-3 chooseGame">
						<Link to="/trivia">
							Play
						</Link>
					</li>
				</ul>
				</div>
				</div>
			</div>
		)

	} else {
		return (
			<div className="Home">
			<div className="welcome">
			<h1>ChillTime Trivia
			</h1>
			</div>
				{/* <p>You must log in to continue</p> */}
			</div>
		)
	}
}
export default Home