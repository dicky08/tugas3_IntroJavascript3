// Menyambung program dengan then catch dan try catch dan menjelaskan penggunaan dari masing" fungsi tersebut

const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
            let cek = dataDay.find((item) => {
                return item === day;
            });
            if (cek) {
                resolve(cek);
            } else {
                reject(new Error('Hari ini bukan hari kerja'));
            }
        }, 2000);
    })
}


// cekHariKerja('senin')
//     .then(result => console.log(result)) //Menangkap aksi  ketika promise menghasilkan true atau promise terpenuhi
//     .catch(err => console.log(err.message)); //Menangkap aksi ketika Promise tidak terpenuhi

async function showDay() {
    try { // Coba jalankan jika terpenuhi jalankan proses dibawah ini. ini untuk asycn await
        const result = await cekHariKerja('minggu');
        console.log(`Hari ${result} adalah hari kerja`);
    } catch (error) { // Tangkap erornya ketika gagal. ini untuk asycn await
        console.log(error.message);
    }
}
showDay();