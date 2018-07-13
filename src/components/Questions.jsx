import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import API from "../utils/API";


class Questions extends Component {
    state = {
        results: [],
        search: ""
    };

    componentDidMount() {
        this.searchArticles("Twins");
    }

}