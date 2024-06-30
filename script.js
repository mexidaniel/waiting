// Establecer la fecha objetivo
const targetDate = new Date('June 8, 2025 00:00:00').getTime();

// Actualizar la cuenta regresiva cada segundo
const countdown = setInterval(() => {
    // Obtener la fecha y hora actual
    const now = new Date().getTime();

    // Calcular la diferencia entre la fecha actual y la fecha objetivo
    const difference = targetDate - now;

    // Calcular el tiempo restante en días, horas, minutos y segundos
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Mostrar la cuenta regresiva en el elemento con id="countdown"
    document.getElementById('countdown').innerHTML = 
        `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

    // Si la cuenta regresiva ha terminado, mostrar un mensaje
    if (difference < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = "¡La cuenta regresiva ha terminado!";
    }
}, 1000);

// Movimiento del logo de DVD
const dvd = document.getElementById('dvd');
let posX = Math.random() * (window.innerWidth - dvd.clientWidth);
let posY = Math.random() * (window.innerHeight - dvd.clientHeight);
let directionX = 1;
let directionY = 1;
const speed = 2; // Ajusta la velocidad según sea necesario

function moveDVD() {
    posX += directionX * speed;
    posY += directionY * speed;

    // Cambiar dirección si el logo alcanza los bordes
    if (posX <= 0 || posX >= window.innerWidth - dvd.clientWidth) {
        directionX *= -1;
    }
    if (posY <= 0 || posY >= window.innerHeight - dvd.clientHeight) {
        directionY *= -1;
    }

    dvd.style.left = posX + 'px';
    dvd.style.top = posY + 'px';

    requestAnimationFrame(moveDVD);
}

// Iniciar el movimiento
moveDVD();
