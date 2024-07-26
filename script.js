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
  



  // Function to send user message and receive bot response
function sendMessage() {
    var userInput = document.getElementById("user-input");
    var userMessage = userInput.value.trim().toLowerCase();

    if (userMessage === '') {
        return;
    }

    // Check user input
    if (userMessage === 'hi') {
        // Show welcome message and navigation options
        var welcomeMessage = "Welcome to Mr Gcobani Kula's portfolio. I am Gcogco, Mr Kula's assistant and your travel guide through his portfolio.";
        var navigationMessage = "Please click these navigation links:";
        var navigationButtons = `
            <button><a href="second.html">Second Page</a></button>
            <button><a href="Projects.html">Projects</a></button>
            <button><a href="Qualifications.html">Qualifications</a></button>
            <button><a href="second.html">I want manual navigation</a></button>
        `;
        appendMessage('bot', welcomeMessage);
        appendMessage('bot', navigationMessage);
        appendMessage('bot', navigationButtons);
    } else {
        // Handle other user messages (dummy response)
        var botMessage = "Sorry, I didn't understand that.";
        appendMessage('bot', botMessage);
    }

    userInput.value = '';

    // Automatically scroll to the bottom of the chat box
    var chatBox = document.getElementById("chat-box");
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to append messages to the chat box
function appendMessage(sender, message) {
    var chatBox = document.getElementById("chat-box");
    var messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.innerHTML = `<span>${message}</span>`;
    chatBox.appendChild(messageElement);

    // Automatically scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}
