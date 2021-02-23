import * as React from "react";
import { Fragment } from "react";
import PropTypes from "prop-types";

class LoadSpinner extends React.Component {
  render() {
    const { text } = this.props;

    return <Fragment><i className="fa fa-spin fa-circle-o-notch" />&nbsp;{text}</Fragment>;
  }
}

LoadSpinner.propTypes = {
  text : PropTypes.node.isRequired,
};

LoadSpinner.defaultProps = {
  cardView : false,
};

export default LoadSpinner;