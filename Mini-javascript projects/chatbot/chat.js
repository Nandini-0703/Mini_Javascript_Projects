const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatBox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn =  document.querySelector(".close-btn");

let userMessage;
let incomingChatLi;
const API_KEY = "";
const createChatLi = (message , className) => {
    // create a chat li element with passed message and clasname 
const chatLi = document.createElement("li");
chatLi.classList.add("chat" , className);
let chatContent =  className === "outgoing" ? `<p></p>`:`  <span class="material-symbols-outlined">
smart_toy
</span><p></p>`;
chatLi.innerHTML = chatContent;
chatLi.querySelector("p").textContent = message;
return chatLi;


}

const generateResponse = () => {
const API_URL = "https://api.openai.com/v1/chat/completions"; // using openAi url 
const messageElement = incomingChatLi.querySelector("p");
const requestOptions = {
    method : "POST", 
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${API_KEY}`,
    },
    body:JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [
        
          {
            "role": "user",
            "content": userMessage,
          }
        ]
    })
};

//send post request to api and get response 
fetch(API_URL , requestOptions).then(res => res.json()).then(data => {messageElement.textContent = data.choices[0].message.content;}).catch((error) => {
    messageElement.textContent = "oops .. something went wrong please try again ";
}).finally(() => chatBox.scrollTo(0 , chatBox.scrollHeight)) ;
}

const handleChat = () => {
userMessage= chatInput.value.trim();
if(!userMessage) return;
chatInput.value = "";


//append the user's message to the chatbox 
chatBox.appendChild(createChatLi(userMessage , "outgoing"));
chatBox.scrollTo(0 , chatBox.scrollHeight);
setTimeout(() => {
     incomingChatLi = createChatLi("Thinking...", "incoming");
    chatBox.appendChild(incomingChatLi);
    chatBox.scrollTo(0 , chatBox.scrollHeight);
    generateResponse(incomingChatLi); // Pass incomingChatLi to generateResponse
}, 600);
}


sendChatBtn.addEventListener("click" , handleChat);
chatbotToggler.addEventListener("click" , () => {document.body.classList.toggle("show-chatbot")});
chatbotCloseBtn.addEventListener("click" , () => {document.body.classList.remove("show-chatbot")});
 

