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
    showCallback.forEach((m) => console.log(m));
    if (showCallback < 1) {
      console.log(kosong);
    }
  } else {
    console.log(kosong.message);
  }
});