import React, { useState } from "react";
import toastr from "toastr";
import { logIn } from "../../services/userService";

function Login() {
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
      return newUserObject;
    });
  };

  let onClickHandler = (e) => {
    e.preventDefault();

    const data = { ...formData, tenantID: 17171 };

    logIn(data).then(onActionSuccess).catch(onActionError);
  };

  const onActionSuccess = (response) => {
    toastr.success("Logged In!");
    console.log(response);
  };

  const onActionError = (errResponse) => {
    toastr.error("There was a problem logging in");
    console.log(errResponse);
  };

  return (
    <React.Fragment>
      <form>
        <div className="container my-4 ">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="my-4">
                <label for="email" className="form-label">
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
                />
              </div>

              <div className="my-4">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                  value={formData.password}
                  onChange={onFormFieldChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-cus my-2"
                onClick={onClickHandler}
              >
                Sign In
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

export default Login;
