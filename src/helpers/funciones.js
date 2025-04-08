import Swal from 'sweetalert2'
export function alrtaRedireccion(redireccion, mensaje, ruta) {

    let timerInterval;
    Swal.fire({
        title: "Bienvenido al sistema!",
        html: "Sera redireccionado en <b></b> milliseconds.",
        timer: 1000,
        icon: "success",
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
            redireccion(ruta)
        }
    })
}

export function alertaError() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
    });
}