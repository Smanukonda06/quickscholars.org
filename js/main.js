document.querySelector('.menu-btn').addEventListener('click', function(){
  var links = document.querySelector('.nav-links');
  var visible = links.style.display === 'flex';
  links.style.display = visible ? 'none' : 'flex';
  links.style.cssText += visible ? '' : 'position:absolute;top:64px;left:0;right:0;background:#fff;flex-direction:column;padding:20px 24px;border-bottom:1px solid #DCE1E8;gap:16px;';
});
