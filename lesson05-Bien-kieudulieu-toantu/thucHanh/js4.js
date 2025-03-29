let x = Number(prompt("Input a:"));
let y = Number(prompt("Input b:"));
if(y !== 0) {
    if(x % y === 0) {
        alert(`${x} la boi so cua ${y}`);
    }
    else {
        alert(`${x} khong la boi so cua${y}`);
    }
}
else {
    alert("khong the kiem tra so y = 0");
}