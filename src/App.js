import React, { Component } from 'react';

import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      search: ''
    }
  }
  handleChange(val){
    this.setState({
      search: val
    })
  }
  search(e){
    e.preventDefault();
    window.location.assign(`https://stockfootage.com/?s=${this.state.search}&post_type=product`);
  }
  render() {
    return (
      <div className="App">

        <div className="bg-video-container">
          <video className="bg-video" loop="1" autoPlay="1" playsInline="" muted="1" data-bgvideo="" poster="//stockfootage.com/wp-content/uploads/2016/11/Shanghai-stockfootage.png" data-bgvideo-fade-in="500" data-bgvideo-pause-after="120" data-bgvideo-show-pause-play="false" data-bgvideo-pause-play-x-pos="right" data-bgvideo-pause-play-y-pos="top">
            <source src="https://stockfootage.com/wp-content/uploads/2016/11/stockfootage-video-clips.mp4" type="video/mp4"/>
            <source src="https://stockfootage.com/wp-content/uploads/2016/11/stockfootage-video-clips.mp4" type="video/webm"/>
            <source src="https://stockfootage.com/wp-content/uploads/2016/11/stockfootage-video-clips.mp4" type="video/ogg"/>
          </video>
        </div>

        <div id="vidtop-content">
          <header>
            <div></div>
            <a className="nav-link" href="https://stockfootage.com/">HOME</a>
            <a className="nav-link" href="https://stockfootage.com/shop">SHOP</a>
            <a className="nav-link" href="https://stockfootage.com/my-account">LOGIN</a>
          </header>
          <div className="interact-box">
            <h1>ItalyFootage.com</h1>
            <img src="https://stockfootage.com/wp-content/uploads/2016/10/RedWhite_DS-380x252.png" alt=""/>
            <form className="search" onSubmit={e=>this.search(e)}>
              <input placeholder="Search" onChange={e=>this.handleChange(e.target.value)} value={this.state.search} type="text"/>
            </form>
          </div>
        </div>

        <div className="info-sec">
          <section><h1>Italy <a className="rf" href="https://en.wikipedia.org/wiki/Royalty-free">Royalty-free</a> Stock Video Footage Marketplace</h1></section>
          <div className="hr-red"/>
          <section className="catagory-sec">
            <h1>Browse by Catagory</h1>
            <div className="catagories">
              <a href="https://stockfootage.com/?s=italy+Treviso&post_type=product" className="cat">Treviso</a>
              <a href="https://stockfootage.com/?s=italy+Monfalcone&post_type=product" className="cat">Monfalcone</a>
              <a href="https://stockfootage.com/?s=italy+Forli&post_type=product" className="cat">Forli</a>
              <a href="https://stockfootage.com/?s=italy+Venice&post_type=product" className="cat">Venice</a>
              <a href="https://stockfootage.com/?s=italy+Milano&post_type=product" className="cat">Milano</a>
              <a href="https://stockfootage.com/?s=italy+Genova&post_type=product" className="cat">Genova</a>
              <a href="https://stockfootage.com/?s=italy+Padova&post_type=product" className="cat">Padova</a>
              <a href="https://stockfootage.com/?s=italy+Rimini&post_type=product" className="cat">Rimini</a>
              <a href="https://stockfootage.com/?s=italy+Rome&post_type=product" className="cat">Rome</a>
              <a href="https://stockfootage.com/?s=italy+Napoli&post_type=product" className="cat">Napoli</a>
              <a href="https://stockfootage.com/?s=italy+Florence&post_type=product" className="cat">Florence</a>
              <a href="https://stockfootage.com/?s=italy+Parma&post_type=product" className="cat">Parma</a>
            </div>
          </section>
          <br/>
          <div className="hr-red"/>
          <section className="contributors">
            <h1><span className="contrib-show">Contributors Showcase</span> - Inspired to Create</h1>


            <div className="contributor-previews">
              <div className="contributor-preview">
                <iframe title="1" width="350" height="195" src="https://www.youtube.com/embed/ydJ04HAKYjk" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="contributor-preview">
                {/* <iframe title="2" width="350" height="195" src="https://www.youtube.com/embed/a9p5US3v25s" frameBorder="0" allowFullScreen></iframe> */}
                <iframe src="https://player.vimeo.com/video/60775799" width="350" height="195" frameborder="0" webkitAllowFullScreen mozAllowFullScreen allowFullScreen></iframe>
              </div>
              <div className="contributor-preview">
                <iframe title="3" width="350" height="195" src="https://www.youtube.com/embed/M-2N_YdzxV4" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>

            <div className="mobile-contributor-previews">
              <div className="contributor-preview">
                <iframe title="1" width="250" height="150" src="https://www.youtube.com/embed/ydJ04HAKYjk" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="contributor-preview">
                <iframe title="2" width="250" height="150" src="https://www.youtube.com/embed/a9p5US3v25s" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="contributor-preview">
                <iframe title="3" width="250" height="150" src="https://www.youtube.com/embed/M-2N_YdzxV4" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>

            <br/>
            <p>Find thousands of HD and 4K (ultra HD) stock videos for commercials, movies, news clips, business projects, and more.  Contribute and sell your stock video footage through our online community.  Learn filming and photography techniques from the pros in our specialized film school.</p>
          </section>
          <br/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
