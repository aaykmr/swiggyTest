import options from './data/options';
import Addons from './Addons';
function Selection(props){
    
    
    
    return(
        <div className="selection">
            {
                props.menu.map(ele => (
                    <><div className="item menuItem" key={ele}>
                        {ele}
                    </div>
                    <div className="addons" key={ele+"child"}>
                        <ul><Addons options={options} menu={props.menu.indexOf(ele)} this={props.this}/></ul>
                    </div></>
                ))
            }
        </div>
    )
}

export default Selection;