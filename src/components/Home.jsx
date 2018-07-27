import React from 'react'
import { Route, Link } from 'react-router-dom'
const Home = props => {
	if (props.user) {
		return (
			<div className="Home">
				<div class="container">
					<div class="row">
						<div class="col-md-1">
							<h1>Welcome to ChillTime Trivia</h1>
						</div>
						<div class="row">
							<div class="col-md-12">
							<p>Instructions:</p>
								<ul>
									<li>Each round is 10 questions long</li>
									<li>You have 15 seconds to answer each question</li>
									<li>You can use the chat box below to talk to everyone else playing</li>
									<li>Some people might help, but others will lead you astray!</li>
								</ul>
							</div>
						</div>

						<div class="btn-group">
						</div>
					</div>
				</div>
				<div className="container">
				<div className="welcome">
				<Link to="/trivia" className="nav-link">
				<h1 className="pnow">Play Now
			
			</h1>
						</Link>
		
			</div>
			<div className="flex">



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