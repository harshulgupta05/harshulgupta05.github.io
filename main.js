const colors = ["FF2D00", "64FF00", "00AAFF", "D100FF", "FF8300", "FFFF00"]

const numballs = 50;
const balls = [];

for (let i = 0; i < numballs; i++) {
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.scroll.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * 100)}vh`;
    ball.style.transform = `scale(${Math.random()}em)`;
    ball.style.height = ball.style.width;

    balls.push(ball);
    document.body.append(ball);
}

balls.forEach((el, i, ra) => {
    let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
    };

    let anim = el.animate(
        [
            { transform: "translate(0, 0)" },
            { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
            duration: (Math.random() + 1) * 2000,
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );
});
