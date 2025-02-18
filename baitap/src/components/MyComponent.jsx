import  { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
import ChildComponent from "./ChildComponent";

function MyComponent() {
    const [listUser, setListUser] = useState([
        { id: 1, Name: "Dung", Age: 49 },
        { id: 2, Name: "Hoang", Age: 17 },
        { id: 3, Name: "Chien", Age: 32 },
    ]);

    const handleAddNewUser = (userObject) => {
        setListUser([userObject, ...listUser]);
    };

    const handleDeleteUser = (userID) => {
        setListUser(listUser.filter(item => item.id !== userID));
    };

    return (
        <div>
            <AddUserInfor handleAddNewUser={handleAddNewUser} />
            <hr />
            <DisplayInfor listUser={listUser} handleDeleteUser={handleDeleteUser} />
            <ChildComponent myProp="This is my parent" />
        </div>
    );
}

export default MyComponent;