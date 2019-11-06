import React from 'react';

const Landing = () => {
  return(
    <div style = {{textAlign: 'center'}}>
      <h3>
        Collect feedback from you users answering surveys from their emails sent by you (:
      </h3>
      <p>
        To test out Emaily. Please Login with Google.
        <br></br>
        If already logged in please, press home button 'Emaily' to see survey list
        <br></br>
        For Stripe Payment enter 4242424242424242 for card number and a valid expiration date with any number for the CVC.
        Please keep emails to a minimum, only 100 emails can be sent a day with multiples people checking out my website.
      </p>
    </div>
  );
}

export default Landing;
