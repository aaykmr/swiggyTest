import veg from './images/veg.png'
import nonveg from './images/nonveg.png'
import { useState } from 'react'
function Addons(props) {
    var sum=0;
    var flag1=0;
    var flag2=0;
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
    
     const chkcontrol = async function(e)  {
        //e.preventDefault();
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
        
        let form = op[props.menu]+""+props.menu;
        if(form==='subChoice0'){
            flag1++;
        }
        if(form==='subChoice1'){
            flag2++;
        }
        if(form.includes('prepChoice')){
            //console.log(props.options['prepChoice'][parseInt(e.target.id.substring(e.target.id.indexOf('-')+1,))-1].price);
            //props.this.state.price+=props.options['prepChoice'][parseInt(e.target.id.substring(e.target.id.indexOf('-')+1,))-1].price;
            props.this.handlePrice(371+props.options['prepChoice'][parseInt(e.target.id.substring(e.target.id.indexOf('-')+1,))-1].price)
            //console.log(parseInt(e.target.id.substring(e.target.id.indexOf('-')+1,)));
        }
        
        console.log(flag1+" "+flag2+" "+form);


        if(form.includes('sauceChoice')  && e.target.type==='checkbox' && e.target.checked===false ){
            sum--;
            console.log(sum);
            
        }
        else if(form.includes('sauceChoice')  && e.target.type==='checkbox' && e.target.checked===true ){
            sum++;
            if(sum>3){
                e.target.checked=false;
                sum--;
                window.alert("You can choose only 3 sauces");
                return;
            }
        }
        
        console.log(document.getElementById(e.currentTarget.id).checked);
        
    }
    
    if(document.getElementById('subChoice0-1')){
        document.getElementById('subChoice0-1').checked=true;
    }
    if(document.getElementById('subChoice1-1')){
        document.getElementById('subChoice1-1').checked=true;
    }
    
    console.log(props.options[op[props.menu]]);
    return(<form name={op[props.menu]+""+props.menu}>

        {props.options[op[props.menu]].map(ele => (
            
            <li id={"con"+ele.id} key={"con"+ele.id}>
                <img src = {ele.type==="veg"?veg:nonveg} alt="veg" style={{marginRight:"10px"}}></img>

                <input type={props.menu<=5?"radio":"checkbox"} id={op[props.menu]+props.menu+"-"+ele.id} name="ckb" value={parseInt(ele.id)} onClick={chkcontrol}></input>
                {ele.name}
               
            </li>
        ))
            
        }
        
        </form>
    )
}



export default Addons;