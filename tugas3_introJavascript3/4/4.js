// Fetch API Ambil data Nama
const fetch = require('node-fetch');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(result => {
        result.map(names => console.log(names.name));
    });