
import UU5 from "uu5g04";
import "uu5g04-bricks";
import "uu5g04-forms";
import "uu5richtextg01";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "../config/config";


const AddGatewayForm = createVisualComponent({

  //@@viewOn:statics
  displayName: Config.TAG + "Gatewayform",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onSave: UU5.PropTypes.func,
    onCancel: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onSave: () => {},
    onCancel: () => {},
  },
  //@@viewOff:defaultProps


        getHeader() {
          return (
              <UU5.Forms.ContextHeader
              content={<UU5.Bricks.Lsi lsi={{ en: "Add gateway", cs: "Přidat bránu" }} />}
              info={<UU5.Bricks.Lsi lsi={{ cs: "Více informací...", en: "More info..." }} />} //toDo lsi
            />
          )
        },

        getForm(modal ,onSave, onCancel) {
          return (
            <UU5.Forms.ContextForm
              onSave={opt => {
                onSave;
                console.log(opt.values);
                modal && modal.close();
              }}
              onCancel={() => {
                onCancel;
                modal && modal.close();
              }}
            >
              <UU5.Bricks.Row>
            <UU5.Bricks.Column colWidth="s-6" >
              <UU5.Forms.Text
                borderRadius="8px"
                label="Gateway name"
                name="gatewayName"
                value=""
                required
              />
            </UU5.Bricks.Column>
            <UU5.Bricks.Column colWidth="s-6">
              <UU5.Forms.Text
                borderRadius="8px"
                label={<UU5.Bricks.Lsi lsi={{ en: "Location", cs: "Poloha" }} />}
                name="location"
                value=""
                required
              />
            </UU5.Bricks.Column>
          </UU5.Bricks.Row>
    
          <UU5.RichText.EditorInput name="desc" label="Description" labelColWidth="xs-12" inputColWidth="xs-12"
                                        labelAlignment="xl-left" />
    
            </UU5.Forms.ContextForm>
          )
        },
    
        getControls() {
          return (
            <UU5.Forms.ContextControls
              buttonSubmitProps={{ content: <UU5.Bricks.Lsi lsi={{ en: "Create" }} /> }}
              buttonCancelProps={{ content: <UU5.Bricks.Lsi lsi={{ en: "Cancel" }} /> }}
            />
          )
        },
        
    
        render() {

              //@@viewOff:private

          return (
            <UU5.Bricks.Container>
              {/*@@viewOn:modal*/}
              <UU5.Forms.ContextModal ref_={modal => AddGatewayForm.modal = modal} />
    
              <UU5.Bricks.Button
                content="Add Gateway"
                onClick={() => AddGatewayForm.modal.open({
                  header: AddGatewayForm.getHeader(),
                  content: AddGatewayForm.getForm(AddGatewayForm.modal),
                  footer: AddGatewayForm.getControls()
                })}
              />
              {/*@@viewOff:modal*/}
            </UU5.Bricks.Container>
          );
        }
      });
      
  
  export default AddGatewayForm;