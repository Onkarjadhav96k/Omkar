import { Fragment } from "react"

let JsxExpresionRule3=()=>{
    let names=['ram','sham','sita','gita','meena']
    //1.For Map 2.For the filter
    
    return(
        // <div>
        //     <h1> JsxExpressionRule3</h1>
        //     <h4> we can not use all looping statement inside jsx exprssion .we can 
        //         only use the hof.all hof alre also not useful only those hof that can return the jsx
        //         <p>
        //             the names of students:{names.map((element,i)=>{
        //                 return <Fragment key={i}>{element}</Fragment>
        //             })}
        //         </p>
        //     </h4>

        // </div>
        // <div>
        //     <h1>JsxExpressionRule3</h1>
        //     <h4> we can not use all looping statement inside jsx exprssion .we can 
        //         only use the hof.all hof alre also not useful only those hof that can return the jsx
        //          <div>
        //          the names of students:{names.filter((element,i)=>{
        //                 return <Fragment key={i}>{element}</Fragment>
        //             })}
                    
        //          </div>
        //      </h4>
        // </div>
        <div>
            Return statement expecting if we have to return multiple it must be wrapped inside parenthesis
            Return statement must on the single line
        </div>
        //Return statement expecting if we have to return multiple it must be wrapped inside parenthesis
        //Return statement must on the single line
        //comoponentname first letter must be in uppercase jsx will include with component name
    )//filer and reduce
}
export default JsxExpresionRule3