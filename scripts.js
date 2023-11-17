// untuk menampilkan pesan ketika tombol di klik
function showInfo(message) {
    alert(message);
  }
  
  // Event listener untuk menampilkan pesan saat halaman dimuat
  document.addEventListener("DOMContentLoaded", function () {
    showInfo("Selamat datang di web portofolio saya!");
  });
  
  // Event listener untuk memanggil fungsi addContent saat tombol diklik
  const contentButton = document.getElementById("contentButton");
  contentButton.addEventListener("click", addContent);