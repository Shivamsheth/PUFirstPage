

import React, { Component } from 'react'


export class Crd extends Component {
  

  render() {
    return (
      <div className='card'>
        <h2>Register Here !</h2>
        <form>
            <label>Enter Your Name :</label><br/>
            <input type='text' className='name' placeholder='Enter Your Name'/><br/>
            <label>Enter Your Email :</label><br/>
            <input type='text' className='name' placeholder='Enter Your E-mail'/><br/>
            <label>Enter Your City :</label><br/>
            <input type='text' className='name' placeholder='Enter Your City'/>
            <br/>

            <button className='btn'>Submit</button>

        </form>
      </div>
    )
  }
}

export default Crd
