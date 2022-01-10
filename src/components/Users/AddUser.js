import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import "./AddUser.css";
import useInput from "../hooks/use-input";
import Input from "../UI/Input";

const AddUser = (props) => {
  const {
    value: enteredName,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    isValid: nameIsValid,
    hasError: nameHasError,
    reset: nameReset,
  } = useInput((value) => value.trim().length >= 3);

  const {
    value: enteredAge,
    valueChangeHandler: ageChangeHandler,
    inputBlurHandler: ageInputBlurHandler,
    isValid: ageIsValid,
    hasError: ageHasError,
    reset: ageReset,
  } = useInput((age) => age >= 10 && age <= 80);

  let formIsValid = false;

  if (nameIsValid && ageIsValid) {
    formIsValid = true;
  }
  const addUserHandler = (event) => {
    event.preventDefault();

    console.log(enteredName);
    console.log(enteredAge);

    const user = {
      id: Math.random(),
      name: enteredName,
      age: enteredAge,
    };

    props.onAddUser(user);
    nameReset();
    ageReset();
  };

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <Input
          type="text"
          id="username"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameHasError && <p className="error-text">Please Enter minimum 3 Characters</p>}
        <label htmlFor="age">Age (in Years)</label>
        <Input
          type="number"
          id="age"
          value={enteredAge}
          onChange={ageChangeHandler}
          onBlur={ageInputBlurHandler}
        />
        {ageHasError && (
          <p className="error-text">Enter Age between 10 to 80</p>
        )}
        <Button type="submit" disabled={!formIsValid}>
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
