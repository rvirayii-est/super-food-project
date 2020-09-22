import React, { useState } from "react";
// import PropTypes from "prop-types";
import { Button } from "components/common/buttons/Button";
import FormInput from "components/common/FormInput";

const UpdateMobileNumber = (props) => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
  });

  const { phoneNumber } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="sm:shadow-md flex flex-col items-center p-6">
      <div className="text-primary font-medium text-3xl">
        Edit your mobile number
      </div>
      <div className="text-center mt-4">
        A code will to the new mobile number for verification.
      </div>
      <form className="flex items-center justify-center space-x-2 my-8">
        <div className="flex-1">
          <FormInput
            // className="border text-5xl pl-6"
            type="text"
            maxLength="11"
            size="11"
            min="0"
            name="phoneNumber"
            value={phoneNumber}
            id="updateMobileNumber"
            label="New Phone Number"
            max="9"
            pattern="[0-9]{1}"
            handleChange={handleChange}
          />
        </div>
        <div className="inline-block mt-3">
          <Button type="submit" category="accent">Update</Button>
        </div>
      </form>
      <div className="text-primary text-lg">Didn't receive the code?</div>
      <div className="text-accent hover:text-orange-700 text-lg">
        Send code again
      </div>
    </div>
  );
};

UpdateMobileNumber.propTypes = {};

export default UpdateMobileNumber;
