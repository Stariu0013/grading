const para = document.querySelector("p");
const mql = window.matchMedia("(max-width: 600px)");

function screenTest(e) {
    if (e.matches) {
        para.textContent = "This is a narrow screen — less than 600px wide.";
        document.body.style.backgroundColor = "red";
    } else {
        para.textContent = "This is a wide screen — more than 600px wide.";
        document.body.style.backgroundColor = "blue";
    }
}

mql.addEventListener("change", screenTest);