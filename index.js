var grid_boxes = document.getElementById('grid_boxes');
var pagination = document.getElementById('pagination');
var current_page = 1;
var rows = 9;

const fetchFun =  () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
   .then(res => res.json())
   .then(data => twoFun(data, grid_boxes, rows, current_page, pagination))
    .catch(err => console.log(err))
}



function showData(data, wrapper, row_per_page, page){

    wrapper.innerHTML = "";
    page--;
      
    var flex_boxes = document.getElementById('flex_boxes');
    let start = row_per_page * page;
    let end = start+row_per_page;

    let paginatedItems = data.slice(start, end);
    
    for(var i=0; i< paginatedItems.length; i++){
        let items = paginatedItems[i];
       console.log(items);
        var div1 = document.createElement('div');
        // var div2 = document.createElement('div');
        var img1 = document.createElement('img');
        // var img2 = document.createElement('img');
        var p1 = document.createElement('p');
        img1.src = `${paginatedItems[i].thumbnailUrl}`;
        // img2.src = `${paginatedItems[i].thumbnailUrl}`;
        p1.innerText = `${paginatedItems[i].title}`
        
        div1.appendChild(img1);
        // div2.appendChild(img2);
        // if(i<9){
        //     flex_boxes.appendChild(div2)
        // }
        div1.appendChild(p1);
        grid_boxes.appendChild(div1)
        // document.body.appendChild('div1')
        // console.log(img1.src);
    }
    
}
function setUpPagination (data, wrapper, row_per_page){
    wrapper.innerHTML = "";
    let page_count = Math.ceil(90 / row_per_page);
    console.log(data.length);
    for(let i=1; i<page_count+1;i++){
        let btn = paginationBtn(i, data);
        wrapper.appendChild(btn);
    }
}
function paginationBtn(page, data){
    let btn = document.createElement('button');
    btn.innerText = page;

    if(current_page === page){
        btn.classList.add('active');
    }
    btn.addEventListener('click', function(){
        current_page = page;
        showData(data, grid_boxes, rows, current_page);
        current_btn = document.querySelector('.pagination button.active');
        current_btn.classList.remove('active');
        btn.classList.add('active');
    })
    return btn;
}



function twoFun(data, grid_boxes, rows, current_page, pagination){
    setUpPagination(data, pagination, rows)
    showData(data, grid_boxes, rows, current_page);
}
fetchFun();


