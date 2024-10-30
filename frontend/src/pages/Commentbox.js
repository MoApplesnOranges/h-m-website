import React, { useState } from "react";
import { API } from "../api-service";
function Comment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [comment, setComment] = useState("");

  const createCustomer = (event) => {
    API.createCustomer({ name, email, phonenumber, comment })
      .then((response) => {
        console.log("Response:", response);
        console.log("ok");
      })
      .catch((error) => console.log(error))
      .then(window.location.reload());
    event.preventDefault();
  };

  return (
    <div className="bottom">
      <div className="bottom-right">
        <h1>Leave a comment if interested!</h1>
        <input
          id="name"
          type="text"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
          value={name}
        ></input>
        <br />
        <input
          id="email"
          type="text"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        ></input>
        <br />
        <input
          id="phonenumber"
          type="text"
          placeholder="Phonenumber"
          onChange={(event) => setPhonenumber(event.target.value)}
          value={phonenumber}
        ></input>
        <br />
        <textarea
          id="comment"
          type="text"
          placeholder="Leave a comment!"
          onChange={(event) => setComment(event.target.value)}
          value={comment}
        ></textarea>
        <br />
        <button onClick={createCustomer}>Submit</button>
      </div>
    </div>
  );
}

export default Comment;
