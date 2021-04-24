import combos from './data/combos'
import veg from './images/veg.png'
import nonveg from './images/nonveg.png'
function Item(props) {
    
    //props.this.state.price=props.item.price;
    
    return(
        <div className="item">
            <img src = {props.item.type==="veg"?veg:nonveg} alt="veg" style={{marginRight:"10px"}}></img>
            Customize "{props.item.item}"
            <br></br>
            <div className="price">
                &#8377;{props.item.price}
            </div>
        </div>
    )
}
export default Item;