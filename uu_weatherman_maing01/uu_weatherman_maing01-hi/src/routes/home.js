//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks";
import { createVisualComponent } from "uu5g04-hooks";
import "uu_plus4u5g01-bricks";
import Config from "./config/config.js";
import "uu5g04-forms";
import Carousel from "../bricks/carousel";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Home",
  //@@viewOff:statics
};



export const Home = createVisualComponent({
  ...STATICS,

 //@@viewOn:render
render() {
const gateways =[ {
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
  gatewayid:"jklfmpi12",
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
   
  

  return (
        <UU5.Bricks.Container>
          <Carousel gatewaysList={gateways}/>
        </UU5.Bricks.Container>
        );
  //@@viewOff:render
}
});

export default Home;
