import React from 'react';

class SearchBar extends React.Component {

  constructor (props) {
    super(props);
  }
  render() {
    return (
      <input
        value={this.props.query}
        onChange={
          event => this.onInputChange(event.target.value)}
      />
    );
  }

  onInputChange(query) {
    this.props.onSearchChange(query);
  }
}

export default SearchBar;
