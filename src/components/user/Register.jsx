import React, { useState } from "react";
import toastr from "toastr";
import { register } from "../../services/userService";

function Register() {
  const [formData, setFormData] = useState({});

  const onFormFieldChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFormData((prevState) => {
      const newUserObject = {
        ...prevState,
      };

      newUserObject[name] = value;

      console.log(newUserObject);
      return newUserObject;
    });
  };

  let onClickHandler = (e) => {
    e.preventDefault();

    const data = { ...formData };

    console.log(data);
    register(data).then(onActionSuccess).catch(onActionError);
  };

  const onActionSuccess = (response) => {
    toastr.success("You have successfully registered");
    console.log(response);
  };

  const onActionError = (errResponse) => {
    toastr.error("There was a problem registering");
    console.log(errResponse);
  };

  return (
    <React.Fragment>
      <form>
        <div className="container my-4 d-flex justify-content-center mx-auto">
          <div className="row justify-content-center">
            <div className="my-3 col-lg-4">
              <div className="my-4">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email Address"
                  value={formData.email}
                  onChange={onFormFieldChange}
                  required
                />
              </div>

              <div className="my-4">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  name="firstName"
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter Your First Name"
                  value={formData.firstName}
                  onChange={onFormFieldChange}
                  required
                />
              </div>

              <div className="my-4">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  name="lastName"
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter Your Last Name"
                  value={formData.lastName}
                  onChange={onFormFieldChange}
                  required
                />
              </div>

              <div className="my-4">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Your Password"
                  onChange={onFormFieldChange}
                  required
                />
              </div>

              <div className="my-4">
                <label htmlFor="passwordConfirm" className="form-label">
                  Confirm Password
                </label>
                <input
                  name="passwordConfirm"
                  type="password"
                  className="form-control"
                  id="passwordConfirm"
                  placeholder="Re-Enter Your Password"
                  onChange={onFormFieldChange}
                  required
                />
              </div>

              <div className="mt-4">
                <label htmlFor="avatarURL" className="form-label">
                  Profile URL
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="avatarURL"
                  name="avatarURL"
                  placeholder="Enter Your Avatar URL"
                  value={formData.avatarURL}
                  onChange={onFormFieldChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-cus my-3"
                onClick={onClickHandler}
              >
                Register
              </button>
              <br />
              <code>{JSON.stringify(formData, undefined, 2)}</code>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default Register;
