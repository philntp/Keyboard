function press(key){
    let a = document.getElementById('textA').textContent;
    a += key ;
    document.getElementById('textA').textContent = a; 
}
function backspace() {
    var out = document.getElementById("textA").textContent;
    out = out.substring(0, out.length - 1);
    document.getElementById("textA").textContent = out;
}