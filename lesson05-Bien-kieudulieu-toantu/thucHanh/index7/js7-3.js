function tinhS() {
    let x = document.getElementById("r").value;
    x = parseFloat(x);
    let y = 3.14 * x * x;

    document.getElementById("ketqua").innerText = y;
}