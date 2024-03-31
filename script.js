function random_color() {
    var hex_code = '0123456789ABCDEF';
    var color = '#';
    for ( i = 0; i < 6; i++) {
        color = color + hex_code[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generator_output() {
    new_color = random_color();
    document.querySelector(".container").style.backgroundColor = new_color;
    document.getElementById("button").innerText = new_color;
    navigator.clipboard.writeText(new_color);
}

document.getElementById('button').addEventListener('click', generator_output);



