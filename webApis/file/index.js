const fileInput = document.getElementById('fileInput');
const fileName = document.getElementById('fileName');
const fileSize = document.getElementById('fileSize');

fileInput.addEventListener('change', event => {
    const file = event.target.files[0];
    const {
        name,
        lastModified,
        size
    } = file;

    fileName.innerText = `File name - ${name}`;
    fileSize.innerText = `File size - ${size / 1000} kB; Last modified - ${new Date(lastModified).toLocaleString()}`;

    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function() {
        // console.log(reader.result);
    };

    reader.onerror = function() {
        // console.log(reader.error);
    };
});

const formElem = document.getElementById('formElem');

formElem.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData();
    const name = formElem.elements.name;
    const surName = formElem.elements.surname;

    formData.append('name', name.value);
    formData.append('surname', surName.value);

    formData.delete('name'); // delete value
    console.log(`Log surname ${formData.get('surname')}`);

    formData.set('name', 'Vlad');
    name.value = 'Vlad';

    if (formData.has('name')) {
        console.log(`Name exists ${formData.get('name')}`);
    } else {
        console.log(`Name doesn't exists`);
    }

    for(let [name, value] of formData) {
        console.log(`${name} = ${value}`);
    }
});