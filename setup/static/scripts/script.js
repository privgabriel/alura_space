document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.xss_button').addEventListener('click', function() {
        const inputLink = document.querySelector('.input_link').value;
        window.location.href = inputLink;
    });
});
