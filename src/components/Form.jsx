import React from "react"

class Form extends React.Component{

    constructor(){
        super()
        this.state = {
            date: "",
            pushups: "",
            squats : "",
            situps : "",
            pullups : ""
        }
    }

    dateHandler = (event) => {
        let {value} = event.target
        this.setState({
            date: value
        })
    }

    pushupsHandler = (event) => {
        let {value} = event.target
        this.setState({
            pushups: value
        })
    }

    squatsHandler = (event) => {
        let {value} = event.target
        this.setState({
            squats: value
        })
    }

    situpsHandler = (event) => {
        let {value} = event.target
        this.setState({
            situps: value
        })
    }

    pullupsHandler = (event) => {
        let {value} = event.target
        this.setState({
            pullups: value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        let {date, pushups, squats, situps, pullups} = this.state
        this.props.loadData(this.state)

        fetch("http://exercise1tracker1api.herokuapp.com/newWorkout", {
            method: "POST",
            headers: {
               "Content-Type" : "application/json"
            },
            body: JSON.stringify({
               date,
               pushups,
               squats,
               situps,
               pullups
            })
        })
        .then(response => response.json)
        .catch(err => console.log(err))

        this.setState({
            date: "",
            pushups: "",
            squats : "",
            situps : "",
            pullups : ""
        })
    }

    render(){

        return(
            <form onSubmit={this.submitHandler}>

                <label>Date:</label>
                <input type="date" onChange={this.dateHandler}/>

                <label>Push Ups:</label>
                <input type="text" onChange={this.pushupsHandler} value={this.state.pushups}/>

                <label>Squats:</label>
                <input type="text" onChange={this.squatsHandler} value={this.state.squats}/>

                <label>Sit Ups</label>
                <input type="text" onChange={this.situpsHandler} value={this.state.situps}/>

                <label>Pull Ups:</label>
                <input type="text" onChange={this.pullupsHandler} value={this.state.pullups}/>


                <button>Enter</button>


            </form>
        )
    }
}

export default Form