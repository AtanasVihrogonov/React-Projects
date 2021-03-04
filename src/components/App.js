import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './App.css';

class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onInputSubmit('react.js');
  }

  // Define Callback method
  onInputSubmit = async (myInput) => {
    const response = await youtube.get('/search', {
      params: {
        q: myInput,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  // Define Callback method
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onInputSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
