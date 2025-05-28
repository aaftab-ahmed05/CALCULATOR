let flag = false;
function insert(str) {
    let d = document.getElementById("disp")
    if (flag){
        d.value='';
        flag = false;
    }
    d.value += str;
    
}

function clearall() {
    document.getElementById('disp').value = null;
}

function back() {
    const d = document.getElementById('disp')
    d.value = d.value.slice(0,-1);
}

function calculate(){
   let d = document.getElementById('disp') ;
   d.value = eval(d.value);
   flag = true;
}