function sendMessage() {
    var userInput = document.getElementById("userInput");
    var userMessage = userInput.value;
  
    if (userMessage.trim() === "") {
      return;
    }
  
    var chatBox = document.getElementById("chatBox");
  
    // Display user message
    var userDiv = document.createElement("div");
    userDiv.textContent = userMessage;
    userDiv.classList.add("chat-message", "user-message");
    chatBox.appendChild(userDiv);
  
    // Clear user input
    userInput.value = "";
  
    // Simulate bot response after a short delay (could be an actual API call)
    setTimeout(function() {
      var botMessage = getBotResponse(userMessage);
  
      // Display bot message
      var botDiv = document.createElement("div");
      botDiv.textContent = botMessage;
      botDiv.classList.add("chat-message", "bot-message");
      chatBox.appendChild(botDiv);
  
      // Scroll to bottom of chat box
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 500); // Simulate delay for bot typing effect
  }
  
  function getBotResponse(message) {
    // Simple example: Echo the user message
    return "You said: " + message;
  }
  