import React, { useState } from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import InputWithLabelGroup from "./InputWithLabelGroup";
import { StyledButton } from "../sharedStyledComponents.styled";

function PaymentSim() {
  const [inputText, setInputText] = useState({
    creditCardType: "",
    lastFourOfCard: "",
    balanceOwed: "",
    currentAPY: "",
    minMonthlyPayment: "",
    additionalFundsForDebt: "",
  });

  function handleChange(name: string, value: unknown) {
    setInputText({
      ...inputText,
      [name]: value,
    });
  }

  return (
    <StyledMainContainer>
      <StyledFormContainer>
        <InputWithLabelGroup
          label="What kind of card is it?"
          controlPlaceholder="Master Card, Visa, etc..."
          name="creditCardType"
          type="text"
          value={inputText.creditCardType}
          onChange={handleChange}
        />
        <InputWithLabelGroup
          label="Last 4 Digits of the card"
          controlPlaceholder="Last Four Digits of the Card"
          name="lastFourOfCard"
          type="text"
          value={inputText.lastFourOfCard}
          onChange={handleChange}
        />
        <InputWithLabelGroup
          label="How much do you owe on that card"
          controlPlaceholder="Balance Owed"
          name="balanceOwed"
          type="number"
          value={inputText.balanceOwed}
          onChange={handleChange}
        />
        <InputWithLabelGroup
          label="What is the current APY on that card"
          controlPlaceholder="Current APY %"
          name="currentAPY"
          type="number"
          value={inputText.currentAPY}
          onChange={handleChange}
        />
        <InputWithLabelGroup
          label="What is the minimum monthly payment on the card?"
          controlPlaceholder="Minimum Monthly Payment"
          name="minMonthlyPayment"
          type="number"
          value={inputText.minMonthlyPayment}
          onChange={handleChange}
        />

        <StyledAddTotalButtonsContainer>
          <StyledButton
            type="submit"
          >Add to Total</StyledButton>
          <StyledButton>Clear Fields</StyledButton>
        </StyledAddTotalButtonsContainer>

        <StyledCurrentCardDebtContainer>
          <label>Your total card debt is:</label>
          <StyledCurrentCardDebtDisplayBox>
            <span>$0</span>
          </StyledCurrentCardDebtDisplayBox>
          <StyledLargeButton>Display Debt Breakdown</StyledLargeButton>
        </StyledCurrentCardDebtContainer>

        <InputWithLabelGroup
          label="What additional funds can you apply to your debt?"
          controlPlaceholder="Additional funds for debt"
          name="additionalFundsForDebt"
          type="number"
          value={inputText.additionalFundsForDebt}
          onChange={handleChange}
        />
        <StyledLargeButton>Submit</StyledLargeButton>
        <StyledLargeButton>Calculate</StyledLargeButton>
        <StyledLargeButton>Clear all data</StyledLargeButton>
        <StyledLargeButton>Export the payment plan</StyledLargeButton>
      </StyledFormContainer>
    </StyledMainContainer>
  );
}

export default PaymentSim;

const StyledMainContainer = styled.main`
  text-align: center;
  background-color: #aec5ff;
  border: 0.5rem solid #9adbff;
  border-radius: 2rem;
  width: 45.2rem;
  margin-inline: auto;
  margin-top: 1.5rem;
`;

const StyledFormContainer = styled(Form)`
  margin-inline: auto;
  margin-bottom: 1.3rem;
`;

const StyledAddTotalButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 55%;
  margin-top: 0.5rem;
  margin-inline: auto;
`;

const StyledCurrentCardDebtContainer = styled.div`
  margin-top: 1.5rem;
`;

const StyledCurrentCardDebtDisplayBox = styled.div`
  border: 0.1rem solid black;
  background-color: #adadad;
  width: 55%;
  margin-inline: auto;
`;

const StyledLargeButton = styled(StyledButton)`
  margin-top: 0.5rem;
  margin-inline: auto;
  width: 55%;
`;
