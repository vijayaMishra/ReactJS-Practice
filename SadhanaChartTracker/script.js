
function SadhnaCard() {    
    return <div >
        <h2 className="main-heading">Sadhana Card</h2>
        <h5>Q. What is that one thing which pleases Maharaj?</h5>
        <h5>A. Following the authorities, focused in Sadhana and Hearing</h5>
        <div className="one-liner">
            <h3 className="day">Day</h3>
            <h3 className="date" type="date">Date</h3>
            <h3 className="day">Got-Up Time</h3>
            <h3 className="day">Japa-Time</h3>
            {/* <input type="time"></input> */}
        </div>
    </div>
};

// Render the component to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SadhnaCard />);
