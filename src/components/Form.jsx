import React from "react"

class Form extends React.Component{

    constructor(){
        super()
        this.state = {
            date: "",
            pushUps: "",
            squats : "",
            sitUps : "",
            pullUps : ""
        }
    }

    dateHandler = (event) => {
        let {value} = event.target
        this.setState({
            date: value
        })
    }

    pushUpsHandler = (event) => {
        let {value} = event.target
        this.setState({
            pushUps: value
        })
    }

    squatsHandler = (event) => {
        let {value} = event.target
        this.setState({
            squats: value
        })
    }

    sitUpsHandler = (event) => {
        let {value} = event.target
        this.setState({
            sitUps: value
        })
    }

    pullUpsHandler = (event) => {
        let {value} = event.target
        this.setState({
            pullUps: value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        // let {date, pushUps, squats, sitUps, pullUps} = this.state
        console.log(this.state)
        this.props.loadData(this.state)
        this.setState({
            date: "",
            pushUps: "",
            squats : "",
            sitUps : "",
            pullUps : ""
        })
    }

    render(){

        return(
            <form onSubmit={this.submitHandler}>

                <label>Date:</label>
                <input type="date" onChange={this.dateHandler}/>

                <label>Push Ups:</label>
                <input type="text" onChange={this.pushUpsHandler} value={this.state.pushUps}/>

                <label>Squats:</label>
                <input type="text" onChange={this.squatsHandler} value={this.state.squats}/>

                <label>Sit Ups</label>
                <input type="text" onChange={this.sitUpsHandler} value={this.state.sitUps}/>

                <label>Pull Ups:</label>
                <input type="text" onChange={this.pullUpsHandler} value={this.state.pullUps}/>


                <button>Enter</button>


            </form>
        )
    }
}

export default Form