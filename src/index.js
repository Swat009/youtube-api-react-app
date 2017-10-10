import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY='Your API_KEY';


class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state={videos:[],selectedVideo:null};

    this.videoSearch('surf');


  }

  videoSearch(term)
  {
    YTSearch({key: API_KEY, term: term},(data)=>{
      this.setState({videos: data,
        selectedVideo: data[0]
      });
    });
  }



  render()
  {
      return (
        <div>
          <SearchBar onSearchTermChange={ term=>this.videoSearch(term) }/>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList onVideoSelect={selectedVideo=>this.setState({selectedVideo})}  videos={this.state.videos} />
        </div>
      );
  }
}
ReactDOM.render(<App />, document.querySelector('#app'));
