import React from 'react';

class Searchtwitter extends React.Component {
  getRef(ref){
    this.usernameRef = ref;
  }
  handleSubmit(){
    const username = this.usernameRef.value;
    this.usernameRef.value = '';
    this.props.history.pushState() //TODO & check div names
  }
  render(){
    return (
      <div>
        <form onSubmit={() => this.handleSubmit()}>
          <div className="row">
            <input type="text" ref={(ref) => this.getRef(ref)} />
          </div>
          <div>
            <button type="submit" className="btn btn-block btn-primary">Search #Trending</button>
          </div>
        </form>
      </div>
    )
  }
}

Searchtwitter.PropTypes = {
  history: React.PropTypes.object.isRequired
}

export default Searchtwitter;