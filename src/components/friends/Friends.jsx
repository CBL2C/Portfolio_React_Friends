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
        <div class="col-3 my-3">
          <div className="card">
            <img className="avatar card-img-top" src={aFriend.picture.large} alt="..." />
            <div className="card-body">
              <h5 className="card-title">{aFriend.name.first} {aFriend.name.last}</h5>
              <p className="card-text">
                <span class="label">Email: </span>
                {aFriend.email}
                <br />
                <span class="label">Cell: </span>
                {aFriend.cell}
                <br />
                <span class="label">Age: </span>
                {aFriend.dob.age}
              </p>
              <p className="card-text"><small class="text-muted">Located in {aFriend.location.country}</small></p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <div className="fContainer">
        <h1> Here are your current friends, {fName}!</h1>
        <div className="row my-4">{arrayOfPpl.map(mapPerson)}</div>
      </div>
    </React.Fragment>
  );
}

export default GetSomeFriends;
