// BEFORE: https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState

const stateObj = { foo: "bar" };

history.pushState(stateObj, "", "bar.html");

// AFTER: https://developer.mozilla.org/en-US/docs/Web/API/History/bar.html

history.replaceState(stateObj, "", "bar2.html");

//AFTER: https://developer.mozilla.org/en-US/docs/Web/API/History/bar2.html

const p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(history.back());
    }, 300);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(history.forward());
    }, 1000);
});

const p3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(history.go(-1));
    }, 1500);
});

Promise.all([p1, p2, p3]);