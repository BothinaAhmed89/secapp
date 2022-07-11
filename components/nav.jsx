import React,{Component}  from "react";
import logo from '../images/512.jpg'
class Nav extends Component {
    state = { 
        imagelink:logo,
        count:0,
        plu:10,
     } 
     inc = ()=>{
        this.setState({
        count:this.state.count+1,
        })
        console.log(this.state.count);
     }
     pls=num =>{
        this.setState({
            plu:this.state.plu+num
        })
        console.log(this.state.plu)
     }
     min=(e)=>{
        console.log(e.target)
     }
    render() { 
        return (
            <>
            <img src={this.state.imagelink} alt="damged"  />
            <p className="p1">this is image</p>
            <h3 style={{color:'blue',backgroundColor:'yellowgreen',marginLeft:30,width:250 ,padding:10}}>
                this is h3
            </h3>
            <button onClick={this.inc}>Increament</button>
            <button onClick={()=>{this.pls(2)}}>add</button>
            <button onClick={(e)=>{this.min(e)}}>min</button>
            </>
        );
    }
}
 
export default Nav;