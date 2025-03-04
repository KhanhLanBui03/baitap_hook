import { Component } from "react";
import PropTypes from "prop-types";

class ChildComponent extends Component {
  render() {
    const { myProp } = this.props;
    return (
      <div>
        <h2>Child Component</h2>
        <p>I just got this from the parent: {myProp}</p>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  myProp: PropTypes.string.isRequired,
};

export default ChildComponent;
