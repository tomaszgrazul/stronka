document.getElementsByClassName('switch-main')[0].addEventListener('click', function(element) {
    element.preventDefault();
    // document.getElementsByClassName('main-section')[0].style.opacity = '1';
    // document.getElementsByClassName('akrylowe')[0].style.opacity = '0';
    // document.getElementsByClassName('olejne')[0].style.opacity = '0';
    document.getElementsByClassName('main-section')[0].classList.remove('switch-main-off');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-on');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-on');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-szkice-on');
});

document.getElementsByClassName('switch-akrylowe')[0].addEventListener('click', function(element) {
    element.preventDefault();
    // document.getElementsByClassName('akrylowe')[0].classList.toggle('switch-akrylowe-class');
    // document.getElementsByClassName('main-section')[0].classList.toggle('switch-main-class');
    // document.getElementsByClassName('main-section')[0].style.opacity = '0';
    // document.getElementsByClassName('akrylowe')[0].style.opacity = '1';
    // document.getElementsByClassName('olejne')[0].style.opacity = '0';
    document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
    document.getElementsByClassName('akrylowe')[0].classList.add('switch-akrylowe-on');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-on');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-szkice-on');
});

document.getElementsByClassName('switch-olejne')[0].addEventListener('click', function(element) {
    element.preventDefault();
    console.log(document.getElementsByClassName('switch-olejne'));
    // document.getElementsByClassName('akrylowe')[0].classList.toggle('switch-akrylowe-class');
    // document.getElementsByClassName('main-section')[0].classList.toggle('switch-main-class');
    // document.getElementsByClassName('olejne')[0].style.opacity = '1';
    // document.getElementsByClassName('main-section')[0].style.opacity = '0';
    // document.getElementsByClassName('akrylowe')[0].style.opacity = '0';
    document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-on');
    document.getElementsByClassName('olejne')[0].classList.add('switch-olejne-on');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-szkice-on');

});

document.getElementsByClassName('switch-szkice')[0].addEventListener('click', function(element) {
    element.preventDefault();
    document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-on');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-on');
    document.getElementsByClassName('szkice')[0].classList.add('switch-szkice-on');
})