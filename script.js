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



const sendEmail = async (event) => {
    try {
        event.preventDefault();
        let recaptchaResponse = grecaptcha.getResponse();

        const templateParams = {
            name: document.getElementById('name').value,
            surname: document.getElementById('surname').value,
            phone: document.getElementById('phone').value,
            establishment: document.getElementById('establishment').value,
            select: document.getElementById('select').value
        };
        
        if(!recaptchaResponse){
            const notification = document.getElementById('captcha');
            notification.style.display = 'flex';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 2000)
        }

        if(templateParams.name.length === 0 || templateParams.surname.length === 0 || templateParams.phone.length === 0 || templateParams.establishment.length === 0 || templateParams.select.length === 0){
            const notification = document.getElementById('empty');
            notification.style.display = 'flex';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 2000)

        } else {
            emailjs.send('service_p0yamsu', 'template_dkrs1l4', templateParams)
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
    } catch (err) {
        console.log(err);
    }
}

//таймер

// Функция для обновления таймера
function updateCountdown() {
    const now = new Date().getTime();
    const countdownDate = new Date("2024-03-23T11:00:00").getTime(); // Укажите вашу дату здесь
    const distance = countdownDate - now;
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    if(document.getElementById("days")){
        document.getElementById("days").textContent = days;
    }
    if(document.getElementById("hours")){
        document.getElementById("hours").textContent = hours;
    }
    if(document.getElementById("minutes")){
        document.getElementById("minutes").textContent = minutes;
    }

  }

// Обновление таймера каждую секунду
setInterval(updateCountdown, 1000);

// Инициализация таймера при загрузке страницы
updateCountdown();
  

onClick();