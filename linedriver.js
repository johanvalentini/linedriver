
function Drawer(svgtarget){
  var that = {};
  that.theobj = document.getElementById(svgtarget)//.cloneNode(true);
  that.thesvgs = that.theobj.getElementsByTagName('path');
  that.counter = that.thesvgs.length;
  that.current_frame;
  that.totalt_frames;
  that.path;
  that.thelength;
  that.handle;
  that.init = function(){
    that.current_frame = 0;
    that.total_frames = 60;
    that.path = new Array();
    that.thelength = new Array();
    for(var i=0; i<that.thesvgs.length;i++){
      
      that.path[i] = that.thesvgs[i];//document.getElementById('i'+i);//that.thesvgs[i];
      l = that.path[i].getTotalLength();
      that.thelength[i] = l;
      that.path[i].style.strokeDasharray = l + ' ' + l; 
      that.path[i].style.strokeDashoffset = l;
    }
    that.handle = 0;
  }
  that.draw = function(){
    var progress = that.current_frame/that.total_frames;
    if (progress > 1) {
      window.cancelAnimationFrame(that.handle);
      
    } else {
      that.current_frame++;
      for(var j=0; j < that.counter; j++){
        that.path[j].style.strokeDashoffset = Math.floor(that.thelength[j] * (1 - progress));
        if(progress > 0.95) {
          // that.path[j].setAttribute('fill', '#121012')
          that.path[j].setAttribute('class', 'done')
        }
      }
      that.handle = window.requestAnimationFrame(that.draw);
    }
  }
  return that;
}
