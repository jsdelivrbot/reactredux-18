
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
      videos:[],
      selectedVideo: null,
      term:"lespaul"

    };

    console.log("in constructor");
    this.videoSearch(this.state.term);
  };

  videoSearch(term) {
    console.log (" Searching for ", term);
    YTSearch({key: API_KEY, term: term, max: '1 - 50'},
    (data) => {
      console.log("In return");
      console.log(data);
      console.log("lets set current video");
      this.setState ({videos:data,
                      selectedVideo: data[0]});
      console.log(this.state.videos);
    });
  }

  render() {
    return (
      <div>
      <div className="search-bar">
        <SearchBar onSearch={searchterm=> { this.videoSearch({searchterm});}}
           />
     </div>
      <VideoDetail video={this.state.selectedVideo} />
     <div>
      <VideoList onVideoSelect={vid=> {
        console.log("clicked on " , vid.snippet.title);
        this.setState({selectedVideo:vid});} } videos={this.state.videos} />
     </div>
   </div>);
  }

}
// Add this component to the DOM
ReactDOM.render(<App />,document.querySelector(".container"));
