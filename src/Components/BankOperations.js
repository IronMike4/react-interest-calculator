import React, { useState, useEffect } from "react";
import { Alert, Button, Form } from "react-bootstrap";

function BankOperations({ accountBalance, updateBalance }) {
  // State for input amount, interest rate, fee amount, and negative balance flag
  const [inputAmount, setInputAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [feeAmount, setFeeAmount] = useState("");
  const [isNegative, setIsNegative] = useState(false);

  // Effect to monitor account balance and update negative balance flag
  useEffect(() => {
    if (accountBalance >= 0) {
      setIsNegative(false);
    }
  }, [accountBalance]);

  // Handle deposit action
  const handleDepositClick = () => {
    if (!isNaN(inputAmount) && inputAmount !== "") {
      updateBalance((prevBalance) => prevBalance + parseFloat(inputAmount));
    }
    setInputAmount("");
  };

  // Handle withdrawal action
  const handleWithdrawClick = () => {
    if (!isNaN(inputAmount) && inputAmount !== "") {
      const newBalance = accountBalance - parseFloat(inputAmount);
      if (newBalance < 0) {
        setIsNegative(true);
      }
      updateBalance(newBalance);
    }
    setInputAmount("");
  };

  // Handle adding interest action
  const handleInterestClick = () => {
    if (!isNaN(interest) && interest !== "") {
      updateBalance(
        (prevBalance) =>
          prevBalance + prevBalance * (parseFloat(interest) / 100)
      );
    }
    setInterest("");
  };

  // Handle charging fee action
  const handleFeeClick = () => {
    if (!isNaN(feeAmount) && feeAmount !== "") {
      updateBalance((prevBalance) => prevBalance - parseFloat(feeAmount));
    }
    setFeeAmount("");
  };

  return (
    <div className="mt-4">
      {/* Show alert if balance is negative */}
      {isNegative && (
        <Alert
          variant="danger"
          onClose={() => setIsNegative(false)}
          dismissible
        >
          Warning: Your account balance is negative!
        </Alert>
      )}

      {/* Form for deposit and withdraw actions */}
      <Form>
        <Form.Group>
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            value={inputAmount}
            onChange={(e) => setInputAmount(e.target.value)}
          />
        </Form.Group>
        <div className="d-flex justify-content-between mt-2">
          {/* Deposit button */}
          <Button variant="primary" onClick={handleDepositClick}>
            Deposit
          </Button>
          {/* Spacer div for gap */}
          <div className="mx-2"></div>
          {/* Withdraw button */}
          <Button variant="primary" onClick={handleWithdrawClick}>
            Withdraw
          </Button>
        </div>
      </Form>

      {/* Form for adding interest */}
      <Form className="mt-4">
        <Form.Group>
          <Form.Label>Interest Rate (%)</Form.Label>
          <Form.Control
            type="number"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          />
        </Form.Group>
        {/* Add interest button */}
        <Button
          variant="primary"
          className="mt-2"
          onClick={handleInterestClick}
        >
          Add Interest
        </Button>
      </Form>

      {/* Form for charging fee */}
      <Form className="mt-4">
        <Form.Group>
          <Form.Label>Fee</Form.Label>
          <Form.Control
            type="number"
            value={feeAmount}
            onChange={(e) => setFeeAmount(e.target.value)}
          />
        </Form.Group>
        {/* Charge fee button */}
        <Button variant="primary" className="mt-2" onClick={handleFeeClick}>
          Charge Fee
        </Button>
      </Form>
    </div>
  );
}

export default BankOperations;
