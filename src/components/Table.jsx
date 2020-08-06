import React from "react"

class Table extends React.Component{
    render(){
        return(
            <div>
                <table>
                    <tr>
                        <th>date:</th>
                        <th>push ups:</th>
                        <th>Squats:</th>
                        <th>Sit ups:</th>
                        <th>Pull Ups:</th>
                    </tr>
                    <tr>
                        <td>05-08-2020</td>
                        <td>15</td>
                        <td>61</td>
                        <td>60</td>
                        <td>10</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Table