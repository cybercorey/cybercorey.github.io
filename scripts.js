$(function() {
    // Custom rain
    var word = "cybercorey".split('');
    var fontsize = 15;
    var width = q.width = window.innerWidth;
    var height = q.height = window.innerHeight;
    var letters = Array(parseInt((width/20).toFixed(0) + 1)).join(1).split('');

    function draw() {
      q.getContext('2d').fillStyle='rgba(0,0,0,.06)';
      q.getContext('2d').fillRect(0,0,width,height);
      //q.getContext('2d').fillStyle='#'+Math.floor(Math.random()*16777215).toString(16);
      q.getContext('2d').fillStyle='#428bca';
      letters.map(function(y_pos, index){
      text = (Math.random() > 0.7)? text = String.fromCharCode(1e2+Math.random()*33) : text = word[(y_pos / (height / (word.length - 1))).toFixed(0)];
      q.getContext('2d').font = 'bold ' + fontsize + 'px Terminal';
        q.getContext('2d').fillText(text, index * fontsize, y_pos);
        letters[index] = (y_pos > (height/3) + Math.random() * 1e4) ? 0 : y_pos + fontsize;
      });
    };

    for(var i=0; i < 200; i++){
        draw();
    }

    setInterval(draw, 30);

    window.onresize = function(){
        width = q.width = window.innerWidth;
        height = q.height = window.innerHeight;
    }
    // Scrolls to the selected menu item on the page
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
