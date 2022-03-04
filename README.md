# bwcl

Installation:

```js
npm install bwcl
```

Usage:

```js
import React from "react";
import { Button } from "bwcl";

function App() {
  return <Button label="click me" />;
}
export default App;
```

There are a number of helper utilities, example usage:
formatDate: takes a string or a date and returns a string representation of only a date.
formatMoney: fixes issues with money values that only have a decimal precision of 1.
isValid: returns true or false depending on the existence of a string, a number that is not zero, or an object with keys.

```js
import { formatDate, formatMoney, isValid } from "bwcl";

isValid(null);
//returns false
isValid(undefined);
//returns false
isValid('hello);
//returns true
isValid({name: 'blake'});
//returns true
isValid({});
//returns false

formatDate('1/1/2020 2:00 PM');
//returns '1/1/2022'
```

TextInput example usage:

```js
import { TextInput } from "bwcl";

return (
  <TextInput
    id="someId"
    name="somename"
    label="somelabel"
    placeholder="someplaceholder"
    onChange={(e) => console.log(e.target.value)}
    type="text"
    value="somevalue"
    error="some error"
  />
);
```

SelectField example usage:

```js
import { SelectField } from "bwcl";

const states = [
  { abbr: "AL", name: "Alabama" },
  { abbr: "TN", name: "Tennessee" },
];

return (
  <SelectField
    id="someid"
    name="somename"
    label="somelabel"
    displayField="name"
    valueField="abbr"
    onChange={(e) => console.log(e.target.value)}
    emptyMsg="Please select a state"
    data={states}
    error="This field is required"
  />
);
```

RippleButton usage:
color, hoverColor, and textColor are optional

```js
import { RippleButton } from "bwcl";

return (
  <RippleButton
    text="click me"
    onClick={() => console.log("I have been clicked")}
    color={"#ff0000"}
    hoverColor={"#bb5bc2"}
    textColor={"#fff"}
  />
);
```

DataGrid usage:

```js
import {DataGrid} from 'bwcl
const testData = [
  { id: 1, storeName: "IGA 001", storeNumber: "001", termCount: 3 },
  { id: 2, storeName: "IGA 002", storeNumber: "002", termCount: 4 },
  { id: 3, storeName: "IGA 003", storeNumber: "003", termCount: 6 },
];



return (
  <DataGrid
    data={testData}
    identifier={"g1"}
    mode="light"
    headers={[
          {
            columnName: "id",
            title: "id",
            visible: true,
            style: {
              textAlign: "center",
            },
          },
          {
            columnName: "storeName",
            title: "name",
            visible: true,
            style: {
              textAlign: "left",
            },
          },
        ]}
  />
)
```

## DataGrid Props:

|    Prop name    |  optional  |       type        |               description                |
| :-------------: | :--------: | :---------------: | :--------------------------------------: |
|      data       | [required] |       array       |              array of data               |
|   identifier    | [required] |      string       |     used for the id of the main div      |
| customRenderers |    [✔]     |     function      | function used to render images and such  |
|     headers     |    [✔]     | array of objects  | object to define the shape of the header |
|      fill       |    [✔]     |      boolean      |    whether or not to fill parent div     |
|      style      |    [✔]     |   CSSProperties   |          style for the main div          |
|    className    |    [✔]     |      string       |        className for the main div        |
| tableClassName  |    [✔]     |      string       |      className for the actual table      |
|      mode       |    [✔]     | 'light' or 'dark' |      changes the style of the table      |

## DataGrid Header Props

| Prop name  |  optional  |     type      |                    description                     |
| :--------: | :--------: | :-----------: | :------------------------------------------------: |
| columnName | [required] |    string     |   represents the name of the column in your data   |
|   title    | [required] |    string     |        what to display in the column header        |
|  sortable  |    [✔]     |    boolean    | can make this column not sortable. default is true |
|  visible   |    [✔]     |    boolean    |  can make this column invisible. default is true   |
|   style    |    [✔]     | CSSProperties | the style for this column. ex: textAlign: 'center' |
|   width    |    [✔]     |    number     |         predetermined width for the column         |
| filterable |    [✔]     |    boolean    |  make this column not filterable. default is true  |

```



note: The error field in both components is used for when the form validation fails, you can
send in a unique error message to each element of your form

If for some reason you are using CRA and are getting an error about not being able to find source maps, add this to your .env file:
GENERATE_SOURCEMAP=false

##DataGrid Todos:
[✔] work on row colors based on color that might be passed in
[✔] figure out how to center the column text
[✔] make each column sortable
[✔] make columns hidden
[✔] make columns filterable by the unique values that are displayed for that column
[✔] make columns draggable
[✔] enable light and dark mode
[✔] make DataGrid right clickable

```
