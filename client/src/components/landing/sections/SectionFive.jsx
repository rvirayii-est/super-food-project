import React, { useState } from "react";
// import PropTypes from "prop-types";
import FormInput from "components/common/FormInput";
import { Button } from "components/common/buttons/Button";

const SectionFive = (props) => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email for Newletter Subscription Sent");
  };
  return (
    <div className="bg-orange-200 flex-col items-center justify-center text-center p-12">
      <h2 className="text-5xl text-primary font-medium">Stay in touch</h2>
      <div className="text-2xl text-primary">
        Subscribe to our newsletter so we can send you offers and discounts!
      </div>
      <form
        className="flex flex-col sm:items-center  sm:flex-row lg:w-3/4 xl:w-1/2 lg:justify-center lg:mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="flex-1">
          <FormInput
            addStyles="bg-white input-accent"
            labelAddStyles="z-10"
            type="email"
            value={email}
            name="email"
            id="newsLetterEmail"
            label="Email Address"
            handleChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="sm:inline-block sm:mt-4 sm:ml-4">
          <Button category="accent" type="submit">
            Subscribe
          </Button>
        </div>
      </form>
    </div>
  );
};

SectionFive.propTypes = {};

export default SectionFive;
