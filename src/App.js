import React, { Component } from 'react'

import './App.css'

const ZooContext = React.createContext();

class ZooProvider extends Component{
  state = {
    food: "🥩"
  }

  render(){
    return (
      <ZooContext.Provider value={{
          state: this.state,
          moreMeat: ()=>this.setState({
            food: this.state.food + ' 🥩'
          })
        }}>
        {this.props.children}
      </ZooContext.Provider>
    )
  } 
}


class Loin extends Component {
  render () {
    return (
      <div>
        <ZooContext.Consumer>
          {(context)=>{
             return (
              <React.Fragment>
                <h1> 🦁 I'm HUNGRY, I want to eat {context.state.food} </h1>
                <button onClick={context.moreMeat}>Give me more 🥩</button>

              </React.Fragment>
             )
          }}
        </ZooContext.Consumer>
      </div>
    )
  }
}

class LoinCage extends Component {
  render () {
    return (<Loin />)
  }
}

class Zoo extends Component {
  render () {
    return (
      <React.Fragment>
        <div className='Camel-Cage' />
        <div className='Crocodile-Cage' />

        <LoinCage food = {this.props.food} />

        <div className='Deer-Cage' />
        <div className='Eagle-Cage' />
      </React.Fragment>
    )
  }
}
class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={require('./loin.jpg')} alt='zoo' style={{width: '200px'}} />
          <h1 className='App-title'>Zoo food Application</h1>
          <p>Using React 16.3 context-api</p>
        </header>
        <ZooProvider>
          <Zoo/>
        </ZooProvider>
      </div>
    )
  }
}

export default App
