document.getElementsByClassName('fa-bars')[0].addEventListener('click', function() {
    
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
});

document.getElementsByClassName('fa-times')[0].addEventListener('click', function() {

    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
});

const navItem = document.querySelectorAll('.nav-item');

for (let i = 0; i <= navItem.length - 1; i++) {

    navItem[i].addEventListener('click', function() {

        document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
    });
}
