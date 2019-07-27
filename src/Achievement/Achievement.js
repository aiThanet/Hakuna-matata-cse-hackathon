import React from "react";

import { SystemContext } from "../SystemContext.js";

class Achievement extends React.Component {
  // static contextType = SystemContext;

  test = () => {
    this.context.current_user += 1;
    console.log(this.context);
  };

  render() {

    console.log(this.context);
    return (
      <div>
        55 {this.context.current_user}
        <button onClick={this.test}>click</button>
      </div>
    );

  }
}

// const Achievement = () => (
//   <SystemContext.Consumer>
//     <div>Achievement Page </div>
//   </SystemContext.Consumer>
// );

// Achievement.comtextType = SystemContext;

export default Achievement;
