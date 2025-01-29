function nightDayHandler(self){
    var target =  document.querySelector('body') ;
if(self.value === 'night'){
  target.style.backgroundColor = 'black';
  target.style.color = 'white';
  self.value = 'day';

var alist = document.querySelectorAll('a');
var i = 0;
while (i < alist.length) {
  alist[i].style.color = 'white'
i = i + 1;
}
}else{
  target.style.backgroundColor = 'white';
  target.style.color = 'black';
  self.value = 'night';
  var alist = document.querySelectorAll('a');
var i = 0;
while (i < alist.length) {
  alist[i].style.color = 'blue'
i = i + 1;
}}}