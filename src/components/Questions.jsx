import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import API from "../utils/API";


class Questions extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
        .then(res => res.json())
        .then(
          (result) => {
              console.log("this is the ")
              console.log(result)
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div>
            {items.results.map(item => (
            <div>
              <p key= {item.results} />
                <p> {item.question} </p>
                <p> {item.correct_answer} </p>
                <p> {item.incorrect_answers} </p>
            </div>
            ))}
          </div>
        );
      }
    }
  }

  export default Questions