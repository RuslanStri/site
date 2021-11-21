function go(){
      window.timerId = window.setInterval(timer, 500);
    }
    function timer(){
      var clock = document.querySelector(".time h3");
      var date = new Date();
      clock.innerHTML = addZero(date.getHours())+':'+addZero(date.getMinutes())+':'+addZero(date.getSeconds());
    }
    function addZero(num){
      if(num <=9) return '0'+num;
        else return num;
}

go();