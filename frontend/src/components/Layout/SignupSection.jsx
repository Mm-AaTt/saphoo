import React from 'react';

function SignUpSection() {
  return (
    <section className="signup signup-box">
      <h2>Sign Up Section</h2>
      <div>
        <h3>Discover and read more</h3>
        <p>Sign up with your email to get started</p>
        <form>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" placeholder="Enter your email" />
          <button type="submit">Sign Up</button>
          {/* Add a privacy policy link if required */}
          <p>
            By creating an account, you agree to the Saphoo Mhicha Terms of
            Service and Privacy Policy.
          </p>
        </form>
        <p>Already a member? Sign In</p>
      </div>
    </section>
  );
}

export default SignUpSection;
