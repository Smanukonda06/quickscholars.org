// Mobile nav toggle
document.querySelector('.menu-btn').addEventListener('click', function(){
  var links = document.querySelector('.nav-links');
  var visible = links.style.display === 'flex';
  links.style.display = visible ? 'none' : 'flex';
  links.style.cssText += visible ? '' : 'position:absolute;top:64px;left:0;right:0;background:#fff;flex-direction:column;padding:20px 24px;border-bottom:1px solid #DCE1E8;gap:16px;';
});

// Animated call-flow stepper: auto-advances, pauses on hover, jumps on click
(function(){
  var nodes  = Array.prototype.slice.call(document.querySelectorAll('.cf-node'));
  var stages = Array.prototype.slice.call(document.querySelectorAll('.cf-stage'));
  if(!nodes.length || !stages.length) return;

  var current = 0;
  var timer = null;
  var STEP_MS = 3200;

  function show(i){
    current = i;
    nodes.forEach(function(node, n){
      node.classList.toggle('active', n === i);
      node.classList.toggle('done', n < i);
    });
    stages.forEach(function(stage, n){
      stage.classList.toggle('active', n === i);
    });
  }

  function next(){ show((current + 1) % stages.length); }

  function play(){ stop(); timer = setInterval(next, STEP_MS); }
  function stop(){ if(timer){ clearInterval(timer); timer = null; } }

  nodes.forEach(function(node, i){
    node.addEventListener('click', function(){ show(i); play(); });
  });

  var flow = document.querySelector('.callflow');
  if(flow){
    flow.addEventListener('mouseenter', stop);
    flow.addEventListener('mouseleave', play);
  }

  // Only start animating once the section scrolls into view
  var section = document.getElementById('call-flow');
  show(0);
  if('IntersectionObserver' in window && section){
    var started = false;
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting && !started){ started = true; play(); }
      });
    }, {threshold: 0.35});
    io.observe(section);
  } else {
    play();
  }
})();

// FAQ accordion: click a question to expand its answer (one open at a time)
(function(){
  var items = Array.prototype.slice.call(document.querySelectorAll('.faq-item'));
  if(!items.length) return;
  items.forEach(function(item){
    var q = item.querySelector('.faq-q');
    q.addEventListener('click', function(){
      var isOpen = item.classList.contains('open');
      items.forEach(function(other){ other.classList.remove('open'); });
      if(!isOpen) item.classList.add('open');
    });
  });
})();
