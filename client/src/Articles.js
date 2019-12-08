import React, { Component } from "react";
import { getAllArticles } from "./MainApi.js";

class Articles extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    getAllArticles().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ articles: data });
      }
      console.log(this.state.articles);
    });
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Articles</h2>
      </div>
    );
  }
}
// Map data and create layout
// create logic for when button clicked goes to specific data by id

export default Articles;
