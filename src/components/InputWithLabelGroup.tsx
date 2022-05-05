import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";

interface InputWithLabelGroupInterface {
  label: string;
  name: string;
  controlPlaceholder: string;
  value?: unknown;
  onChange: (name: string, value: unknown) => void;
  type: string;
}

function InputWithLabelGroup({
  label,
  controlPlaceholder,
  name,
  type,
  onChange,
  value,
}: InputWithLabelGroupInterface) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    onChange(name, value);
  }

  return (
    <StyledFormGroup>
      <Form.Label>{label}</Form.Label>
      <StyledFormInputField
        placeholder={controlPlaceholder}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </StyledFormGroup>
  );
}

export default InputWithLabelGroup;

const StyledFormInputField = styled(Form.Control)`
  width: 55%;
  border: 0.1rem solid;
  border-radius: 1rem;
  margin-inline: auto;
  font-size: 1.6rem;
`;

const StyledFormGroup = styled(Form.Group)`
  margin-top: 1.5rem;
  margin-inline: auto;
`;
