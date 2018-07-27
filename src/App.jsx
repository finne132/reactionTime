import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import './App.css'
import LoginForm from './components/Login/LoginForm'
import SignupForm from './components/SignupForm'
import Header from './components/Header'
import Home from './components/Home'
import Trivia from './components/Trivia'
import socketIOClient from 'socket.io-client'

const DisplayLinks = props => {
	if (props.loggedIn) {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item btn1">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li className="nav-item btn1">
						<Link to="#" className="nav-link" onClick={props._logout}>
							Logout
						</Link>
					</li>
					<li className="nav-item btn1">
						<Link to="/trivia" className="nav-link">
							Play
						</Link>
					</li>
				</ul>
			</nav>
		)
	} else {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item btn1">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li className="nav-item btn1">
						<Link to="/login" className="nav-link">
							Login
						</Link>
					</li>
					<li className="nav-item btn1">
						<Link to="/signup" className="nav-link">Register
						</Link>
					</li>
				</ul>
			</nav>
		)
	}
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: null,
			endpoint: "http://localhost:8080"
		}
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
	}


	// method for emitting socket.io events

	send = () => {
		const socket = socketIOClient(this.state.endpoint)
		
		// this emits an event to the socket (your server) with an argument of 'red'
		// you can make the argument any color you would like, or any kind of data you want to send.
		
		socket.emit('change color', 'red') 
    // socket.emit('change color', 'red', 'yellow') | you can have multiple arguments
	  }


	componentDidMount() {
		axios.get('/auth/user').then(response => {
			console.log(response.data)
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				console.log("there is not a logged in user, redirecting to the home page")
				// put the redirect here
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_login(username, password) {
		axios
			.post('/auth/login', {
				username,
				password
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
				}
			})
	}

	render() {
		
		return (
			<div className="App">
			{/* LINKS to our different 'pages' */}
			<DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
				<Header user={this.state.user} />
				{/*  ROUTES */}
				{/* <Route exact path="/" component={Home} /> */}
				<Route exact path="/" render={() => <Home user={this.state.user} />} />
				<Route exact path="/login" render={() => <LoginForm _login={this._login}/>}/>
				<Route exact path="/signup" component={SignupForm} />
				<Route exact path="/trivia" render={() => <Trivia loggedIn={this.state.logggedIn} />} />
				{/* <LoginForm _login={this._login} /> */}
			</div>
		)
	}

	
}
export default App