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
