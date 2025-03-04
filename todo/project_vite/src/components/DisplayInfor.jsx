import { Component } from "react";
import PropTypes from "prop-types";

class DisplayInfor extends Component {
  render() {
    const { listUser, handleDeleteUser } = this.props;

    return (
      <div>
        {listUser.map((user) => (
          <div key={user.id}>
            <p>
              Name: {user.Name}, Age: {user.Age}
            </p>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

DisplayInfor.propTypes = {
  listUser: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      Name: PropTypes.string.isRequired,
      Age: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleDeleteUser: PropTypes.func.isRequired,  // Đảm bảo thêm dòng này
};

export default DisplayInfor;
