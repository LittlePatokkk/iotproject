
//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useState } from "uu5g04-hooks";
import Config from "./config/config";
import "uu5g04-bricks";
import "uu5chartg01";
import "uu5codekitg01";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  nestingLevel: "bigBoxCollection",
  displayName: Config.TAG + "Chart",
  //@@viewOff:statics
};
const Chart = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

                
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    render(props) { 
    const [graphData,setGraphData,] =useState(null);
    const [disable,setDisable] =useState(true);

    //@@viewOff:render
  if(graphData==null){
    graphDataToChart("d")
  }
  function graphDataToChart (params) {
      let x= []
      let graph=props.dataD
      if(params=="v"){
        graph = props.dataV
        setDisable(false)
      }else{
        setDisable(true)
      }
      for (let i = 0; i < graph.length; i++) {
        const element = graph[i];
       x.push({
         "label": element.timestamp,
         "value":  element.temperature,
         "value2":  element.humidity
       })
      }
    setGraphData(x)
    };
  

    // const graphDataToChart2 = () => {
    //   let x= []
    //   for (let i = 0; i < props.data2.length; i++) {
    //     const element = props.data2[i];
    //    x.push({
    //      "label": element.timestamp,
    //      "value":  element.temperature,
    //      "value2":  element.humidity
    //    })
    // }
    // setGraphData(x)
    // };




return (
<UU5.Bricks.Section>
  <>
<UU5.SimpleChart.LineChart 
          series={[
            {
              "valueKey": "value",
              "name": "Teplota",
              "colorSchema": "red",
              "chartType": "linear"
            },
            {
              "valueKey": "value2",
              "name": "Huminidy",
              "colorSchema": "blue",
              "chartType": "monotone"
            },
          ]}
          data={graphData}
        />
<UU5.Bricks.Line colorSchema="grey" />

<UU5.Bricks.ButtonGroup>
          {/* color button */}
          <UU5.Bricks.Button colorSchema="blue" disabled={!disable} onClick={() => graphDataToChart("v")}>Včera</UU5.Bricks.Button>
          <UU5.Bricks.Button colorSchema="green" disabled={disable} onClick={() => graphDataToChart("d")}>Dnes</UU5.Bricks.Button>
        </UU5.Bricks.ButtonGroup>
    </>
    </UU5.Bricks.Section>);
    //@@viewOff:render
  }
});

//@@viewOn:helpers
//@@viewOff:helpers

export default Chart; 