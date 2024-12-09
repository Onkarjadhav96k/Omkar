let JsxExpressionRule2=()=>{
    let api={};
    let un='xyz'
    let pass='123'
    return(
        // <div>
        //     Condtionals statements are allowed inside the jsx Expression if else statements are 
        //     not allowed ternary statements and short circuit are allowed
        // </div>
        // <div>
        //     <h1>JsxExpresionRule2</h1>
        //     <h1>
        //         short circuit && operator .if first statement will true then second statement will be checked
        //         {/* {Array.isArray(api) && api.map((val)=>{
        //             console.log(val);
                    
        //         })} */}
        //     </h1>
        // </div>
        <div>
            <h4>In short circuit || operator if first statement is true it will not check next condtion</h4>
            {un=='xyz' && pass=='123' && 'welcome user' || 'wrong creditanls'}
        </div>
        
    )
}
export default JsxExpressionRule2