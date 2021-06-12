
import UU5 from "uu5g04";
import { createVisualComponent, useState } from "uu5g04-hooks";
import Config from "./config/config";
import "uu5g04-bricks";
import "uu5g04-forms";
import React  from 'react';


const Value = createVisualComponent({

    render() {
          let props = {
            className: 'dt2',
            header: <UU5.Bricks.Label colorSchema='info' content='Aktuální počasí'/>,
            //footer: "Footer - Content",
            footer: {
              element: {
                tag: "UU5.Bricks.Footer",
                //props: { content: "Doporučený kandidát na přijetí - Monika", className: 'footerElement' }
              },
            },
            headerRow: [
              'Meteostanice',
              'Poloha',
              'Aktuální teplota',
              'Aktuální vlhkost'
            ],
            rows: [
              [
                'Meteostanice 1',
                'Praha 4',
                '24°C',
                '33%'
              ],
              [
                'Meteostanice 2',
                'Praha 7',
                '22°C',
                '45%'
              ]
            ],
            footerRow: [
              <UU5.Bricks.Strong content='Průmněrná hodnota' />,
              <UU5.Bricks.Strong content='' />,
              <UU5.Bricks.Strong content='23.5°C' />,
              <UU5.Bricks.Strong content='39%' />
            ]
          };
          return (
            <UU5.Bricks.Container>
              {/*@@viewOn:0*/}
            <h1>
            <UU5.Bricks.Label colorSchema='info' content='Aktuální čas'/>
            </h1>
            <h2>
            <UU5.Bricks.DateTime value={new Date()} />  
            </h2>
              <UU5.Bricks.DataTable
                striped
                bordered
                hover
                condensed
                {...props}
              />
            <UU5.Bricks.Line colorSchema="grey" />
              {/*@@viewOff:0*/}
            </UU5.Bricks.Container>
          );
        }
      });

export default Value;