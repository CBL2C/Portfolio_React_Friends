import React from "react";
import toastr from "toastr";

function Home(props) {
    let fName = props.user.firstName;
    let lName = props.user.lastName;

    const onBtnClick = () => {
        toastr.success('success!')

    }

    return (
        <React.Fragment>
            <h1>Hello {fName} {lName}</h1>
            <button
                type="button"
                className="btn btn-cus me-2"
                onClick={onBtnClick}
            >
                Test Toast Message
            </button>
        </React.Fragment>
    )
}

export default Home;