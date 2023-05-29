import React, { Component } from 'react';

class MovieReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [], 
    };
  }

  componentDidMount() {
    const apiKey = 'omqSXMGkvNuyxqxCagtIu4mmaq6AygZu'; 
    const apiUrl = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({ reviews: data.results });
      })
      .catch(error => {
        console.log('Error fetching movie reviews:', error);
      });
  }

  render() {
    const { reviews } = this.state;

    return (
      <div>
        {reviews.map(review => (
          <div key={review.display_title}>
            <h2>{review.display_title}</h2>
            <p>Byline: {review.byline}</p>
            <p>Critic Pick: {review.critics_pick}</p>
            <p>Headline: {review.headline}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default MovieReviews;
