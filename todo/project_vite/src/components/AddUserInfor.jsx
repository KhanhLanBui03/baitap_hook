import { Component } from "react";
import PropTypes from "prop-types"; 

class AddUserInfor extends Component {
  state = {
    Name: "",
    Age: "",
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    const { Name, Age } = this.state;
    const newUser = { id: Math.floor(Math.random() * 100) + "user", Name, Age };
    this.props.handleAddNewUser(newUser); 
    this.setState({ Name: "", Age: "" });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label>Your name:</label>
        <input
          type="text"
          name="Name"
          value={this.state.Name}
          onChange={this.handleInputChange}
        />
        <br />
        <label>Your Age:</label>
        <input
          type="text"
          name="Age"
          value={this.state.Age}
          onChange={this.handleInputChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

AddUserInfor.propTypes = {
  handleAddNewUser: PropTypes.func.isRequired, 
};

export default AddUserInfor;
