
function Menu(props){

    function handleClick(e){
       
        e.preventDefault();

        let op={
            0:"subChoice",
            1:"subChoice",
            2:"breadChoice",
            3:"prepChoice",
            4:"cookieChoice",
            5:"cookieChoice",
            6:"sauceChoice",
            7:"vegChoice"
        }
        console.log(document[(op[parseInt((e.target.id).substring((e.target.id).indexOf('choice')+6,))]+(e.target.id).substring((e.target.id).indexOf('choice')+6,))])
        document[(op[parseInt((e.target.id).substring((e.target.id).indexOf('choice')+6,))]+(e.target.id).substring((e.target.id).indexOf('choice')+6,))].scrollIntoView({ behavior: 'smooth', block: 'center' })
        for(let i=0;i<document.getElementsByClassName("menuBtn").length;i++){
            document.getElementsByClassName("menuBtn")[i].className="menuBtn";
        }
        document.getElementById(e.target.id).className="menuBtn selected";
    }   

    return (
        <div className="menu">
            {
                props.menu.map(ele => (
                    <button className="menuBtn" id={"choice"+props.menu.indexOf(ele)} key={ele} onClick={handleClick}>{ele}</button>
                    
                ))
            }
        </div>
    )
}
export default Menu;