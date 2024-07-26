// Function to simulate loading progress for each skill
function startLoading() {
    // Skill: HTML
    var htmlProgress = document.getElementById("html-progress");
    var htmlPercent = document.getElementById("html-percent");
    var htmlWidth = 0;
    var htmlId = setInterval(htmlFrame, 10);
    function htmlFrame() {
      if (htmlWidth >= 80) {
        clearInterval(htmlId);
      } else {
        htmlWidth++;
        htmlProgress.style.width = htmlWidth + '%';
        htmlPercent.textContent = htmlWidth + '%';
      }
    }
  
    // Skill: CSS
    var cssProgress = document.getElementById("css-progress");
    var cssPercent = document.getElementById("css-percent");
    var cssWidth = 0;
    var cssId = setInterval(cssFrame, 10);
    function cssFrame() {
      if (cssWidth >= 70) {
        clearInterval(cssId);
      } else {
        cssWidth++;
        cssProgress.style.width = cssWidth + '%';
        cssPercent.textContent = cssWidth + '%';
      }
    }
  
    // Skill: JavaScript
    var jsProgress = document.getElementById("js-progress");
    var jsPercent = document.getElementById("js-percent");
    var jsWidth = 0;
    var jsId = setInterval(jsFrame, 10);
    function jsFrame() {
      if (jsWidth >= 60) {
        clearInterval(jsId);
      } else {
        jsWidth++;
        jsProgress.style.width = jsWidth + '%';
        jsPercent.textContent = jsWidth + '%';
      }
    }
  
    // Skill: Python
    var pythonProgress = document.getElementById("python-progress");
    var pythonPercent = document.getElementById("python-percent");
    var pythonWidth = 0;
    var pythonId = setInterval(pythonFrame, 10);
    function pythonFrame() {
      if (pythonWidth >= 60) {
        clearInterval(pythonId);
      } else {
        pythonWidth++;
        pythonProgress.style.width = pythonWidth + '%';
        pythonPercent.textContent = pythonWidth + '%';
      }
    }
  }
  
  // Start loading animation when the page loads
  window.onload = function() {
    startLoading();
  };
  




