import { Component } from "react";

import requireAuth from "../../requireAuth";

class dashboard extends Component {
  render() {
    return <div>Dashboard</div>;
  }
}

export default requireAuth(dashboard);
