import React from 'react';

class SearchBar extends React.Component {

  constructor (props) {
    super(props);

    this.state ={term:''};
  }
  render() {

    return ( <input
              value={this.state.term}
               onChange={event => this.onInputChange(event.target.value)} />); // React.createElemnt here
  }

  onInputChange (event) {
    console.log("in the onInputChange");
    console.log(event.target);
  }

  onInputChange(searchterm) {
    console.log(" On Change ", searchterm);
    this.setState({term:searchterm});
    this.props.onSearch(searchterm);
  }
}

export default SearchBar;
