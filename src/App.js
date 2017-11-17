import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      search: '',
      focus: false
    }
  }
  handleFocus(val){
    console.log('focus')
    this.setState({
      focus: val
    })
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
        <div className="video-background">
          <div className="video-foreground">
            <iframe title="background" src="https://www.youtube.com/embed/a9p5US3v25s?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ&iv_load_policy=3" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>

        <div id="vidtop-content">
          <div className="interact-box" style={{backgroundColor: this.state.focus?'rgba(10,10,10, 0.4)':'transparent', opacity:this.state.focus?'1':'0.4'}}>
            <h1>Italy Footage</h1>
            <div className="sf-logo"/>
              <form className="search" onSubmit={e=>this.search(e)}>
                <input placeholder="search for Italy footage" onFocus={_=>{this.handleFocus(true)}} onBlur={_=>{this.handleFocus(false)}} onChange={e=>this.handleChange(e.target.value)} value={this.state.search} type="text"/>
                <i className="fa fa-search fa-2x" onClick={e=>this.search(e)}></i>
              </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
