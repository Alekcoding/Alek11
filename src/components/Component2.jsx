import {useContext} from "react";
import ColorContext from "../context";
function Component2(props){
    const data = useContext(ColorContext )
    console.log(data, "data")
    console.log(props, 'props Component 2')
    return<div>
        <h1>Componenet 2 </h1>
        {data}
        {props.color} 
        {props.name}
    </div>
}

export default Component2