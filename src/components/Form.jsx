import React from "react"

class Form extends React.Component{
    render(){
        return(
            <form>

                <label>Date:</label>
                <input type="date"/>

                <label>Push Ups:</label>
                <input type="text"/>

                <label>Squats:</label>
                <input type="text"/>

                <label>Sit Ups</label>
                <input type="text"/>

                <label>Pull Ups:</label>
                <input type="text"/>


                <button>Enter</button>


            </form>
        )
    }
}

export default Form