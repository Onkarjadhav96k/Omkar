import { Component } from "react";

class ClassBasedCompEx1 extends Component{
    //we can declare state outside the costrustor
    constructor(){
        super();
        this.state={
            count: 0
        };
    }
    render(){
        return(
            <div>
               <h1> ClassBasedCompEx1</h1>
               <h1>Count : {this.state.count}</h1>
               <button
                onClick={()=>{
                    this.setState({count: this.state.count+1});
                    console.log(this.state);
                    
                }}
               ></button>
            </div>
        )
            
        
    }
}
export default ClassBasedCompEx1