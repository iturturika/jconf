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
    const templateParams = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        phone: document.getElementById('phone').value,
        establishment: document.getElementById('establishment').value,
        select: document.getElementById('select').value
    };

    if(
        templateParams.name.length === 0 || templateParams.surname.length === 0 || templateParams.phone.length === 0 || templateParams.establishment.length === 0 || templateParams.select.length === 0
    ){
        const notification = document.getElementById('empty');
        notification.style.display = 'flex';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 2000)
        var recaptchaResponse = grecaptcha.getResponse();
        console.log(recaptchaResponse)
    } else {
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
}

onClick();