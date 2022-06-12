
//mới khởi động kiểm tra dữ liệu từ local storage có dữ liệu gì ko để in ra
getJSON();




//Sự kiện button add phần tử vào mảng và cho hiện ra list trên màn hình
btn_add.addEventListener("click", function(){
    addList();
    document.getElementById('input-data').value = "";
})


//Sự kiện nhập dữ liệu bằng enter
inputData.addEventListener("keydown",function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        addList();
    }
})
