let vatLy = Number(prompt("Nhap vao diem mon vat ly:"));
let hoaHoc = Number(prompt("Nhap vao diem mon hoa hoc:"));
let sinhHoc = Number(prompt("Nhap vao diem mon sinh hoc:"));

let TB = (vatLy + hoaHoc + sinhHoc) / 3;

alert("Diem trung binh 3 mon VL SH HH la: " + TB);