import React, { useEffect, useState } from "react";
import "./Friends.css"
import { getFriends } from "../../services/friendsService";

function GetSomeFriends(props) {
  let fName = props.user.firstName;

  const [arrayOfPpl, setArrayOfPpl] = useState([]);
  console.log(arrayOfPpl);

  const onSuccess = (response) => {
    console.log(response);
    let arrayOfPeeps = response.data.results;
    console.log(response.data.results);

    setArrayOfPpl(() => {
      return arrayOfPeeps;
    });
  };

  const onFail = (fail) => {
    console.log(fail);
  };

  useEffect(() => {
    console.log("firing useEffect");
    getFriends(mapPerson).then(onSuccess).catch(onFail);
  }, []);

  const mapPerson = (aFriend) => {
    return (
      <React.Fragment>
        <div className="col-12 col-sm-6 col-med-6 col-lg-4 col-xl-3 d-flex justify-content-center mx-auto">
          <div className="card d-flex my-4" key={aFriend.id.value}>
            <img className="avatar card-img-top" src={aFriend.picture.large} alt="..." />
            <div className="card-body">
              <h5 className="card-title">{aFriend.name.first} {aFriend.name.last}</h5>
              <p className="card-text">
                <span className="label">Email: </span>
                {aFriend.email}
                <br />
                <span className="label">Cell: </span>
                {aFriend.cell}
                <br />
                <span className="label">Age: </span>
                {aFriend.dob.age}
              </p>
              <p className="card-text"><small className="text-muted">Located in {aFriend.location.country}</small></p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <div id="jumbotxt" className="container">
        <h1> Here are your current friends, {fName}!</h1>
      </div>
      <div className="row justify-content-center">{arrayOfPpl.map(mapPerson)}</div>
    </React.Fragment>
  );
}

export default GetSomeFriends;
