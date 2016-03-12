import React from 'react';
import SearchTwitter from '../searchtwitter';
import Header from '../header';
import Map from '../map';

class Tweets extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="jumbotron awf-header">
              <Map />
            </div>
          </div>
          <div className="col-md-2">
            <div className="jumbotron awf-header">
              <SearchTwitter />
            </div>
          </div>
        </div>
      </div>
      );
    }
  }

  export default Tweets;