// Memilih elemen kad dan butang
const card = document.getElementById('profileCard');
const btn = document.getElementById('colorBtn');

// Fungsi untuk menjana warna HEX secara rawak
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Menambah acara klik pada butang
btn.addEventListener('click', function() {
    // 1. Jana warna baru untuk kad dan butang
    const cardColor = getRandomColor();
    let btnColor = getRandomColor();

    // 2. Pastikan warna butang tidak sama dengan warna kad
    while (btnColor === cardColor) {
        btnColor = getRandomColor();
    }

    // 3. Tukar warna latar belakang kad
    card.style.backgroundColor = cardColor;

    // 4. Tukar warna latar belakang butang
    btn.style.backgroundColor = btnColor;

    // 5. Tambahan: Pastikan teks butang sentiasa berwarna putih agar jelas
    btn.style.color = '#ffffff';
    btn.style.border = 'none';
});
tombol.addEventListener('click', function() {
    const warnaBaruTombol = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Ini yang merubah warna tombol secara permanen setelah klik
    tombol.style.backgroundColor = warnaBaruTombol; 
});