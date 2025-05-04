function hslToHex(h, s, l) {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
  }
  


function generatePastel(){
    const hue = Math.floor(Math.random() * 340);
    const saturation = 30 + Math.floor(Math.random() * 20);
    const lightness = 50 + Math.floor(Math.random() * 40);
    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    let color2 = document.querySelector(".color");
    color2.style.background = color;
    let hex = document.querySelector(".hsl1");
    hex.innerHTML = hslToHex(hue, saturation, lightness);
    
    return color;
}

function generatePastell(){
    const hue = Math.floor(Math.random() * 340);
    const saturation = 30 + Math.floor(Math.random() * 30);
    const lightness = 50 + Math.floor(Math.random() * 40);
    const color3 = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    let color22 = document.querySelector(".color2");
    color22.style.background = color3;
    let hex = document.querySelector(".hsl2");
    hex.innerHTML = hslToHex(hue, saturation, lightness);
    
    return color3;
}

function generatePastelll(){
    const hue = Math.floor(Math.random() * 340);
    const saturation = 30 + Math.floor(Math.random() * 40);
    const lightness = 50 + Math.floor(Math.random() * 40);
    const color4 = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    let color222 = document.querySelector(".color3");
    color222.style.background = color4;
    let hex = document.querySelector(".hsl3");
    hex.innerHTML = hslToHex(hue, saturation, lightness);
    
    return color4;
}