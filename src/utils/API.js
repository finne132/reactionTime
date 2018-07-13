import axios from "axios";


// Export an object with a "search" method that searches the Open Trivia API for the passed query
export default {
  search: function(query) {
    return axios.get("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple");
  }
};


