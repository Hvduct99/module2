function anvao() {

    let x = +document.getElementById("nhapv").value;
    let y = +document.getElementById("oday").value;
    let z = +document.getElementById("diden").value;

    let tyso = y/z;
    let ketqua = tyso * x;
    document.getElementById("ketqua").innerHTML = ketqua;

}