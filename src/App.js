import React, { useState } from "react";
import { Container } from "react-bootstrap";
import DisplayAccountBalance from "./Components/DisplayAccountBalance";
import BankOperations from "./Components/BankOperations";

// Main App component
function App() {
  // State to hold the current balance
  const [balance, setBalance] = useState(0);

  return (
    // Container for the app content
    <Container className="mt-5">
      {/* App title */}
      <h1>Banking App</h1>
      {/* Component to display the current account balance */}
      <DisplayAccountBalance balance={balance} />
      {/* Component to handle bank operations like deposit, withdraw, etc. */}
      <BankOperations accountBalance={balance} updateBalance={setBalance} />
    </Container>
  );
}

export default App;
