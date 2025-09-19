function TransactionHeader() {
    return (
        <div class="header">Transaction App</div>
    )
}

function App() {
    return (
        <div>
            <div>Date: </div>
            <input></input>
            <div>Amount: </div>
            <input></input>
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
