import React, { Component } from "react";
import { connect } from "react-redux";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (ChildComponent) => {
  class ComposedComponent extends Component {
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }
    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }
    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  }
  const mapStateToProps = (state) => {
    return { auth: state.auth.authenticated };
  };
  return connect(mapStateToProps)(ComposedComponent);
};
