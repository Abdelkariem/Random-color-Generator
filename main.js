
function generatePastel(){
    const hue = Math.floor(Math.random() * 340);
    const saturation = 30 + Math.floor(Math.random() * 20);
    const lightness = 50 + Math.floor(Math.random() * 40);
    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    let color2 = document.querySelector(".color");
    color2.style.background = color;
    let hex = document.querySelector(".hsl");
    hex.innerHTML = color;


    return color;
}

