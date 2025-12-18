function login() {
  let user = document.getElementById("username").value;
  if (user === "") {
    alert("Username harus diisi!");
  } else {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
  }
}

function analyze() {
  let input = document.getElementById("imageInput");
  let result = document.getElementById("result");
  let preview = document.getElementById("preview");

  if (input.files.length === 0) {
    alert("Upload foto terlebih dahulu!");
    return;
  }

  let reader = new FileReader();
  reader.onload = function(e) {
    preview.innerHTML = `<img src="${e.target.result}">`;
  };
  reader.readAsDataURL(input.files[0]);

  let klasifikasi = [
    "Lingkungan Bersih 🌿",
    "Lingkungan Tercemar 🗑️",
    "Lingkungan Hijau 🌳"
  ];

  let hasil = klasifikasi[Math.floor(Math.random() * klasifikasi.length)];

  let edukasi = hasil.includes("Tercemar")
    ? "Edukasi Sosial: Terapkan prinsip SADI dengan mengurangi sampah dan meningkatkan daur ulang."
    : "Edukasi Sosial: Pertahankan lingkungan dengan inovasi digital berkelanjutan (SADI).";

  result.innerHTML = `
    <h3>Hasil Klasifikasi</h3>
    <p><b>${hasil}</b></p>
    <p>${edukasi}</p>
  `;
}

function logout() {
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("loginPage").style.display = "block";
}
