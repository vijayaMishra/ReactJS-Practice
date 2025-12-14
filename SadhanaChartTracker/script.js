
function SadhanaEntries() {
    const entry = {
        day: "sun",
        date: "14 Dec",
        wakeupTime: "6 AM",
        japaBegins: "4:30 AM",
        japaCompleted: "6:45 AM",
        numberOfRoundsChanted: 17
    };

    return <table>
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
                <td className="tableData">{entry.day}</td>
                <td className="tableData">{entry.date}</td>
                <td className="tableData">{entry.wakeupTime}</td>
                <td className="tableData">{entry.japaBegins}</td>
                <td className="tableData">{entry.japaCompleted}</td>
                <td className="tableData">{entry.numberOfRoundsChanted}</td>
            </tr>
        </tbody>

    </table>
}
function SadhanaInput() {
    return <div>
        <div className="inputSectionParentGrid">
            <input 
                placeholder="Day" 
                className="inputSection">
            </input>
            <input 
                placeholder="Date" 
                className="inputSection">
            </input>
        </div>

        <div className="inputSectionParentGrid">
            <input 
                placeholder="Wake-up Time" 
                className="inputSection">
            </input>
            <input 
                placeholder="Japa Begins at" 
                className="inputSection">
            </input>
        </div>

        <div className="inputSectionParentGrid">
            <input 
                placeholder="Japa Completed at" 
                className="inputSection">
            </input>
            <input 
                placeholder="No. of Rounds chanted" 
                className="inputSection">
            </input>
        </div>

        <div className="updateBtnParent">
            <button className="updateTrackerBtn">Update Tracker</button>
        </div>

    </div>
}


function App() {   

    return <div >
        <h2 className="main-heading">Sadhana Chart</h2>
        <p>I Speak personally to each one of you - HH Radhanath Swami Maharaj</p>
        <p>1st instruction: Be very attentive and concentrative in chanting your minimum rounds and more if possible, every day.</p>

        <SadhanaInput/>
        
        <br></br>
        <br></br>

        <SadhanaEntries></SadhanaEntries>

    </div>
}

// Render the component to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
