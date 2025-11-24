
function SadhnaCard() {    
    return <div >
        <h2 className="main-heading">Sadhana Card</h2>
        <h5>Q. What is that one thing which pleases Maharaj?</h5>
        <h5>A. Following the authorities, focused in Sadhana and Hearing</h5>
        
        <input placeholder="Day"></input><input placeholder="Date"></input><input placeholder="Wake-up Time"></input>
        <input placeholder="Japa Begins at"></input><input placeholder="Japa Completed at"></input>

        <button className="updateTrackerBtn">Update Tracker</button>
        <br></br>

        <table>
            <thead>    
                <tr>
                    <th>Day</th>
                    <th>Date</th>
                    <th>Got-up @ </th>
                    <th>Jap start-time</th>
                    <th>Jap end-time</th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                    <td>Mon</td>
                    <td>17-Nov-25</td>
                    <td>3:55 AM</td>
                    <td>4:30 AM</td>
                    <td>9 PM</td>
                </tr>
            
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        
        </table>
    </div>
}

// Render the component to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SadhnaCard />);
