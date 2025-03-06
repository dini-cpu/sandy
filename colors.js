function nightDayHandler(self){
    var target =  document.querySelector('body') ;
  if(self.value === 'night'){
  target.style.backgroundColor = 'SlateBlue;';
  target.style.color = 'black';
  self.value = 'day';
  
  var alist = document.querySelectorAll('body');
  var i = 0;
  while (i < alist.length) {
  alist[i].style.color = 'white'
  i = i + 1;
  }
  }else{
  target.style.backgroundColor = 'SlateBlue;';
  target.style.color = 'white';
  self.value = 'night';
  var alist = document.querySelectorAll('body');
  var i = 0;
  while (i < alist.length) {
  alist[i].style.color = 'black'
  i = i + 1;
  }}}