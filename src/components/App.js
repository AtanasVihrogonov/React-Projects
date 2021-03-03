import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends Component {
  state = { videos: [] };

  onInputSubmit = async (myInput) => {
    const response = await youtube.get('/search', {
      params: {
        q: myInput,
      },
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onInputSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
