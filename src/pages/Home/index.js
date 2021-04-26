import React from "react";
import { colorContext } from "../../context/Colors";
import Label from "../../components/Label";

export default class Home extends React.Component {
  static contextType = colorContext;

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  handlerChangeColor(event, prefix) {
    const { colors, setColors } = this.context;

    const colorChange = {};
    colorChange[prefix] = event.target.value;

    setColors({
      ...colors,
      ...colorChange,
    });
  }

  render() {
    const { colors, setColors } = this.context;

    const styleContainer = {
      background: colors.primary,
      border: `30px solid ${colors.secondary}`,
      color: colors.third,
    };

    return (
      <>
        <div className="container" style={styleContainer}>
          <div>
            <span>Controllers</span>
            <div>
              <label htmlFor="primary">Primary</label>
              <input
                type="color"
                value={colors.primary}
                onChange={(event) => {
                  this.handlerChangeColor(event, "primary");
                }}
                id="primary"
                name="primary"
              />
            </div>
            <div>
              <label htmlFor="secondary">secondary</label>
              <input
                type="color"
                value={colors.secondary}
                onChange={(event) => {
                  this.handlerChangeColor(event, "secondary");
                }}
                id="secondary"
                name="secondary"
              />
            </div>
            <div>
              <label htmlFor="third">third</label>
              <input
                type="color"
                value={colors.third}
                onChange={(event) => this.handlerChangeColor(event, "third")}
                id="third"
                name="third"
              />
            </div>
          </div>
          <h1>Hellou</h1>
        </div>
        <Label />
      </>
    );
  }
}
