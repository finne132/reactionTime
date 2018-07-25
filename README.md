# ChillTime Triva

# Project Overview
The app will allow users to log in. Users play a single game of of trivia with friends or random users, trivia games will be interactive including chat. Question will only be in mulitple choice format. No schedules no waiting. Play when you want.

# Presentation and Demo
(Add new powerpoint here)Slides: https://docs.google.com/presentation/d/1L6u_S4z8b-x_6oBC4NJC7Tuah9tnnZ2NvktnGiymGVI/edit?usp=sharing

# Environment Requirements
NPM must be installed. All other dependencies are installed through npm during set up.

# Set Up
1) Clone the repo 
2) run `npm install` 
3) run `npm install nodemon -g` to make sure nodemon is installed globally 
3) make sure your MONGO DB server is running on your computer (go run: mongod)
4) running `npm run dev` will trigger a script to launch the server and the app together (node server.js won't work on its own).

# At Login Page
1) You will be required to have an account to play the game.
2) Navigate to registeration page and create account
3) Log in to your account
4) To start a game of trivia (select button here etc. etc.)


# Use
This application is intended to be used as a fun interactive trivia game. Users will log in and be able to communicate with other players in the game.

# Features 
Home Page
    - This is a simple title page that just serves to describe the application and to embellish the toggled sign in.
    
Welcome View 
    - This page offers a graceful landing spot once a user logs into the app. 
    
Game view
    - Users are presented with 15 questions to try and guess the highest score.
    - Users must beat the timer otherwise will recieve an incorrect socre if time runs out.
    - All questions are multiple choice
    - The chat allows for communication between players
   
