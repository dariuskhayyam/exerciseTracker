import React from "react"
import Table from "./Table"

class Content extends React.Component{

    render(){

        let content = this.props.data.map(current => <Table 
                    id = {current.id}
                    date = {current.date}
                    pushups = {current.pushups}
                    squats =  {current.squats}
                    situps =  {current.situps}
                    pullups =  {current.pullups}
                    />
                    
        )

        return(
            <div className="container">
                {content}
            </div>
        )
    }
}

export default Content