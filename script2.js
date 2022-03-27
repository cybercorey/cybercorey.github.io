const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const columns = [];

const TEXT_HEIGHT = 20;
const LAYERS = 2;
let WIDTH = canvas.width = innerWidth;
let HEIGHT = canvas.height = innerHeight;
let totalColumns = Math.floor(WIDTH / TEXT_HEIGHT) + 1;

// patch resize codepen
addEventListener("resize", () => {
    totalColumns = Math.floor(WIDTH / TEXT_HEIGHT) + 1;
    WIDTH = canvas.width = innerWidth;
    HEIGHT = canvas.height = innerHeight;
});

const generateCharacter = () => {
    const CHARACTERS = Array.from(Array(94)).map((char, index) => String.fromCharCode(33 + index));
    const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
    return CHARACTERS[randomIndex];
};

const init = () => {
    for (let i = 0; i < totalColumns * LAYERS; i++) {
        const size = Math.floor(Math.random() * 12) + 15;
        const letters = Array.from(Array(size)).map(char => generateCharacter());
        const initialY = -1000 + (-1 * Math.floor(Math.random() * 500));
        const fastRandomSpeed = ~~(Math.random() * 20);
        const speed = fastRandomSpeed === 0 ? 40 : 10 + Math.random() * 20;
        columns.push({
            y: initialY,
            letters,
            speed
        });
    }

    // Reset
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
};

const getColor = (index, array, x) => {
    const size = array.length;
    const COLORS = [
        "#428bca",
        "#428bca",
        "#428bca",
        "#428bca",
        "#ffff",
    ];
    const last = index === size - 1;
    const first = index === 0;
    const second = index === 1;
    const third = index === 2;

    const color = last
        ? COLORS[4]
        : first
            ? COLORS[0]
            : second
                ? COLORS[1]
                : third
                    ? COLORS[2]
                    : COLORS[3];

    const alpha = x % 4
        ? "f"
        : x % 3 ? "6" : "2";

    return color.split("").slice(0, -1).join("") + alpha;
};

const matrixIteration = () => {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    ctx.font = `18pt monospace`;

    columns.forEach((data, x) => {
        data.letters.forEach((letter, index, array) => {
            const isWhite = index === array.length - 1;
            ctx.fillStyle = getColor(index, array, x);
            ctx.shadowColor = "#2aa144";
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.shadowBlur = 10;
            isWhite && (letter = generateCharacter());
            const random = Math.floor(Math.random() * 25);
            random === 0 && (letter = generateCharacter());
            ctx.fillText(letter, x * (TEXT_HEIGHT / LAYERS), 50 + data.y + index * TEXT_HEIGHT);
        });

        data.y += data.speed;
        if (data.y > HEIGHT) {
            data.y = -500;
            data.letters = Array.from(Array(data.letters.length)).map(char => generateCharacter());
        }
    });
};

init();
setInterval(matrixIteration, 50);

window.onload = function () {
    date = new Date()
    document.getElementById('CopyrightDate').innerHTML = date.getFullYear()
}

window.onresize = function () {
    totalColumns = Math.floor(WIDTH / TEXT_HEIGHT) + 1;
    WIDTH = canvas.width = innerWidth;
    HEIGHT = canvas.height = innerHeight;
}