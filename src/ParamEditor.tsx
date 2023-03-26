import React, { Component } from "react";
import { Param, Model, Props, ParamValue } from "./types";

interface State {
  paramValues: ParamValue[];
}

class ParamEditor extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      paramValues: props.model.paramValues,
    };
  }

  public getModel(): Model {
    return {
      paramValues: this.state.paramValues,
      colors: [],
    };
  }

  public render() {
    return (
      <div>
        {this.props.params.map((param: Param) => {
          const paramValue = this.state.paramValues.find(
            (pv: ParamValue) => pv.paramId === param.id
          );
          const value = paramValue ? paramValue.value : "";

          return (
            <div key={param.id}>
              <label>{param.name}:</label>
              <input
                type="text"
                value={value}
                onChange={(event) =>
                  this.handleParamValueChange(param.id, event.target.value)
                }
              />
            </div>
          );
        })}
      </div>
    );
  }

  private handleParamValueChange(paramId: number, value: string) {
    const paramValueIndex = this.state.paramValues.findIndex(
      (pv: ParamValue) => pv.paramId === paramId
    );

    if (paramValueIndex >= 0) {
      const paramValues = [...this.state.paramValues];
      paramValues[paramValueIndex].value = value;
      this.setState({ paramValues });
    } else {
      const paramValues = [...this.state.paramValues, { paramId, value }];
      this.setState({ paramValues });
    }
  }
}

export default ParamEditor;
