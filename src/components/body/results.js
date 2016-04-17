import React from 'react';
import SearchTwitter from './searchtwitter';
import Listings from './listings';


class Results extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <SearchTwitter />
            <Listings />
          </div>
        </div>
      </div>
      );
    }
  }

  export default Results;