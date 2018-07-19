import React from 'react'
// TODO - add proptypes

const Header = props => {
	let Greeting
	if (props.user === null) {
		Greeting = <p>Please Login to continue</p>
	} else if (props.user.firstName) {
		Greeting = (
			<p>
				You are logged in as <strong>{props.user.firstName}</strong>
			</p>
		)
	} else if (props.user.local.username) {
		Greeting = (
			<p>
				You are logged in as <strong>{props.user.local.username} </strong>
			</p>
		)
	}
	return (
		<div className="Header">
		{Greeting}
		</div>
	)
}

export default Header
