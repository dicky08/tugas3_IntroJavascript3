// // Promise
// // 1
// const menyatakan = new Promise((resolve, reject) => {
//     let nanya = 'Gimana kamu mau ga nikah sama aku';
//     if (!nanya) {
//         setTimeout(() => {
//             resolve(`Iya aku mau ko nikah sama kamu`);
//         }, 3000);
//     } else {
//         setTimeout(() => {
//             reject(`Yah maaf kamu terlalu baik buat aku`);
//         }, 2000);
//     }
// });
// menyatakan
//     .then(res => console.log(res))
//     .catch(res => console.log(res));

// 2
let ketemuan = "Gimana malam ini jadi kan kita dinner?";
ketemuan = false;
const janjian = new Promise((resolve, reject) => {
    if (ketemuan) {
        setTimeout(() => {
            resolve("Kutunggu ya ditempat biasa");
        }, 2000);
    } else {
        setTimeout(() => {
            reject("kelamaan jawabnya!");
        }, 3000);
    }
});

console.log('mulai');
janjian
    .then(result => console.log(`Oke ${result}`))
    .catch(result => console.log(`Ah udahlah gajadi ${result}`));
console.log('selesai');