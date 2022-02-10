import Heading from "./Heading";
import Text from "./Text";

function Product(props){
    return <div>
        <Heading heading={props.heading}/>
        <Text text={props.text}/>
    </div>
}

export default Product;