import React from "react";
import { colorContext } from "../../context/Colors";

export default class Label extends React.Component {
  static contextType = colorContext;

  render() {
    const { colors } = this.context;

    console.log(colors);

    const style = {
      width: "100vh",
      color: colors.primary,
      background: colors.third,
    };

    return <span style={style}>Color primary</span>;
  }
}
