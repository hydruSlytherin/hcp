// 查询并选中所有类名包含collapsible的元素，存储到collapsibles
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) => 
// 对每个遍历的对象添加一个事件监听器
  item.addEventListener("click",function() {
    // 在元素的类名列表中查找，把类名替换成collapsible--expanded
    this.classList.toggle("collapsible--expanded");
  })
);