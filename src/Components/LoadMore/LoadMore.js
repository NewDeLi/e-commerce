import React from "react";
import FormButton from "../forms/FormButton/FormButton";

export default function LoadMore({ setCurrentLimit }) {
  const handleLimit = () => {
    setCurrentLimit((prevValue) => prevValue + 3);
  };
  return (
    <FormButton fullWidth onClick={handleLimit}>
      Load more
    </FormButton>
  );
}
