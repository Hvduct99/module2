function changeof1() {
    let x = document.getElementById("doc").value;

    x = parseFloat(x);
    let y = (x * 9 / 5) + 32;

    document.getElementById("ketqua").innerText = y;
}
