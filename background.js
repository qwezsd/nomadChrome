
const bgImg = [
    "thomas-morse-cuKKa0vWZSY-unsplash.jpg",
    "benjamin-davies-Zm2n2O7Fph4-unsplash.jpg",
    "damian-denis-D8R_txR_0PE-unsplash.jpg",
    "johannes-plenio-RwHv7LgeC7s-unsplash.jpg",
    "kace-rodriguez-p3OzJuT_Dks-unsplash.jpg"
]
// 10초마다 배경 바뀌기

const wrap = document.querySelector('.wrap');
let bgImage = document.createElement("img");
wrap.appendChild(bgImage);

function changeBackground() {
    const randomBg = bgImg[Math.floor(Math.random() * bgImg.length)];

    // 이전의 img 요소를 제거합니다.
    wrap.removeChild(bgImage);

    // 새로운 img 요소를 생성합니다.
    bgImage = document.createElement("img");
    bgImage.src = `./img/${randomBg}`;

    // 새로운 img 요소를 추가합니다.
    wrap.appendChild(bgImage);
}

// 초기 실행
changeBackground();
setInterval(changeBackground, 10000);