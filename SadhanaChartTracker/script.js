
function SadhnaCard() {    
    return <div >
        <h2 className="main-heading">Sadhana Card</h2>
        <p>I Speak personally to each one of you - HH Radhanath Swami Maharaj</p>
        <p>1st instruction: Be very attentive and concentrative in chanting your minimum rounds and more if possible, every day.</p>

        <div className="inputSectionParentGrid">
            <input placeholder="Day" className="inputSection"></input>
            <input placeholder="Date" className="inputSection"></input>
        </div>

        <div className="inputSectionParentGrid">
            <input placeholder="Wake-up Time" className="inputSection"></input>
            <input placeholder="Japa Begins at" className="inputSection"></input>
        </div>

        <div className="inputSectionParentGrid">
            <input placeholder="Japa Completed at" className="inputSection"></input>
            <input placeholder="No. of Rounds chanted" className="inputSection"></input>
        </div>

        <div className="updateBtnParent">
            <button className="updateTrackerBtn">Update Tracker</button>
        </div>

        <br></br>
        <br></br>

        <table>
            <thead>    
                <tr>
                    <th>Day</th>
                    <th>Date</th>
                    <th>Wake up time</th>
                    <th>Japa begun at</th>
                    <th>Japa done time</th>
                    <th>No. of rounds chanted</th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                    <td className="tableData">Mon</td>
                    <td className="tableData">17-Nov-25</td>
                    <td className="tableData">3:55 AM</td>
                    <td className="tableData">4:30 AM</td>
                    <td className="tableData">9 PM</td>
                    <td className="tableData">17</td>
                </tr>
            
                <tr>
                    <td className="tableData"></td>
                    <td className="tableData"></td>
                    <td className="tableData"></td>
                    <td className="tableData"></td>
                    <td className="tableData"></td>
                    <td className="tableData"></td>
                </tr>
            </tbody>
        
        </table>
    </div>
}

// Render the component to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SadhnaCard />);
