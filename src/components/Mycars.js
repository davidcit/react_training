import { Component } from 'react'
import Car from './Cars'
import Welcome from './Welcome'

class Mycars extends Component {

    state = {
        voitures : [
            {name: "Ford",color: "red",year: 2022},
            {name: "Mercedes",color: "black",year: 2023},
            {name: "Peugeot",color: "green",year: 2018},
        ],
        titre: 'Mon Catalogue Voitures 2'
    }
    addTenYears = () => {
        console.log('Object');
        const updatedState = this.state.voitures.map((param) => {
            return param.year -= 10;
        });
        this.setState({
            updatedState,
        })
    }
    getAge = (arg) => {
        const now = new Date().getFullYear();
        const age = now - arg;
        //ans , an , si 0 rien
        let frenchYearStr = '';
        if(age === 1 ){
            frenchYearStr = ' an'
        }else if (age > 1){
            frenchYearStr = ' ans'
        }
        return `${age} ${frenchYearStr} `// CONCATENATION 
        // return age + frenchYearStr;
    }
    render() {
        
        const [ford,mercedes,peugeot] = this.state.voitures;
        // console.log([ford,mercedes,peugeot]);

        const year = new Date().getFullYear();
        return (
            <div>
                <Welcome></Welcome>
                <h1>{this.state.titre}</h1>
                <button onClick={this.addTenYears}> +10 ans</button>
                {
                    // <div>
                    //     <Car nom={ford.name} color={ford.color} year={year -ford.year + ' ans'}  />
                    //     <Car nom={mercedes.name} color={mercedes.color} year={year -mercedes.year + ' ans'}  />
                    //     <Car nom={peugeot.name} color={peugeot.color} year={year -peugeot.year + ' ans'}  />
                    // </div>
                
                    // <Car 
                    //     color={this.state.voitures[0].color} 
                    //     year={year -this.state.voitures[0].year + ' ans'} >
                    //     {this.state.voitures[0].name}
                    // </Car>
                    // <Car color={this.state.voitures[1].color} year={year - this.state.voitures[1].year + ' ans'} >{this.state.voitures[1].name}</Car>
                    // <Car color={this.state.voitures[2].color} year={year - this.state.voitures[2].year + ' ans'} >{this.state.voitures[2].name}</Car> 
                
                }
                {
                    this.state.voitures.map(({name,color,year},index) => {
                        return(
                            <div key={index}>
                            <Car 
                                nom={name} 
                                color={color} 
                                year={this.getAge(year)} 
                            />
                            </div>
                            // .MAP() IS LIKE FOREACH FOR THIS CASE 
                        )
                    })
                }
            </div>
           
        )
    }
}

export default Mycars