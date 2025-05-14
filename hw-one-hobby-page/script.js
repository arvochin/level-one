let learnBtn = document.getElementById('learn-btn');
let likeBtn = document.getElementById('like-btn');

function learnMore(){
    alert("I hope you enjoyed learning about my hobby. Hit the like button if you like dancing.")
}

function likeMsg(){
    alert("Lets goooo")
}

learnBtn.addEventListener('click', learnMore);
likeBtn.addEventListener('click', likeMsg);

