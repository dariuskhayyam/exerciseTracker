import React from "react"

class Table extends React.Component{
    render(){
        
        let {pushups, squats, situps, pullups, date} = this.props
        date = date.substring(0, 10)

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
                            <td>{pushups}</td>
                            <td>{squats}</td>
                            <td>{situps}</td>
                            <td>{pullups}</td>
                        </tr>
                    </tbody>
                    <br />
                </table>
                
            </div>
        )
    }
}

export default Table