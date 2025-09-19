function TransactionHeader() {
    return (
        <div class="header">Transaction App</div>
    )
}

function App() {
    return (
        <div>
            <div>Date: </div>
            <input type="date"></input>

            <div>Day: </div>
            <input type="text" placeholder="Day"></input>

            <div>Amount: </div>
            <input type="number" placeholder="Amount in Rs"></input>

            <div>Details: </div>
            <input></input>
        </div>
    )
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
