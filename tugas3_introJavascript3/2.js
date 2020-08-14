// let month = ['January', 'February', 'March', 'April', 'May', 'Juni', 'July', 'August', 'September', 'October', 'November', 'Desember'];
const getMonth = (callback) => {
  setTimeout(() => {
    let error = true;
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "Juni",
      "July",
      "August",
      "September",
      "October",
      "November",
      "Desember",
    ];

    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found", []));
    }
  }, 1000);
};


getMonth((kosong, showCallback) => {
  if (showCallback) {
    showCallback.map((m) => console.log(m));
  } else {
    console.log(kosong.message);
  }
});