import Component2 from "./Component2"
function Component1(props){
console.log(props, 'props')
    return<div>
        <h1>Componenet 1</h1>
    <Component2 />
    </div>
}

export default Component1