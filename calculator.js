function insert(str) {
    let d = document.getElementById("disp")
    if(str != '=')
    d.value += str;
    else {
        d.value = eval(d.value);
    }
}

function clearall() {
    document.getElementById('disp').value = null;
}

function back() {
    const d = document.getElementById('disp')
    d.value = d.value.slice(0, -1);
}