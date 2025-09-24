function TransactionHeader() {
    return (
        <div className="header">Transaction App</div>
    )
}

function App() {
    const [date, setDate] = React.useState("");
    const [day, setDay] = React.useState("");
    const [amount, setAmount] = React.useState(0);
    const [details, setDetails] = React.useState("")

    const [transactions, setTransactions] = React.useState([]);
    console.log("transactions", transactions);

    function addTransactionDetails() {
        const newTransaction = { date, day, amount, details };
        setTransactions([...transactions, newTransaction]);
        //clearing userInput after the new transaction is added
        setDate("");
        setDay("");
        setAmount(0);
        setDetails("");
    }

    function dateChangeHandler(event) {
        setDate(event.target.value);
    }

    function dayChangeHandler(event) {
        console.log("day : event.target.value", event.target.value);
        setDay(event.target.value);
    }

    function amountChangeHandler(event) {
        setAmount(event.target.value);
    }
    function detailsChangeHandler(event) {
        setDetails(event.target.value);
    }
    return (
        <div>
            <div className="transactionItem">
                <div>Date: </div>
                <input type="date" className="dateInput" onChange={dateChangeHandler}></input>
            </div>

            <div className="transactionItem">
                <div>Day: </div>
                <input className="inputLine" type="text" placeholder="Day" onChange={dayChangeHandler}></input>
            </div>

            <div className="transactionItem">
                <div>Amount: </div>
                <input className="inputLine" type="number" placeholder="Amount in Rs" onChange={amountChangeHandler}></input>
            </div>

            <div className="transactionItem">
                <div>Details: </div>
                <input className="inputLine" onChange={detailsChangeHandler} placeholder="Expense detail"></input>
            </div>

            <div className="addDetailsBtnParent">
                <button className="addDetailsBtn" onClick={addTransactionDetails}>Add details</button>
            </div>
            
            <div className="lineSeparation"></div>

            <div>
                Transaction details to appear here
            </div>
            
            {transactions.map((transaction, index) => {
                return <div key={index} className="transactionItem">
                    <p>{transaction.date}
                        {transaction.day}
                        {transaction.amount}
                        {transaction.details}    
                    </p>
                </div>
            })}
            
        </div>
    );
}

const rootElement = document.querySelector("#root");
ReactDOM.render(
    <div>
        <TransactionHeader />
        <App />
        {/* <App /> */}
    </div>,
    rootElement
);
