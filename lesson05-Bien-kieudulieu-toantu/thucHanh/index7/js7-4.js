function tinhC() {
    let x = document.getElementById("r").value;
    x = parseFloat(x);
    let y = 2 * 3.14 * x;
    document.getElementById("ketqua").innerHTML = y;
}