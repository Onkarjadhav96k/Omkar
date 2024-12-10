import { useState } from "react"


    // let UseStateEx1=()=>{
    //     let [state,setState]=useState(0)
    //     return(
    //         <div>
    //             <h1>UseStateEx1</h1>
    //             <h1>Count: {state}</h1>
    //             <button onClick={()=>{setState(state+1)}}>Increment</button>
    //         </div>
    //     )
    // }
    //how useState internally look like
    let UseStateEx1=(a)=>{
        let setMyState=(a)=>{
            //logic for modification in a
            
        }
        return[a,setMyState]
    }
    let [state,setState]=UseStateEx1(0)
    console.log(state);
    
    

export default UseStateEx1