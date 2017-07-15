/**
 * Created by Administrator on 2017-07-10.
 */
window.onload = ()=>{
  htmlFS=screen.width/42;
//获取布局视口
  styleNode=document.createElement("style")
  styleNode.innerHTML='html{font-size:'+ htmlFS +'px !important;}'
//创建一个style标签，设置html的font-size属性
  document.head.appendChild(styleNode);
  // 点击tab ，自动移动
}


var lisb = document.getElementsByTagName("li")
for (let i=0;i<lisb.length;i++){
  lisb[i].onTouchStart = ()=>{
    console.log('abc')
  }
}
