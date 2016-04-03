import React from 'react';
import Results from './results';
import Map from './map';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="jumbotron awf-header">
              <Map />
            </div>
          </div>
          <div className="col-md-4">
            <div className="jumbotron awf-header">
              <Results />
            </div>
          </div>
        </div>
      </div>
      );
    }
  }

  export default LandingPage;