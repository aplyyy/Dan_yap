onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    // === [1] Putar musik saat bunga muncul ===
    const audio = document.getElementById("flowerMusic");
    audio.play().catch(() => {
      console.log("Autoplay diblokir. Tunggu interaksi pengguna.");
    });

    // === [2] Tampilkan teks satu per satu ===
    const titles = ('Happy Girlfriend Day!!!').split('');
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 300ms delay
      }
    }

    appendTitle();
    clearTimeout(c);
  }, 1000); // delay 1 detik sebelum animasi dan musik
};
