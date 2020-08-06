import React from "react"
import Table from "./Table"

class Content extends React.Component{

    render(){

        let content = this.props.data.map(current => <Table 
                    date = {current.date}
                    pushUps = {current.pushUps}
                    squats =  {current.squats}
                    sitUps =  {current.sitUps}
                    pullUps =  {current.pullUps}
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