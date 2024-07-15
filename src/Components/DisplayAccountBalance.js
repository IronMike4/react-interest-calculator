import React from "react";
import { Card } from "react-bootstrap";

// Component to display the current account balance
function DisplayAccountBalance({ balance }) {
  return (
    // Card component to display balance information
    <Card className="text-center">
      <Card.Body>
        {/* Title of the card */}
        <Card.Title>Current Balance</Card.Title>
        {/* Display the balance, formatted to 2 decimal places */}
        <Card.Text>${balance.toFixed(2)}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DisplayAccountBalance;
