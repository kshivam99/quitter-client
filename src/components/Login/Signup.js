import React, { useState } from "react";
import "./Login.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [quantity, setQuantity] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");

  function handleSignUp() {
    console.log({ name, email, password, quantity, year, price });
  }
  return (
    <div className="signup--container">
      <div className="signup--header">
        <h1>Sometimes Quitters are Winners</h1>
        <h4>Congratulations on your decision to quit smoking!</h4>
      </div>
      <div className="form__group field">
        <input
          type="input"
          className="form__field"
          placeholder="Name"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label for="name" className="form__label">
          Name
        </label>
      </div>
      <div className="form__group field">
        <input
          type="input"
          className="form__field"
          placeholder="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label for="email" className="form__label">
          Email
        </label>
      </div>
      <div className="form__group field">
        <input
          type="password"
          className="form__field"
          placeholder="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label for="password" className="form__label">
          Password
        </label>
      </div>
      <div className="form__group field">
        <input
          type="input"
          className="form__field"
          placeholder="quantity"
          name="quantity"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <label for="quantity" className="form__label">
          Cigarettes per day
        </label>
      </div>
      <div className="form__group field">
        <input
          type="input"
          className="form__field"
          placeholder="year"
          name="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          id="year"
          required
        />
        <label for="year" className="form__label">
          Years of smoking
        </label>
      </div>
      <div className="form__group field">
        <input
          type="tel"
          className="form__field"
          placeholder="Price"
          name="price"
          id="price"
          pattern="[0-9]+"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <label for="price" className="form__label">
          Price per cigarette
        </label>
      </div>
      <button onClick={handleSignUp} className="btn--primary btn-lg">
        Sign Up
      </button>
    </div>
  );
}

export default Signup;
