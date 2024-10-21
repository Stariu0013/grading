**History** allow you to manipulate with browser routing
Methods:
* .length - return Integer representing count of sessions history, including currently loaded page. If page loaded in new tab `length` returns 1;
* .back() - async method that goes to the previous page
* .forward() - async method that goes to the next page
* .go() - async load page from session history. If there is no page to go it has no effect.
* .pushState(state, unused, url) where:
  * state - object associated with new history entry created by push state
  * url - new url.
* .replaceState(state, unused, url) where
  * state - an object which is associated with the history entry passed to the replaceState() method. The state object can be null.
  * url - new url.