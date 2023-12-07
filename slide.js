let imageArr=[
    "https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/04/09/09/56/avenue-2215317_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/01/28/23/35/hills-615429_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/06/19/20/13/sunset-815270_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/01/22/19/44/flower-field-250016_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/12/24/05/02/drop-of-water-578897_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/06/07/10/47/elephant-2380009_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/08/04/49/jungle-1807476_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/11/17/22/15/trees-3822149_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/04/17/23/26/environmental-protection-326923_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/11/15/13/27/river-2951997_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/02/19/15/28/sunset-2080072_1280.jpg",
]
let image=document.querySelector("img");
let currentImage=0;
image.setAttribute("src",imageArr[currentImage]);

//-------------------------Next Button Function----------------------------//
let next=document.getElementById("next");
next.addEventListener("click",function(){
    currentImage++
    if(currentImage>=imageArr.length){
        currentImage=0;
    }
    image.setAttribute("src",imageArr[currentImage]);
    clearInterval(id); 
});

//-------------------------Previous Button Function------------------------//
let previous=document.getElementById("previous");
previous.addEventListener("click",function(){
    currentImage--;
    if(currentImage<0){
        currentImage=imageArr.length-1;
    }
    image.setAttribute("src",imageArr[currentImage]);
    clearInterval(id);
})

//-------------------------Start Button Function--------------------------//
let start=document.getElementById("start");
start.addEventListener("click",function(){
    id=setInterval(()=>{
        currentImage++;
    if(currentImage>=imageArr.length){
        currentImage=0;
    };
    image.setAttribute("src",imageArr[currentImage]);
    },1000); 
})

//------------------------Stop Button Function---------------------------//
let stop=document.getElementById("stop");
stop.addEventListener("click",function(){
    clearInterval(id);
})