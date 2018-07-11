import React from 'react'
const Home = props => {
	if (props.user) {
		return (
			<div className="Home">
				<p>Current User's Login Data:</p>
				<code>
					{JSON.stringify(props)}
				</code>
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