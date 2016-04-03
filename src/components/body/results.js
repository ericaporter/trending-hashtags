import React from 'react';
import SearchTwitter from './searchtwitter';
import HashtagListings from './hashtaglistings';


class Results extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <SearchTwitter />
            <HashtagListings />
          </div>
        </div>
      </div>
      );
    }
  }

  export default Results;