
import React , { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_details'


// google youtube api KEY
const API_KEY = 'AIzaSyBF4cbUr5LOX3VJV70c4TplXrLMlezwAUA';


//Create a new component to produce HTML
class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      query: ""
    };
  };

  handleSearchChange(query) {
    this.setState({query})
    YTSearch({
      key: API_KEY,
      term: query,
      max: '1 - 50'
    },
    videos => {
      this.setState ({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <div className="search-bar">
          <SearchBar
          query = {this.state.query}
            onSearchChange = {
              query => this.handleSearchChange(query)
            }
          />
        </div>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect = {
            vid => this.setState({selectedVideo:vid})
          }
          videos={this.state.videos}
        />
      </div>
    );
  }

}
// Add this component to the DOM
ReactDOM.render(<App />,document.querySelector(".container"));
