**MediaQueryList** used to handle viewport change with JS.

Applied to `window` object.

*Methods*: 
* .matchMedia(value) - value when change function will be called
  * "(orientation:landscape)"
  * "(max-width: 600px)"

Usage:

```
const mql = window.matchMedia("(max-width: 600px)");
mql.addEventListener("change", callback);
```
