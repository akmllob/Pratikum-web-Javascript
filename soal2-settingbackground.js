EditStyle = () => {
    let panjang = document.getElementById('panjang').value;
    let lebar = document.getElementById('lebar').value;
    let warna = document.getElementById('warna').value;

    if (panjang < 0 || lebar < 0) {
        document.getElementById('square').textContent = "Maaf, angka yang Anda masukkan harus di atas 0";
        return;
    }
    if (panjang > 100) {
        panjang = 100;  
    }
    if (lebar > 100) {
        lebar = 100;
    }
    document.getElementById('square').style.width = panjang + "%";
    document.getElementById('square').style.height = lebar + "%";
    document.getElementById('square').style.backgroundColor = warna;

    document.getElementById('square').textContent = "lebar = " + panjang + ", tinggi = " + lebar;
}

ResetStyle = () => {
    document.getElementById('panjang').value = '';
    document.getElementById('lebar').value = '';
    document.getElementById('warna').value = '#ffffff';

    document.getElementById('square').style.width = '100%';
    document.getElementById('square').style.height = '100%';
    document.getElementById('square').style.backgroundColor = '#ffffff';

    document.getElementById('square').textContent = '';
}

