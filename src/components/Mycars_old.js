import React, { Component } from "react";
// import Cars from "./Cars";
// import Car from './Cars';
import Wrapper from './Wrapper';
import MyHeader from "./MyHeader";

const Car = ({children,color}) => {

    let colorInfo = "";

    if (color) {
        colorInfo = color;
    } else {
        colorInfo = 'neant';
    }
    if(children){
        return(
            <Wrapper>
                <div>
                    <p>Marque : {children} </p>
                    {/* {color ? <p>Couleur : {color}</p> : <p>Couleur : néant</p>} ALTERNATIVE */}
                    {/* <p>Couleur :{color ? color : 'néant' }</p> ALTERNATIVE */}
                    <p>Couleur: {colorInfo}</p>
                </div>
            </Wrapper>
        )
    }
    return(
        <Wrapper>
            <div style={ {backgroundColor: 'pink', width: '400px',padding: '10px',margin: '5px auto'} }>
                <p>Pas de data ! </p>
            </div>   
        </Wrapper>
    )
  
}

class Mycars extends Component{
    
    noCopy = () => {
        alert('merci de ne pas copierle texte');
    }
   
    state = {
        cars: ['Ford','Mercedes','Peugeot'] 
    };
    render(){
        
        const {title,color} = this.props;
        return( 
            <div className="myCarsComponent">
                
                    {/* <Wrapper>
                        <MyHeader color={color} title={title}/>
                    </Wrapper> */}
                    <h1>{title} </h1>
                    <p onCopy={this.noCopy}>lorem ipsum, dolor sit amet sonsectetur adipisicing elit.</p>
                    <Car color="red" >{this.state.cars[0]}</Car>
                
                
                    <Car>{this.state.cars[1]}</Car>
                
                    <Car color="green">{this.state.cars[2]}</Car>
                
                
            </div>
        )
    }
}
export default Mycars;