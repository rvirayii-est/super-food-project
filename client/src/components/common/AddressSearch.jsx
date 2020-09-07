import React, { useState } from "react";
// import PropTypes from 'prop-types'

// components
import { AddressFormInput } from "./FormInput";
import { Button } from "./Button";

const AddressSearch = (props) => {
  const [address, setAddress] = useState("");

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("SignUp Success");
  };

  return (
    <form className="mx-4 p-4 pt-2 bg-white shadow-xl rounded-lg" onSubmit={handleSubmit}>
      <AddressFormInput
        type="text"
        value={address}
        name="address"
        id="addressSearch"
        handleChange={handleChange}
        label="Enter your address"
      />

      <div className="flex items-center">
        <Button category="accent" type="submit">
          <div className="text-primary font-medium xl:text-2xl xl:py-2">DELIVERY</div>
        </Button>
        <div className="text-primary text-xl mx-3">Or</div>
        <Button category="accent" type="submit">
        <div className="text-primary font-medium xl:text-2xl xl:py-2">PICKUP</div>
        </Button>
      </div>
    </form>
  );
};

AddressSearch.propTypes = {};

export default AddressSearch;
