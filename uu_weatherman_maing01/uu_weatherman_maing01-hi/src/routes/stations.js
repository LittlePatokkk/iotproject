//@@viewOn:imports
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import AddGatewayForm from "../bricks/gateways/add-gateway-form"; 
import GatewayProvider from "../bricks/gateways/gateway-provider";
import GatewayList from "../bricks/gateways/gateway-list";
import GatewayCreate from "../bricks/gateways/gateway-create";
//@@viewOff:imports

const Gateway = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Gateway",
  //@@viewOff:statics

  render() {
    //@@viewOn:render
  return (
    <div>
      <GatewayProvider>
        {({ gateways, handleCreate, handleDelete }) => {
          return (
            <>
              <AddGatewayForm onCreate={handleCreate} />
              <GatewayList gateways={gateways} onDelete={handleDelete} />
            </>
          );
        }}
      </GatewayProvider>
    </div>
  );
    //@@viewOff:render;
  }
});

export default Gateway;