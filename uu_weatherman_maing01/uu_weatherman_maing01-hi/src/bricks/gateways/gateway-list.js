//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "../config/config";
import Gateway from "./gateway";
//@@viewOff:imports

const GatewayList = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "List",
  //@@viewOff:statics

//@@viewOn:propTypes
propTypes: {
    onSave: UU5.PropTypes.func,
    onCancel: UU5.PropTypes.func,
    shown: UU5.PropTypes.bool,
    },
//@@viewOff:propTypes

//@@viewOn:defaultProps
defaultProps: {
    onSave: () => { },
    onCancel: () => { },
    shown: false,
},
//@@viewOff:defaultProps

  render({ gateways, onDetail, onUpdate, onDelete }) {
    //@@viewOn:render
    if (gateways.length === 0) {
      return <UU5.Common.Error content="No gateways!" />;
    }

    return (
      <div>
        {gateways.map(gateway => (
          <Gateway
            key={gateway.id}
            gateway={gateway}
            colorSchema="blue"
            onDetail={onDetail}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
    //@@viewOff:render
  }
});

export default GatewayList;