
    // Custom rain
    var letters = "cybercorey".split('');
    var fontSize = 15;
    var width = q.width = window.innerWidth;
    var height = q.height = window.innerHeight;
    ctx = q.getContext('2d');
    
    var columns = q.width / fontSize;
    var chars = []; // init the chars 
    for(var x = 0; x < columns; x++){
      if(Math.random() > 0.900)
        chars[x] = 1
      else 
        chars[x] = q.height
        
    }  
    


    function draw() {
      ctx.fillStyle='rgba(0,0,0, 0.06)';
      ctx.fillRect(0,0,width,height);
      // ctx.fillStyle='#'+Math.floor(Math.random()*16777215).toString(16);
      ctx.fillStyle='#428bca';
      
// loop over the chars 
      for(var i = 0; i < chars.length; i++){
        var char = chars[i];
        var letter = letters[Math.floor(Math.random()*letters.length)];
        ctx.fillText(letter, i*fontSize, char*fontSize);

        if (char*fontSize > q.height && Math.random() > 0.975) {
          chars[i] = 0;
        }
        chars[i]++;
      }
    };

    setInterval(draw, 50);

    window.onresize = function(){
        width = q.width = window.innerWidth;
        height = q.height = window.innerHeight;
    }