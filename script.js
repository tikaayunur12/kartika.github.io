function hitung(operator) {
  let angka1 = parseFloat(document.getElementById("angka1").value);
  let angka2 = parseFloat(document.getElementById("angka2").value);
  let output = document.getElementById("output");
  let hasil = 0;

  // Reset state output
  output.classList.remove("error");

  // Tambahkan animasi ke tombol operator
  if (event && event.target.classList.contains("btn")) {
    event.target.classList.add("btn-animate");
    setTimeout(() => {
      event.target.classList.remove("btn-animate");
    }, 250);
  }

  if (isNaN(angka1) || isNaN(angka2)) {
    output.innerText = "Harap isi angka!";
    output.classList.add("error");
    alert("Input tidak boleh kosong!");
    return;
  }

  switch (operator) {
    case '+':
      hasil = angka1 + angka2;
      break;
    case '-':
      hasil = angka1 - angka2;
      break;
    case '*':
      hasil = angka1 * angka2;
      break;
    case '/':
      if (angka2 === 0) {
        output.innerText = "Tidak bisa dibagi 0";
        output.classList.add("error");
        alert("Operasi tidak valid: pembagian dengan nol!");
        return;
      } else {
        hasil = (angka1 / angka2).toFixed(2);
      }
      break;
    default:
      output.innerText = "Operasi tidak dikenali!";
      output.classList.add("error");
      alert("Operator tidak valid!");
      return;
  }

  // Tampilkan hasil dengan efek animasi
  output.innerText = hasil;
  output.style.transform = "scale(1.2)";
  setTimeout(() => {
    output.style.transform = "scale(1)";
  }, 200);
}
