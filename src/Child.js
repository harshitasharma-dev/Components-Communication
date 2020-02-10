import React, { Component } from 'react'


class Child extends Component{
    render(){        
        return(
            <div>
                <div onClick={()=>this.props.functionToPass("harshita")}>{this.props.value}</div>
            </div>
        )
    }
}

export default Child
