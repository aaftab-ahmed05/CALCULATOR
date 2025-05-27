let flag = false;
function insert(str) {
    if (flag){
        clearall()
    }
    let d = document.getElementById("disp")
    if(str != '=')
    d.value += str;
    else {
        d.value = eval(d.value);
        flag = true;
    }
}

function clearall() {
    document.getElementById('disp').value = null;
}

function back() {
    const d = document.getElementById('disp')
    d.value = d.value.slice(0, -1);
}
