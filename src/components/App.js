import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {
  state = { images: [] };

  // VARIANT 1 Using Promise
  // onSearchSubmit(term) {
  //   // 1. Fetch the data using axios get request
  //   axios
  //     .get('https://api.unsplash.com/search/photos', {
  //       params: { query: term },
  //       headers: {
  //         Authorization:
  //           'Client-ID k0Iinj4mCZoM7yLAqDC75VMcjSn3_3k7-GSm4_OJvFY',
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data.results);
  //     });
  // }

  // VARIANT 2 Using Async/Await
  onSearchSubmit = async (term) => {
    // 1. Fetch the data using axios get request
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
