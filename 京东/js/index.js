// 实现模糊查询========================================================================
let keyword = document.querySelector('.keyword');//获取输入框
let searchHelper = document.querySelector('.search-helper');//获取搜索框的下拉列表


// 定义数组，存储被搜索的内容
let searchArr = ['小米手机','华为手机','苹果手机','小米电视','小米平板','苹果12','苹果13','苹果手表']

// 给输入框绑定内容改变事件
keyword.oninput = function(){
    searchHelper.innerHTML = '';
    for(let i =0; i< searchArr.length; i++){
        if(searchArr[i].indexOf(keyword.value) != -1){
            searchHelper.innerHTML += '<P>'+searchArr[i]+'</p>';
            searchHelper.style.display = 'block';
        }
    }
}


keyword.onblur = function(){
    searchHelper.style.display = 'none';
}
// 实现轮播图的切换=====================================================================
let img=document.querySelector(".img");
let next=document.querySelector(".next");
let prev=document.querySelector(".prev");
let slide = document.querySelector(".slide");
let lis = document.querySelectorAll(".banner-btn li")

let imgArr = ["slide1.jpg","slide2.jpg","slide3.jpg"]
let count =0 

// 定义一个函数，用来切换图片的路径
function cutImg(){
    img.src="./京东/images/"+imgArr[count];
    
    for(let i=0;i<lis.length;i++){
        lis[i].className="";
    }
    lis[count].className="active";
    
}
// 设置定时器，每隔3秒切换图片
let timer=setInterval(function(){
    count++;
    if(count > imgArr.length -1){
        count=0;
    }
    cutImg();
},2000)

// 点击下一张
next.onclick = function(){
    count++;
    if(count > imgArr.length -1){
        count=0;
    }
    cutImg();
}

// 点击上一张
prev.onclick = function(){
    count--;
    if(count < 0){
        count=imgArr.length - 1;
    }
    cutImg();
}

// 给图片轮播图上绑定一个滑入滑出的功能，滑入的时候不要切换图片，将定时器关掉
slide.onmouseover = function(){
    clearInterval(timer);
}
// 鼠标滑出，定时器跑起来，需要timer重新给他赋值定时器的 
slide.onmouseout = function(){
    timer=setInterval(function(){
        count++;
        if(count > imgArr.length -1){
            count=0;
        }
        cutImg();
    },2000)
}

// 给li绑定点击事件
for(let i = 0;i < lis.length; i++){
    lis[i].onclick = () =>{
        count = i;
        cutImg();
    };
}

// 实现楼层的定位切换=============================================给整个文档绑一个滚动事件
let header = document.querySelector('.header');
let banner = document.querySelector('.banner');
let elevator = document.querySelector('.elevator');


// 实现楼层滚动的效果，文字变色效果
let items = document.querySelectorAll('.content .items');  //获取所有的div
let elevatorA = document.querySelectorAll('.content .a');   //获取所有的 a

let elevatorArr = [];//数组中存放四个数字

//基础的高度
let base =header.offsetHeight + banner.offsetHeight




document.onscroll = function(){
    // 获取到滚动条垂直方向滚动了多少
    let top = document.documentElement.scrollTop  || document.body.scrollTop
    // 获取到 header的高度
    // header.clientHeight
    let headerHeight = header.offsetHeight;   //包括  height  padding border的高度\
    // 获取到banner的高度
    let bannerHeight = banner.offsetHeight;
    // 当滚动条滚动到一定程度时，改成固定定位
    if(top >= headerHeight+bannerHeight){
        elevator.className = 'elevator elevator-fix';
    }else{
        elevator.className = 'elevator';
    }
}
