import React from "react";
import useInput from "./useInput";

const UserForm = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>firstName</label>
        <input {...bindFirstName}></input>
      </div>
      <div>
        <label>lastName</label>
        <input {...bindLastName}></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
