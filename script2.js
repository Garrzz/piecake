function hitungTotal() {
    let jumlah = document.getElementById("jumlah").value;
    let harga = document.getElementById("harga").value;
    
    if (jumlah && harga) {
        let total = jumlah * harga;
        document.getElementById("totalHarga").innerText = "Rp " + total.toLocaleString();
    } else {
        alert("Harap isi jumlah dan harga!");
    }
}