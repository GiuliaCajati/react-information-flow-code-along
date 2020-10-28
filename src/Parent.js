import React from "react"

class Parent extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: "Yes"
        }
    }
    
    render() {
        return (
            <div>
                <h1>What is a state? {this.state.answer </h1>
            </div>
        )
    }
}

export default App

















import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
class Parent extends Component {

  constructor() {
    super() //calls the funcrtion with the same name in the parent class
    //this.state is an object with key value 
    this.state = { //state should be same data type as what is being passed through
      parentColor: getRandomColor(), //random color is setting the state 
      childrenColor: '#FFF'
    }
  }

  the same as above 
  state={
    color:getRandomColor() 
  }

  //passing this function to child as a promp
  
  changeColor = (newChildColor) => { //set state function: function allows us to change state (aka color)
    this.setState({
      parentColor: getRandomColor(),
      childrenColor: newChildColor
    })
  }


  render() { //returning the state (or what is given)
   
    return (
      <div className="parent" style={{backgroundColor: this.state.parentColor}}>
        <Child color={this.state.childrenColor} handleColorChange= {this.changeColor} /> {/*passing function as prop - callback function */}
        <Child color={this.state.childrenColor} handleColorChange= {this.changeColor}/>
        <Child color={this.state.childrenColor} handleColorChange= {this.changeColor}/>
        <Child color={this.state.childrenColor} handleColorChange= {this.changeColor}/>

      </div>
    )
  }
}

export default Parent
