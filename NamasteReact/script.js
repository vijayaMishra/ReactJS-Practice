
function SadhnaCard() {    
    return <div >
        <h3>Sadhana Card</h3>
        <div class="one-liner">
            <h4>Day</h4>
            <h4 type="date">Date</h4>
            <input type="time"></input>
            <input type="time"></input>
        </div>
    </div>
};

// Render the component to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SadhnaCard />);
