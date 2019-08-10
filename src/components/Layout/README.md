# interview-layout
1.五种布局的适用性，优缺点
float会脱离文档流，要细致处理与周围元素的关系，优点是兼容性好 
position快捷，不容易出问题，所有子元素也会随之脱离文档流，可使用性比较差
flex
table兼容性好，解决flex兼容性不好的地方，缺点是其中某一个单元格高度超出的时候其他单元格也会同样增高
grid代码量简化

2.如果去掉高度值设定值
float position grid都不能用了