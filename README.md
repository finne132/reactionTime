# ChillTime Triva
This project is deployed live at https://chilltimetrivia.herokuapp.com/

# Project Overview
This app allows users to log in and play a challenging timed trivia game with their friends. There is a global chat function available while playing trivia so you can chat with friends, compare your scores, ask questions, or try to help or hinder other players! 

# Presentation and Demo
https://docs.google.com/presentation/d/1L6u_S4z8b-x_6oBC4NJC7Tuah9tnnZ2NvktnGiymGVI/edit?usp=sharing

![Alt Text](https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif)

# Environment Requirements
1) NPM must be installed. All other dependencies are installed through npm during set up.
2) A Mongo Database must be running. Make sure you run `mongod` or `mongod.exe` before starting the app.

# Local Set Up
1) Clone the repo 
2) run `npm install` 
3) make sure your MONGO DB server is running on your computer (go run:` mongod` or `mongod.exe`)
4) run `npm run dev` this will trigger a script to launch the server and the app together (node server.js won't work on its own)

# At Login Page
1) You will be required to have an account to play the game: authentication is done locally with the database.
2) Navigate to registeration page to create an account
3) Log in to your account at the login page
4) There is currently no enforcement of password rules or error handling for duplicate usernames 

# Use
This application is intended to be used as a fun interactive trivia game. Users will log in and be able to communicate with other players globally who are also playing the game. It was inspired by HQ Trivia, but we wanted users to be able to play whenever they want, instead of being bound to a specific time of day.

# Features 
Home Page
    - This is a simple title page that just serves to describe the application and to embellish the toggled sign in and play buttons. 
    
Game view
    - Users get 10 questions to answer with a 15 second timer per question
    - If a user doesn't select an answer in time, they get an "incorrect" and the game advances to the next question
    - All questions are multiple choice and fed in through the Open Trivia DB API 
    - All questions are multiple choice
    - The chat allows for communication between players
   
# Technologies
1) Node (environment)
2) Express (server/routes/session)
3) React (UI/DOM)
4) MongoDB (data storage)
5) Passport (authentication)
6) Bcrypt (password hashing)
7) Morgan (logging request details)
8) OpenTrivia API (feeding in external content)
9) Axios (promise-based http client used for authentication)
10) SocketIO (for chat)
