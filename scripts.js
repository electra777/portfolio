let btn = document.querySelector('.btn-change-theme');
let body = document.querySelector('body');
btn.onclick = function () {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        btn.textContent = 'Светлая тема';
    }
    else  btn.textContent = 'Темная тема';
    
}