//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useState } from "uu5g04-hooks";
import Config from "../config/config";
//@@viewOff:imports

const initialGateways = gateways =[ {
  state:"active",
  name:"AAAAA",
  description: "Lorem ipsum",
  location: "Praha 4",
  id:"jk236lfmpi12",
  today:[
    {
    temperature:21,
    humidity:50,
    timestamp : "2017-09-01T13:20:55.711Z",      
  },
  {
    temperature:23,
    humidity:48,
    timestamp : "2017-09-01T14:20:55.711Z",      
  },
  {
    temperature:20,
    humidity:50,
    timestamp : "2017-09-01T15:20:55.711Z",      
  }
],
  yesterday:[
    {
    temperature:2,
    humidity:10,
    timestamp : "2017-09-01T13:20:55.711Z",      
  },
  {
    temperature:3,
    humidity:20,
    timestamp : "2017-09-01T14:20:55.711Z",      
  },
  {
    temperature:1,
    humidity:30,
    timestamp : "2017-09-01T15:20:55.711Z",      
  }
]
},
{
  state:"active",
  name:"Noah",
  description: "Loremmm ipsum",
  location: "Praha 7",
  id:"jk6lfmpi12",  
  today:[
    {
    temperature:21,
    humidity:50,
    timestamp : "2017-09-01T13:20:55.711Z",      
  },
  {
    temperature:23,
    humidity:48,
    timestamp : "2017-09-01T14:20:55.711Z",      
  },
  {
    temperature:22,
    humidity:30,
    timestamp : "2017-09-01T15:20:55.711Z",      
  }
],
  yesterday:[
    {
    temperature:2,
    humidity:10,
    timestamp : "2017-09-01T13:20:55.711Z",      
  },
  {
    temperature:3,
    humidity:20,
    timestamp : "2017-09-01T14:20:55.711Z",      
  },
  {
    temperature:1,
    humidity:30,
    timestamp : "2017-09-01T15:20:55.711Z",      
  }]}];

const GatewayProvider = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Gatewayprovider",
  //@@viewOff:statics

  render({ children }) {
    //@viewOn:hooks
    const [gateways, setGateways] = useState(initialGateways);
    //@viewOff:hooks

    //@@viewOn:private
    function handleCreate(gateway) {
      gateway.id = UU5.Common.Tools.generateUUID();
      setGateways(prevGateways => prevGateways.concat([gateway]));
    }

    function handleDelete(gateway) {
      setGateways(prevGateways => prevGateways.filter(item => item.id !== gateway.id));
    }
    //@@viewOff:private

    //@@viewOn:render
    return children({ gateways, handleCreate, handleDelete });
    //@@viewOff:render
  }
});

export default GatewayProvider;