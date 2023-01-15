
function setup() {
	chatbot.loadFiles(['bot.rive']);
}

window.onload = setup;

Document.querySelector("#show-login").addEventListener("click",function(){
    Document.querySelector(".popup").classList.add("active");
});
Document.querySelector(".popup .close-btn").addEventListener("click",function(){
    Document.querySelector(".popup").classList.remove("active");
});
