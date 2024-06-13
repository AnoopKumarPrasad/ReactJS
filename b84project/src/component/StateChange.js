import React, { useEffect } from "react";
class StateChange extends Component {
    constructor(props) {
        super(props)
            this.state={
                count:0
            }
        }
        increment(){
            console.log(this.state.count)
            this.setState({count:this.state/count+1})
        }
       render(){
            return(
                <div>
                <button onClick={()=>this.increment()}>Click</button>
                <div> count-{this.state.count} </div>
                </div>
            )
        }
    }
export default UseEffects;