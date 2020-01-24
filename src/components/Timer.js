import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state={timeUpd:new Date}
    }
    
    componentDidMount(){
        this.setState({
            timeUpd:new Date
        })
    }
    
    
    render() {
        return (
            <div>
                <p>Time</p>
                <p>{this.state.timeUpd.toTimeString()}</p>
            </div>
        )
    }
}
