import React, { Component } from 'react'
import { getRandomColor, newFunction } from './randomColorGenerator.js'



class Child extends Component {
  constructor(props) {
    super() 
    this.state = { //state should be same data type as what is being passed through
      bob: "hello", //random color is setting the state 
      childrenColor: "#00F"
    }
  }

  render() {
    console.log(this
      .state.childrenColor)

    return (
      <div onClick={() => this.props.handleColorChange(newFunction())} //function changeColor (in parent class with the argument of the child color (newChildColor))
        className="child"
        style={{backgroundColor: this.state.childrenColor}}
      ></div>
    )
  }
}





export default Child
