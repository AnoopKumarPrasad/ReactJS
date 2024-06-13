import React,{Component} from 'react' //import component class and react from react library
class Classcomponent extends Component{
    render(){
        return<h1> The climate is {this.props.climate} in {this.props.place} </h1>
    }
}
export default Classcomponent;