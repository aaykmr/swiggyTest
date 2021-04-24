
function Total(props){

    
    return(
        <div className="total">
            Total &#8377;{props.this.state.price}
            <button className="addItem">ADD ITEM</button>
        </div>
    )
}

export default Total;