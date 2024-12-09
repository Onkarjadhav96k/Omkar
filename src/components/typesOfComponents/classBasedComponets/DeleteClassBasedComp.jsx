import { Component } from "react";

class DeleteClassBasedComp extends Component{
    constructor(){
        super();
        this.state={
            count:1
        }
    }
    render(){
        
        return(
            <div>
                <h3>DeleteClassBasedComp</h3>
                <h4>Count: {this.state.count}</h4>
                <button onClick={()=>{
                    this.setState({count:this.state.count*2})
                }}>Increment</button>
            </div>
        )
    }
}
export default DeleteClassBasedComp