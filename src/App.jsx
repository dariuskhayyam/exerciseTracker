import React from "react"
import "./components/Styles.css"
import Header from "./components/Header"
import Form from "./components/Form"
import Content from "./components/Content"
import data from "./components/tableData"

class App extends React.Component{

    constructor(){
        // eslint-disable-next-line
        let {date, pushups, squats, sitUps, pullups} = data

        super()
        this.state = {
            workouts: [

            ]
        }
    }

    componentDidMount() {
        fetch("https://exercise1tracker1api.herokuapp.com/")
        .then(response => response.json())
        .then(workout => {
            this.setState({workouts: workout.reverse()})
        })


    }

    loadData = ({date, pushups, squats, situps, pullups}) => {

        let newWorkout = {
            date, 
            pushups, 
            squats, 
            situps, 
            pullups
        }

        let arr = this.state.workouts

        for(let i = arr.length; i > 0; i--){
            arr[i] = arr[i - 1]
        }

        arr[0] = newWorkout

        this.setState({
            workouts: arr
        })
    }

    render(){
        return(
            <div>
                <Header />
                <Form loadData={this.loadData}/>
                <Content data={this.state.workouts}/>
            </div>
        )
    }
}

export default App