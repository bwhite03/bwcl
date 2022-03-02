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

note: The error field in both components is used for when the form validation fails, you can
send in a unique error message to each element of your form
