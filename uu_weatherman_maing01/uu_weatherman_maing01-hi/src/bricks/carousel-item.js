//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks";
import { createVisualComponent } from "uu5g04-hooks";
import "uu_plus4u5g01-bricks";
import Config from "./config/config.js";
import "uu5g04-forms";
import Chart from "../bricks/chart";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "CarouselItem",
  //@@viewOff:statics
};

const CLASS_NAMES = {
  welcomeRow: () => Config.Css.css`
    padding: 56px 0 20px;
    max-width: 624px;
    margin: 0 auto;
    text-align: center;
  
    ${UU5.Utils.ScreenSize.getMinMediaQueries("s", `text-align: left;`)}
  
    .uu5-bricks-header {
      margin-top: 8px;
    }
    
    .plus4u5-bricks-user-photo {
      margin: 0 auto;
    }
  `,
};

export const CarouselItem = createVisualComponent({
  ...STATICS,

 //@@viewOn:render
render(props) {
console.log("CarouselItem props:", props);

let now = props.gateway.today[props.gateway.today.length-1]

  return (

<UU5.Bricks.Section>
<UU5.BlockLayout.Tile margin="32px 0 0">
<UU5.BlockLayout.Block

>
  <UU5.BlockLayout.Row weight="primary">
    {props.gateway.name}
  </UU5.BlockLayout.Row>
</UU5.BlockLayout.Block>
<UU5.BlockLayout.Block>
  <UU5.BlockLayout.Row>
    <UU5.BlockLayout.Column width={150}>
      <UU5.BlockLayout.Text weight="secondary">
         Teplota
      </UU5.BlockLayout.Text>
    </UU5.BlockLayout.Column>
    <UU5.BlockLayout.Column>
    {now.temperature + " °C"}
    </UU5.BlockLayout.Column>
  </UU5.BlockLayout.Row>
  <UU5.BlockLayout.Row>
    <UU5.BlockLayout.Column width={150}>
      <UU5.BlockLayout.Text weight="secondary">
        Vlhkost
      </UU5.BlockLayout.Text>
    </UU5.BlockLayout.Column>
    <UU5.BlockLayout.Column>
      {now.humidity + " %"}
    </UU5.BlockLayout.Column>
  </UU5.BlockLayout.Row>
</UU5.BlockLayout.Block>
<UU5.BlockLayout.Line />
<UU5.BlockLayout.Block
>
  <UU5.BlockLayout.Row>
    <UU5.BlockLayout.Column width={150}>
      <UU5.BlockLayout.Text weight="secondary">
        Poloha
      </UU5.BlockLayout.Text>
    </UU5.BlockLayout.Column>
    <UU5.BlockLayout.Column>
        Praha 4
    </UU5.BlockLayout.Column>
    <UU5.Bricks.Link>
      <UU5.BlockLayout.Text icon="mdi-map-marker">
        Show on map
      </UU5.BlockLayout.Text>
      </UU5.Bricks.Link> 
  </UU5.BlockLayout.Row>
  </UU5.BlockLayout.Block>
</UU5.BlockLayout.Tile>
     <Chart 
  dataD={props.gateway.today}
   dataV={props.gateway.yesterday}
     />
</UU5.Bricks.Section>

  );
  //@@viewOff:render
}
});

export default CarouselItem;



{/* <UU5.Bricks.Carousel.Item>
<UU5.Bricks.Container>
<UU5.BlockLayout.Tile margin="32px 0 0">
<UU5.BlockLayout.Block

>
  <UU5.BlockLayout.Row weight="primary">
    Meteostation 2
  </UU5.BlockLayout.Row>
</UU5.BlockLayout.Block>
<UU5.BlockLayout.Block>
  <UU5.BlockLayout.Row>
    <UU5.BlockLayout.Column width={150}>
      <UU5.BlockLayout.Text weight="secondary">
         Teplota
      </UU5.BlockLayout.Text>
    </UU5.BlockLayout.Column>
    <UU5.BlockLayout.Column>
      26°C
    </UU5.BlockLayout.Column>
  </UU5.BlockLayout.Row>
  <UU5.BlockLayout.Row>
    <UU5.BlockLayout.Column width={150}>
      <UU5.BlockLayout.Text weight="secondary">
        Vlhkost
      </UU5.BlockLayout.Text>
    </UU5.BlockLayout.Column>
    <UU5.BlockLayout.Column>
      40%
    </UU5.BlockLayout.Column>
  </UU5.BlockLayout.Row>
</UU5.BlockLayout.Block>
<UU5.BlockLayout.Line />
<UU5.BlockLayout.Block
>
  <UU5.BlockLayout.Row>
    <UU5.BlockLayout.Column width={150}>
      <UU5.BlockLayout.Text weight="secondary">
        Poloha
      </UU5.BlockLayout.Text>
    </UU5.BlockLayout.Column>
    <UU5.BlockLayout.Column>
        Praha 7
    </UU5.BlockLayout.Column>
  </UU5.BlockLayout.Row>
  </UU5.BlockLayout.Block>
</UU5.BlockLayout.Tile>
     <Chart 
  data={graphData}
   data2={graphData2}
     />
</UU5.Bricks.Container>

</UU5.Bricks.Carousel.Item> */}