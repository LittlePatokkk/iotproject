//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "../config/config";
//@@viewOff:imports

const Gateway = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Gateway",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    gateway: UU5.PropTypes.shape({
      name: UU5.PropTypes.string,
      text: UU5.PropTypes.string,
    }),
    colorSchema: UU5.PropTypes.string,
    onDetail: UU5.PropTypes.func,
    onUpdate: UU5.PropTypes.func,
    onDelete: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    gateway: null,
    colorSchema: "blue",
    onDetail: () => {},
    onUpdate: () => {},
    onDelete: () => {}
  },
  //@@viewOff:defaultProps

  render({ gateway, colorSchema, onDelete }) {
    //@@viewOn:private
    function handleDelete() {
      onDelete(gateway);
    }
    //@@viewOff:private

    //@@viewOn:render
    function renderHeader() {
      return (
        <>
          {gateway.name}
          <UU5.Bricks.Button onClick={handleDelete} colorSchema="red">
            <UU5.Bricks.Icon icon="mdi-delete" />
          </UU5.Bricks.Button>
        </>
      );
    }

    if (!gateway) {
      return null;
    }

    return (
      <UU5.Bricks.Card header={renderHeader()} colorSchema={colorSchema}>
        <div>{gateway.text}</div>
      </UU5.Bricks.Card>
    );
    //@@viewOff:render
  }
});

export default Gateway;