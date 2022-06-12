function getJSON(){
    if (localStorage.getItem("list") === null) {
        localStorage.setItem('list',[]);
      }
    else
    {
        list = JSON.parse(localStorage.getItem('list'));
        renderView(list);
    }
}

function save_json(list){
    var jsonString = JSON.stringify(list);
    localStorage.setItem('list',jsonString);
}

//Viết 1 function addList
function addList()
{
    const task_name = document.getElementById('input-data').value;
    const level_name = document.querySelector('.level').value;
    const primary_id = Date.now()
    var obj={
        task: task_name,
        level: level_name,
        id : primary_id
    }
    if (current == -1)
    {
        list.push(obj)
    }else{
        list[current] = obj;
        current = -1;
        btn_add.innerHTML = "ADD"
    }
    renderView(list);
    save_json(list)
}

//View lại các phần tử hiện tại có trong mảng
function renderView(list)
{
    var html= "";
    for(var i = 0 ; i< list.length; i++){
        html+='<tr>';
        html+='<td>'+ (i+1) +'</td>';
        html+='<td>'+ list[i].task +'</td>';
        if (list[i].level==='Medium')
        {
            html+='<td>'+ '<button type="button" class="btn_medium btn_design">Medium</button>' +'</td>';
        }
        else if (list[i].level==='Small')
        {
            html+='<td>'+ '<button type="button" class="btn_small btn_design">Small</button>' +'</td>';
        }
        else{
            html+='<td>'+ '<button type="button" class="btn_high btn_design">High</button>' +'</td>';
        }
        html+='<td>'+ '<button type="button" class="btn btn-warning" onclick="edit_item('+list[i].id+')">Edit</button> <button type="button" class="btn btn-danger" onclick="delete_item('+list[i].id+')">Delete</button>' +'</td>'
    }
    body.innerHTML=html
}

//function delete phần tử trong mảng
function delete_item(id){
    let index = indexOf_id(id);
    console.log(index);
    list.splice(index,1);
    renderView(list);
    save_json(list);
}

//function edit phần tử trong mảng

function edit_item(id){
    let index = indexOf_id(id);
    console.log(index);
    current = index;
    var x = list[index];
    document.getElementById("input-data").value = x.task;
    document.querySelector('.level').value = x.level;
    btn_add.innerHTML = "EDIT"
}

//function search data

function search_data(){
    let valueSearchInput= document.getElementById("input-search").value;
    let listSearch = list.filter(value => {
            return value.task.toUpperCase().includes(valueSearchInput.toUpperCase())
    })
    renderView(listSearch);
}
// Tạo Id tự động
function makeid(length) {
    var result           = '';
    var characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++ ) {
      var randomIndex = Math.floor(Math.random() * charactersLength);
      while (randomIndex > charactersLength) {
        var randomIndex = Math.floor(Math.random() * charactersLength);
        }
        result += characters[randomIndex];
        if (randomIndex > -1) {
          characters.splice(randomIndex, 1);
          }
           }
               return result;
}



function indexOf_id(value_id)
{
    let searchTerm = value_id;
    let index_id = -1;
    for(let i = 0; list.length ; i++) {
        if (list[i].id === searchTerm) {
            index_id = i;
            break;
        }
    }
    return index_id;
}


//ẩn hiện phần nhập dữ liệu
function showHideDialog(){
    // đây là cách ăn gian 1 tí , ban đầu ko thể truy cập vào style extranel của element. mặc định đk sẽ false và
    // ghi đè vào internal ==> theo thứ tự ưu tiên thì sẽ lấy internal
    // có thể sử dụng jQuery để lấy css $(.data).css("display")
    if (data.style.display == 'block')
    {
        data.style.display = "none";
    }
    else
    {
        data.style.display = "block";
    }
    // if (current_input == -1)
    // {
    //     data.style.display = 'block';
    //     current_input = 1;
    //     document.getElementById('btn_handle').innerHTML = "CLOSE";
    // }else{
    //     data.style.display = 'none';
    //     current_input = -1;
    //     document.getElementById('btn_handle').innerHTML = "ADD";
    // }
}
