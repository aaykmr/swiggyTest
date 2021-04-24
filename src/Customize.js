import Item from './Item'
import combos from './data/combos'
import Menu from './Menu'
import Selection from './Selection'
import Total from './Total'
function Customize(props) {
    let item = combos[0];
    let menu = ["Choice of 1st Sub","Choice of 2nd Sub","Choice of Bread","Choice of Preparation","Choice of 1st Free cookie","Choice of 2nd Free cookie","Choice of Sauce (Any 3)","Choice of Vegetables"];
    return(
        <div className="customize">
            <div className="sec1">
                <Item item={item} this={props.this}/>
                <button className="close">X</button>
            </div>
            <br></br>
            <Menu menu={menu} this={props.this}/>
            <Selection menu={menu} this={props.this}/>
            <Total this={props.this}/>


        </div>
    )
}

export default Customize;