const HOURS = 24;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;
const MILLISECONDS_IN_SECONDS = 1000;

const firstName = "SpongeBob";
const lastName = "SquarePants";

const submitBtn = document.getElementById('submitBtn');
const cookiesBtn = document.getElementById('cookiesBtn');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');

submitBtn.addEventListener('click', () => {
    setCookie("firstName", firstNameInput.value, 365);
    setCookie("lastName", lastNameInput.value, 365);
});

cookiesBtn.addEventListener('click', () => {
    firstNameInput.value = getCookieByName("firstName");
    lastNameInput.value = getCookieByName("lastName");
});

function setCookie(key, value, daysToLive) {
    let date = null;
    let expires = '';

    if (daysToLive) {
        const daysToLiveMilliseconds = daysToLive * HOURS * MINUTES_IN_HOUR * SECONDS_IN_MINUTE * MILLISECONDS_IN_SECONDS

        date = new Date();
        date.setTime(date.getTime() + daysToLiveMilliseconds);
        expires = `expires=${date.toUTCString()}`;
    }

    document.cookie = `${key}=${value}, ${expires}`;
}

// setCookie("firstName", firstName, 365);
// setCookie("lastName", lastName, 365);

// deleteCookie("firstName");
// deleteCookie("lastName");

console.log(getCookieByName("firstName"));
console.log(getCookieByName("lastName"));

function deleteCookie(name) {
    setCookie(name, null, null);
}

function getCookieByName(name) {
    const cDecode = decodeURIComponent(document.cookie);
    const cArray = cDecode.split('; ');
    let result = null;

    cArray.forEach(cookieStr => {
        cookieStr.split(', ').forEach(element => {
            const [key, value] = element.split('=');

            if (key === name) {
                result = value;
            }
        })
    });

    return result;
}