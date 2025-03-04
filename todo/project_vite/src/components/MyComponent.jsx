import { Component } from "react";
import DisplayInfor from "../components/DisplayInfor";
import AddUserInfor from "../components/AddUserInfor";

class MyComponent extends Component {
  state = {
    listUser: [
      { id: "1", Name: "Dung", Age: 49 },
      { id: "2", Name: "Hoang", Age: 17 },
      { id: "3", Name: "Chien", Age: 32 },
    ],
  };

  handleDeleteUser = (userID) => {
    console.log("Deleting user with ID:", userID);
    this.setState({
      listUser: this.state.listUser.filter((item) => item.id !== userID),
    });
  };
  handleAddNewUser = (newUser) => {
    console.log("New user added:", newUser);
    this.setState((prevState) => ({
      listUser: [...prevState.listUser, newUser],
    }));
  };

  render() {
    return (
      <div>
        <h1>User List</h1>
        <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
        <DisplayInfor
          listUser={this.state.listUser}
          handleDeleteUser={this.handleDeleteUser}
        />
      </div>
    );
  }
}

export default MyComponent;
