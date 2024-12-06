let prompt = document.querySelector('#prompt');
let chatContainer = document.querySelector('.chat-container');

function createChatBox(html,classes){
    let div=document.createElement("div")
    div.innerHTML=html
    div.classList.add(classes)
    return div
}

function handlechatResponse(message){
    let html=`<img src="user.png" alt="User" width="30" id="UserImage">
<div class="user-chat-area">
${message}
</div>`
prompt.value=""

let userChatBox = createChatBox(html,"user-chat")
chatContainer.appendChild(userChatBox)

setTimeout(()=>{
    let html=`<img src="ai.png" alt="AI" width="45" id="AIImage">
        <div class="ai-chat-area">
        ${message}
        </div>`
    let aiChatBox = createChatBox(html,"ai-chat")
    chatContainer.appendChild(aiChatBox)
},600)
}

prompt.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
        handlechatResponse(prompt.value);
    }
})