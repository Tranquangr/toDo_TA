//Khai báo mảng chứa phần các phần tử trong To do list
var list =[];
var list_search=[];
//Vùng để in to do List
const body = document.getElementById('result');


var btn_add = document.getElementById("btn_add");
var inputData =document.getElementById("input-data");



// Biến chuyển đổi inner HTML nút thêm list or sửa list
var current = -1;
// Biến chuyển đổi phần ẩn hiện chức năng nhập
//var current_input = -1;
//
var data = document.querySelector('.CRUD_data .data')