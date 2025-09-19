function TransactionHeader() {
    return (
        <div className="header">Transaction App</div>
    )
}

function App() {
    return (
        <div>
            <div>Date: </div>
            <input type="date" />

            <div>Day: </div>
            <input type="text" placeholder="Day" />

            <div>Amount: </div>
            <input type="number" placeholder="Amount in Rs" />

            <div>Details: </div>
            <input />

            <br />
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
