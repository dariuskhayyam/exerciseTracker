import React from "react"

class Table extends React.Component{
    render(){
        
        let {pushUps, squats, sitUps, pullUps, date} = this.props

        return(
            <div>
                <table className="contentTable">
                    <thead>
                        <tr>
                            <th>date:</th>
                            <th>push ups:</th>
                            <th>Squats:</th>
                            <th>Sit ups:</th>
                            <th>Pull Ups:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{date}</td>
                            <td>{pushUps}</td>
                            <td>{squats}</td>
                            <td>{sitUps}</td>
                            <td>{pullUps}</td>
                        </tr>
                    </tbody>
                    <br />
                </table>
                
            </div>
        )
    }
}

export default Table