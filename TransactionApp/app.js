function TransactionHeader() {
    return (
        <div className="header">Transaction App</div>
    )
}

function App() {
    return (
        <div>
            <div className="displayBeside">
                <div>Date: </div>
                <input type="date"/>
            </div>

            <div className="displayBeside">
                <div>Day: </div>
                <input className="inputLine" type="text" placeholder="Day" />
            </div>

            <div className="displayBeside">
                <div>Amount: </div>
                <input className="inputLine" type="number" placeholder="Amount in Rs" />
            </div>

            <div className="displayBeside">
                <div>Details: </div>
                <input className="inputLine" />
            </div>

            <div className="lineSeparation"></div>
        </div>
    );
}

const rootElement = document.querySelector("#root");
ReactDOM.render(
    <div>
        <TransactionHeader />
        <App />
        <App />
    </div>,
    rootElement
);
