const showCards = () => {
    document.addEventListener("DOMContentLoaded", function() {
        const curentDate = new Date();
        const day = curentDate.getDate();
        const month = curentDate.getMonth() + 1;
        const year = curentDate.getFullYear();
        const hours = curentDate.getHours();
        const minutes = curentDate.getMinutes();
    
        if(minutes >= 1){
            const card = document.getElementById('card1');
            const hidenCard = document.getElementById('hidden-card1');
    
            card.style.display = "flex";
            hidenCard.style.display = "none";
        }
        
        if (minutes >= 2){
            const card = document.getElementById('card2');
            const hidenCard = document.getElementById('hidden-card2');
    
            card.style.display = "flex";
            hidenCard.style.display = "none";
        }
        
        if (minutes >= 3){

            const card = document.getElementById('card3');
            const hidenCard = document.getElementById('hidden-card3');
    
            card.style.display = "flex";
            hidenCard.style.display = "none";
        }
        
        if (minutes >= 4){

            const card = document.getElementById('card4');
            const hidenCard = document.getElementById('hidden-card4');
    
            card.style.display = "flex";
            hidenCard.style.display = "none";
        }
        
        if (minutes >= 5){

            const card = document.getElementById('card5');
            const hidenCard = document.getElementById('hidden-card5');
    
            card.style.display = "flex";
            hidenCard.style.display = "none";
        }
    });
}

const close = () => {
    const overlay = document.querySelector('.menu-overlay');
    overlay.style.display = "none";
}

const onClick = () => {
    document.addEventListener("DOMContentLoaded", function() {
        const burgerMenuButton = document.getElementById('burger-menu');
        const closeMenuButton = document.getElementById('close-menu');

        burgerMenuButton.addEventListener("click", function() {
            const overlay = document.querySelector('.menu-overlay');
            overlay.style.display = "flex";
        });

        closeMenuButton.addEventListener("click", function() {
            close();
        });

        const links = document.querySelectorAll('#overlayLink');

        links.forEach((link) => {
            link.addEventListener("click", function() {
                close();
            });
        });
    });

}

function sendEmail() {
    var templateParams = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_x9bmopr', 'template_ljy5t5n', templateParams)
        .then(function(response) {
            const notification = document.getElementById('success');
            notification.style.display = 'flex';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 2000)
        }, function(error) {
            const notification = document.getElementById('error');
            notification.style.display = 'flex';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 2000)
        });
}

onClick();
showCards();