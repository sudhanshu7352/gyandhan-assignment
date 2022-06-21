import "./past_results.css"

export const Past_results=()=>{

    const Date =JSON.parse(localStorage.getItem("Date"))
    console.log(Date,"da")
    return (
        <div className="past_div">
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Longitude</th>
                <th>Latitude</th>
                <th>Searched at</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
              {/* {Date.map(()=>(
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
              ))} */}
            </tbody>
        </table>
    </div>
    )
}