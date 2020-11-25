import axios from 'axios';

export default axios.create({

  baseURL: 'https://thawing-badlands-02533.herokuapp.com/',
  headers: {
    "Content-type": "application/json",
  }
})

