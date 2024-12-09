import React,{Component} from 'react'
import ClassBasedCompEx1 from './ClassBasedCompEx1'
import ClassBasedIncrEX1 from './ClassBasedIncrEX1'
import DeleteClassBasedComp from './DeleteClassBasedComp'

export default class ClassBasedComponents extends Component{
    render(){
        return(
            <div>
               {/* <ClassBasedCompEx1> </ClassBasedCompEx1>   */}
               {/* <ClassBasedIncrEX1></ClassBasedIncrEX1> */}
              <DeleteClassBasedComp></DeleteClassBasedComp>
            </div>
        )
    }
}
//render:It is used to render method jsx on the ui                                     