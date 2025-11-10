function TransactionHeader() {
    return (
        <div className="header">Transaction App</div>
    )
}

//CATCH is localStorage ALWAYS stores OBJECTS
function getInitialTransactions() {
    const transactionsInLocalStorage = localStorage.getItem("transactionsLocalStorage");
    
    let parsedTransactions = [];
    if(transactionsInLocalStorage) {
    parsedTransactions = JSON.parse(transactionsInLocalStorage); //I was earlier pushing it in array instead of =
    }
    console.log("typeof(JSON.parse(transactionsInLocalStorage)): ", typeof(JSON.parse(transactionsInLocalStorage))); //object, arrays are Objects in JS
    
    return parsedTransactions;
}

function App() {
    const today = new Date().toISOString().split('T')[0];
    const [date, setDate] = React.useState(today);
    const [day, setDay] = React.useState("");
    const [amount, setAmount] = React.useState(0);
    const [details, setDetails] = React.useState("")

    const [transactions, setTransactions] = React.useState(getInitialTransactions());
    console.log("transactions", transactions);

    const transactionsDateMap = [];
    
    function addTransactionDetails() {
        const newTransaction = { date, day, amount, details };
        console.log("BEFORE day: ", day, " date: ", date, " details: ", details);
        if( day && date && details) {
            setTransactions([...transactions, newTransaction]);
            //clearing userInput after the new transaction is added
            
            setAmount(0);
            setDetails("");
            localStorage.setItem("transactionsLocalStorage", JSON.stringify([...transactions, newTransaction]));
        } else {
            alert("Please fill in the details correctly!");
        }
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
                <input type="date" className="dateInput" value={date} onChange={dateChangeHandler}></input>
            </div>

            <div className="transactionItem">
                <div>Day: </div>
                <input className="inputLine" type="text" value={day} placeholder="Day" onChange={dayChangeHandler}></input>
            </div>

            <div className="transactionItem">
                <div>Amount: </div>
                <input className="inputLine" type="number" value={amount} placeholder="Amount in Rs" onChange={amountChangeHandler}></input>
            </div>

            <div className="transactionItem">
                <div>Details: </div>
                <input className="inputLine" onChange={detailsChangeHandler} value={details} placeholder="Expense detail"></input>
            </div>

            <div className="addDetailsBtnParent">
                <button className="addDetailsBtn" onClick={addTransactionDetails}>Add details</button>
            </div>
            
            <div className="lineSeparation"></div>

            <div>
                Transaction details to appear here
            </div>

            {transactions.map((transaction, index) => {
                return <div key={index} className="eachTransactionCard">
                    <div className="dateNDay">
                        <p className="transactionItem">{transaction.date}</p>
                        <p>{transaction.day}</p>
                    </div>
                    <div className="amtAndDetails">
                        <p className="transactionItem">{transaction.details}</p>
                        <p className="transactionItem">{transaction.amount}</p>         
                    </div>
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
