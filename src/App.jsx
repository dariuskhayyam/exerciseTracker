import React from "react"
import "./components/Styles.css"
import Header from "./components/Header"
import Form from "./components/Form"
import Content from "./components/Content"

class App extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Form />
                <Content />
            </div>
        )
    }
}

export default App