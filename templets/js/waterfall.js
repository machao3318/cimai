function createWaterfallArea(areaDom, imgs, imgWidth = 220) 
{
    areaDom.innerHTML = "";
    
areaDom.style.position = "relative";
    
var containerWidth;
    
var colNumber;//1行可以显示几张图片
    
var gap; //图片之间的间隙
    
var imgArray = [];
    //1. 添加图片
    
addImgs();

    //2. 设置图片的位置
    
setPositions();

    //3. 窗口尺寸改变事件
    
var timer = null;
    
window.addEventListener("resize", function(){
        //函数防抖
        
if(timer){
           clearInterval(timer); 
        }
        
timer = setTimeout(() => {
            setPositions();
        }, 500);
    })

    //函数区域

    function setParameters() {
        containerWidth = parseInt(areaDom.clientWidth);
        colNumber = parseInt(containerWidth / imgWidth);//1行可以显示几张图片
        
gap = containerWidth - colNumber * imgWidth //图片之间的间隙
        
if (colNumber > 1) {
            gap = gap / (colNumber - 1);
        }
    }

    
/**
     * 添加图片
     */
    
function addImgs() {
        for (var i = 0; i < imgs.length; i++) {
       var url = imgs[i];
            
var img = document.createElement("img");
            
img.src = url;
            
img.style.width = imgWidth + "px";
            
img.style.position = "absolute";
 
var imghref = document.createElement("a");

imghref.href= url;
/**
     * imghref.href= "http://www.hnbim.cn/?lightbox[iframe]=true&lightbox[width]=770&lightbox[height]=460";*/

imghref.className= "lightbox";
imghref.rel= "group1";
imghref.appendChild(img);     
img.addEventListener("load", function () {
                setPositions();
            })
           

 areaDom.appendChild(imghref);
            
imgArray.push(img);
        }
    }

  
    
/**
     * 设置所有图片的位置
     */
    
function setPositions() {
        setParameters();
        var nextYs = new Array(colNumber);
        nextYs.fill(0);
        
for (var i = 0; i < imgArray.length; i++) {
            
var img = imgArray[i];
            //纵坐标
            
var y = Math.min(...nextYs);
            
var colIndex = nextYs.indexOf(y);
            //横坐标
            img.style.left = imgWidth * colIndex + gap * colIndex + "px";
            img.style.top = y + "px";
 
//修改数组
      nextYs[colIndex] += parseInt(img.height) + gap;
        }
        
//设置容器高度
        areaDom.style.height = Math.max(...nextYs) + "px";
    }
}