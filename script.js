function tampilWaktu() {
    const waktu = new Date();
    document.getElementById("jam").innerHTML =
        waktu.toLocaleTimeString();
}

setInterval(tampilWaktu, 1000);