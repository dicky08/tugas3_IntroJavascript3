// Fetch API Ambil data Nama

const fetch = require("node-fetch");
const expres = require("express");
const aps = expres();

fetch("htts://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((result) => {
    result.map((names) => console.log(names.name));
  });
aps.listen(3000);
