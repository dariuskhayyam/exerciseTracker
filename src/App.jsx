import React from "react"
import "./components/Styles.css"
import Header from "./components/Header"
import Form from "./components/Form"

class App extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Form />
            </div>
        )
    }
}

export default App