import { Component } from "react";

class ClassBasedIncrEX1 extends Component{
    constructor(){
        super();
        this.state={
            count:0
        };
    }
    
    render(){
        return(
            <div>
                <h2>ClassBasedIncrEc1</h2>
                <h3>Count : {this.state.count}</h3>
                <button onClick={()=>{
                    this.setState({count:this.state.count+1})
                    console.log(this.state);
                    
                }}>Increment</button>
            </div>
        )
    }
}
export default ClassBasedIncrEX1