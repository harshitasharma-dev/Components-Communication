import React, { Component } from 'react'
import Child from './Child'

// in this component, we will first render a Component and we will call that component as a Child
class Parent extends Component{

    //in this constructor function we will define our states 
    constructor(props){
        super(props);
        this.state={
            greeting:"Welcome",
            isDisplay:false,
            name:""
        }
    }

    valueFunction = (value)=>{
        console.log("in function", value);
        this.setState({
            isDisplay:true,
            name:value
        })
    }
    
    render(){
        console.log("State", this.state);

        //in render we will be defining this function , which
        return(
            <div>
                Hello
                <Child value={this.state.greeting} functionToPass={(a)=>this.valueFunction(a)}/>
                {this.state.isDisplay===true ? <div>{this.state.name}</div>:null }
            </div>
        )
    }
}

export default Parent
