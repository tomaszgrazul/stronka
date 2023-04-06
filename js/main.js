document.getElementsByClassName('fa-bars')[0].addEventListener('click', function() {
    
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
});

document.getElementsByClassName('fa-times')[0].addEventListener('click', function() {

    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
})



var modalAkryloweMandale = document.querySelectorAll('#modal-img-akrylowe-mandale');

    for (var i = 0, j = modalAkryloweMandale.length; i < j; i++) {

        modalAkryloweMandale[i].addEventListener('click', function(){

            document.getElementById('my-modal-akrylowe-mandale').style.display = 'block';
            document.getElementById('img-akrylowe-mandale').src = this.src;
        })
    };

    document.getElementsByClassName('close-akrylowe-mandale')[0].addEventListener('click', function() { 
        document.getElementById('my-modal-akrylowe-mandale').style.display = 'none';
    });



var modalAkryloweAbstrakcje = document.querySelectorAll('#modal-img-akrylowe-abstrakcje');

    for (var i = 0, j = modalAkryloweAbstrakcje.length; i < j; i++) {

        modalAkryloweAbstrakcje[i].addEventListener('click', function(){

            document.getElementById('my-modal-akrylowe-abstrakcje').style.display = 'block';
            document.getElementById('img-akrylowe-abstrakcje').src = this.src;
        })
    };

    document.getElementsByClassName('close-akrylowe-abstrakcje')[0].addEventListener('click', function() { 
        document.getElementById('my-modal-akrylowe-abstrakcje').style.display = 'none';
    });


    
var modalSzkice = document.querySelectorAll('#modal-img-szkice');

    for (var i = 0, j = modalSzkice.length; i < j; i++) {

        modalSzkice[i].addEventListener('click', function(){

            document.getElementById('my-modal-szkice').style.display = 'block';
            document.getElementById('img-szkice').src = this.src;
        })
    };

    document.getElementsByClassName('close-szkice')[0].addEventListener('click', function() { 
        document.getElementById('my-modal-szkice').style.display = 'none';
    });


var modalOlejneAbstrakcje = document.querySelectorAll('#modal-img-olejne-abstrakcje');

    for (var i = 0, j = modalOlejneAbstrakcje.length; i < j; i++) {

        modalOlejneAbstrakcje[i].addEventListener('click', function(){

            document.getElementById('my-modal-olejne-abstrakcje').style.display = 'block';
            document.getElementById('img-olejne-abstrakcje').src = this.src;
        })
    };

    document.getElementsByClassName('close-olejne-abstrakcje')[0].addEventListener('click', function() { 
    document.getElementById('my-modal-olejne-abstrakcje').style.display = 'none';
    });


var modalOlejneNaturalistyczne = document.querySelectorAll('#modal-img-olejne-naturalistyczne');

    for (var i = 0, j = modalOlejneNaturalistyczne.length; i < j; i++) {

        modalOlejneNaturalistyczne[i].addEventListener('click', function(){

            document.getElementById('my-modal-olejne-naturalistyczne').style.display = 'block';
            document.getElementById('img-olejne-naturalistyczne').src = this.src;
        })
    };

    document.getElementsByClassName('close-olejne-naturalistyczne')[0].addEventListener('click', function() { 
    document.getElementById('my-modal-olejne-naturalistyczne').style.display = 'none';
    });




document.getElementsByClassName('switch-main')[0].addEventListener('click', function(element) {

    element.preventDefault();
    document.getElementsByClassName('main-section')[0].classList.remove('switch-main-off');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-on');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-opacity');
    document.getElementsByClassName('akrylowe-mandale')[0].classList.remove('switch-gallery-on');
    document.getElementsByClassName('akrylowe-mandale')[0].classList.remove('switch-gallery-opacity');
    document.getElementsByClassName('akrylowe-abstrakcje')[0].classList.remove('switch-gallery-on');
    document.getElementsByClassName('akrylowe-abstrakcje')[0].classList.remove('switch-gallery-opacity');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-on');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-gallery-opacity');
    document.getElementsByClassName('olejne-abstrakcje')[0].classList.remove('switch-gallery-on');
    document.getElementsByClassName('olejne-abstrakcje')[0].classList.remove('switch-gallery-opacity');
    document.getElementsByClassName('olejne-naturalistyczne')[0].classList.remove('switch-gallery-on');
    document.getElementsByClassName('olejne-naturalistyczne')[0].classList.remove('switch-gallery-opacity');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-gallery-on');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-szkice-opacity');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-on');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-opacity');
    document.getElementsByClassName('main-section')[0].style.opacity = '0';
    setTimeout(timer, 1);
    function timer() {
        document.getElementsByClassName('main-section')[0].style.opacity = '1';
    }
});


var switchAkrylowe = document.querySelectorAll('.switch-akrylowe');

    for (var i = 0, j = switchAkrylowe.length; i < j; i++) {

        switchAkrylowe[i].addEventListener('click', function(element) {

            element.preventDefault();
            document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
            document.getElementsByClassName('main-section')[0].classList.remove('switch-main-opacity');
            document.getElementsByClassName('akrylowe')[0].classList.add('switch-akrylowe-on');
            document.getElementsByClassName('akrylowe-mandale')[0].classList.remove('switch-gallery-on');
            document.getElementsByClassName('akrylowe-mandale')[0].classList.remove('switch-gallery-opacity');
            document.getElementsByClassName('akrylowe-abstrakcje')[0].classList.remove('switch-gallery-on');
            document.getElementsByClassName('akrylowe-abstrakcje')[0].classList.remove('switch-gallery-opacity');
            document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-on');
            document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-opacity');
            document.getElementsByClassName('olejne-abstrakcje')[0].classList.remove('switch-gallery-on');
            document.getElementsByClassName('olejne-abstrakcje')[0].classList.remove('switch-gallery-opacity');
            document.getElementsByClassName('olejne-naturalistyczne')[0].classList.remove('switch-gallery-on');
            document.getElementsByClassName('olejne-naturalistyczne')[0].classList.remove('switch-gallery-opacity');
            document.getElementsByClassName('szkice')[0].classList.remove('switch-gallery-on');
            document.getElementsByClassName('szkice')[0].classList.remove('switch-gallery-opacity');
            document.getElementsByClassName('contact')[0].classList.remove('switch-contact-on');
            document.getElementsByClassName('contact')[0].classList.remove('switch-contact-opacity');
            document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
            setTimeout(timer, 1);
            function timer() {
                document.getElementsByClassName('akrylowe')[0].classList.add('switch-akrylowe-opacity');
            }
        })
    };


    document.getElementsByClassName('switch-akrylowe-mandale')[0].addEventListener('click', function(element) {
    
        element.preventDefault();
        document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
        document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-on');
        document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-opacity');
        document.getElementsByClassName('akrylowe-mandale')[0].classList.add('switch-gallery-on');
        document.getElementsByClassName('akrylowe-abstrakcje')[0].classList.remove('switch-gallery-on');
        document.getElementsByClassName('akrylowe-abstrakcje')[0].classList.remove('switch-gallery-opacity');
        document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-on');
        document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-opacity');
        document.getElementsByClassName('olejne-abstrakcje')[0].classList.remove('switch-gallery-on');
        document.getElementsByClassName('olejne-abstrakcje')[0].classList.remove('switch-gallery-opacity');
        document.getElementsByClassName('olejne-naturalistyczne')[0].classList.remove('switch-gallery-on');
        document.getElementsByClassName('olejne-naturalistyczne')[0].classList.remove('switch-gallery-opacity');
        document.getElementsByClassName('szkice')[0].classList.remove('switch-gallery-on');
        document.getElementsByClassName('szkice')[0].classList.remove('switch-gallery-opacity');
        document.getElementsByClassName('contact')[0].classList.remove('switch-contact-on');
        setTimeout(timer, 1);
        function timer() {
            document.getElementsByClassName('akrylowe-mandale')[0].classList.add('switch-gallery-opacity');
        }
    });


    document.getElementsByClassName('switch-akrylowe-abstrakcje')[0].addEventListener('click', function(element) {
    
        element.preventDefault();
        document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
        document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-on');
        document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-opacity');
        document.getElementsByClassName('akrylowe-mandale')[0].classList.remove('switch-gallery-on');
        document.getElementsByClassName('akrylowe-mandale')[0].classList.remove('switch-akrylowe-opacity');
        document.getElementsByClassName('akrylowe-abstrakcje')[0].classList.add('switch-gallery-on');
        document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-on');
        document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-opacity');
        document.getElementsByClassName('olejne-abstrakcje')[0].classList.remove('switch-gallery-on');
        document.getElementsByClassName('olejne-abstrakcje')[0].classList.remove('switch-gallery-opacity');
        document.getElementsByClassName('olejne-naturalistyczne')[0].classList.remove('switch-gallery-on');
        document.getElementsByClassName('olejne-naturalistyczne')[0].classList.remove('switch-gallery-opacity');
        document.getElementsByClassName('szkice')[0].classList.remove('switch-gallery-on');
        document.getElementsByClassName('szkice')[0].classList.remove('switch-gallery-opacity');
        document.getElementsByClassName('contact')[0].classList.remove('switch-contact-on');
        setTimeout(timer, 1);
        function timer() {
            document.getElementsByClassName('akrylowe-abstrakcje')[0].classList.add('switch-gallery-opacity');
        }
    });


    var switchOlejne = document.querySelectorAll('.switch-olejne');

    for (var i = 0, j = switchOlejne.length; i < j; i++) {

        switchOlejne[i].addEventListener('click', function(element) {

        element.preventDefault();
        document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
        document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-on');
        document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-opacity');
        document.getElementsByClassName('akrylowe-mandale')[0].classList.remove('switch-gallery-on');
        document.getElementsByClassName('akrylowe-mandale')[0].classList.remove('switch-gallery-opacity');
        document.getElementsByClassName('akrylowe-abstrakcje')[0].classList.remove('switch-gallery-on');
        document.getElementsByClassName('akrylowe-abstrakcje')[0].classList.remove('switch-gallery-opacity');
        document.getElementsByClassName('olejne')[0].classList.add('switch-olejne-on');
        document.getElementsByClassName('olejne-abstrakcje')[0].classList.remove('switch-gallery-on');
        document.getElementsByClassName('olejne-abstrakcje')[0].classList.remove('switch-gallery-opacity');
        document.getElementsByClassName('olejne-naturalistyczne')[0].classList.remove('switch-gallery-on');
        document.getElementsByClassName('olejne-naturalistyczne')[0].classList.remove('switch-gallery-opacity');
        document.getElementsByClassName('szkice')[0].classList.remove('switch-gallery-on');
        document.getElementsByClassName('szkice')[0].classList.remove('switch-gallery-opacity');
        document.getElementsByClassName('contact')[0].classList.remove('switch-contact-on');
        document.getElementsByClassName('contact')[0].classList.remove('switch-contact-opacity');
        document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
        setTimeout(timer, 1);
        function timer() {
            document.getElementsByClassName('olejne')[0].classList.add('switch-olejne-opacity');
        }
    })
};  


var switchOlejneAbstrakcje = document.querySelectorAll('.switch-olejne-abstrakcje');

for (var i = 0, j = switchOlejneAbstrakcje.length; i < j; i++) {

    switchOlejneAbstrakcje[i].addEventListener('click', function(element) {

    element.preventDefault();
    document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-on');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-opacity');
    document.getElementsByClassName('akrylowe-mandale')[0].classList.remove('switch-gallery-on');
    document.getElementsByClassName('akrylowe-mandale')[0].classList.remove('switch-gallery-opacity');
    document.getElementsByClassName('akrylowe-abstrakcje')[0].classList.remove('switch-gallery-on');
    document.getElementsByClassName('akrylowe-abstrakcje')[0].classList.remove('switch-gallery-opacity');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-on');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-opacity');
    document.getElementsByClassName('olejne-abstrakcje')[0].classList.add('switch-gallery-on');
    document.getElementsByClassName('olejne-naturalistyczne')[0].classList.remove('switch-gallery-on');
    document.getElementsByClassName('olejne-naturalistyczne')[0].classList.remove('switch-gallery-opacity');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-gallery-on');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-gallery-opacity');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-on');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-opacity');
    setTimeout(timer, 1);
    function timer() {
        document.getElementsByClassName('olejne-abstrakcje')[0].classList.add('switch-gallery-opacity');
    }
})
}; 


var switchOlejneNaturalistyczne = document.querySelectorAll('.switch-olejne-naturalistyczne');

for (var i = 0, j = switchOlejneNaturalistyczne.length; i < j; i++) {

    switchOlejneNaturalistyczne[i].addEventListener('click', function(element) {

    element.preventDefault();
    document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-on');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-opacity');
    document.getElementsByClassName('akrylowe-mandale')[0].classList.remove('switch-gallery-on');
    document.getElementsByClassName('akrylowe-mandale')[0].classList.remove('switch-gallery-opacity');
    document.getElementsByClassName('akrylowe-abstrakcje')[0].classList.remove('switch-gallery-on');
    document.getElementsByClassName('akrylowe-abstrakcje')[0].classList.remove('switch-gallery-opacity');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-on');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-opacity');
    document.getElementsByClassName('olejne-abstrakcje')[0].classList.remove('switch-gallery-on');
    document.getElementsByClassName('olejne-abstrakcje')[0].classList.remove('switch-gallery-opacity');
    document.getElementsByClassName('olejne-naturalistyczne')[0].classList.add('switch-gallery-on');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-gallery-on');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-gallery-opacity');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-on');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-opacity');
    setTimeout(timer, 1);
    function timer() {
        document.getElementsByClassName('olejne-naturalistyczne')[0].classList.add('switch-gallery-opacity');
    }
})
}; 

    var switchSzkice = document.querySelectorAll('.switch-szkice');

    for (var i = 0, j = switchSzkice.length; i < j; i++) {

        switchSzkice[i].addEventListener('click', function(element) {

            element.preventDefault();
            document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
            document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-on');
            document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-opacity');
            document.getElementsByClassName('akrylowe-mandale')[0].classList.remove('switch-gallery-on');
            document.getElementsByClassName('akrylowe-mandale')[0].classList.remove('switch-gallery-opacity');
            document.getElementsByClassName('akrylowe-abstrakcje')[0].classList.remove('switch-gallery-on');
            document.getElementsByClassName('akrylowe-abstrakcje')[0].classList.remove('switch-gallery-opacity');
            document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-on');
            document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-opacity');
            document.getElementsByClassName('olejne-abstrakcje')[0].classList.remove('switch-gallery-on');
            document.getElementsByClassName('olejne-abstrakcje')[0].classList.remove('switch-gallery-opacity');
            document.getElementsByClassName('olejne-naturalistyczne')[0].classList.remove('switch-gallery-on');
            document.getElementsByClassName('olejne-naturalistyczne')[0].classList.remove('switch-gallery-opacity');
            document.getElementsByClassName('szkice')[0].classList.add('switch-gallery-on');
            document.getElementsByClassName('contact')[0].classList.remove('switch-contact-on');
            document.getElementsByClassName('contact')[0].classList.remove('switch-contact-opacity');
            document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
            setTimeout(timer, 1);
            function timer() {
                document.getElementsByClassName('szkice')[0].classList.add('switch-gallery-opacity');
            }
        })
    };

document.getElementsByClassName('switch-contact')[0].addEventListener('click', function(element) {

    element.preventDefault();
    document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-on');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-opacity');
    document.getElementsByClassName('akrylowe-mandale')[0].classList.remove('switch-gallery-on');
    document.getElementsByClassName('akrylowe-mandale')[0].classList.remove('switch-gallery-opacity');
    document.getElementsByClassName('akrylowe-abstrakcje')[0].classList.remove('switch-gallery-on');
    document.getElementsByClassName('akrylowe-abstrakcje')[0].classList.remove('switch-gallery-opacity');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-on');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-opacity');
    document.getElementsByClassName('olejne-abstrakcje')[0].classList.remove('switch-gallery-on');
    document.getElementsByClassName('olejne-abstrakcje')[0].classList.remove('switch-gallery-opacity');
    document.getElementsByClassName('olejne-naturalistyczne')[0].classList.remove('switch-gallery-on');
    document.getElementsByClassName('olejne-naturalistyczne')[0].classList.remove('switch-gallery-opacity');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-gallery-on');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-gallery-opacity');
    document.getElementsByClassName('contact')[0].classList.add('switch-contact-on');
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
    setTimeout(timer, 1);
    function timer() {
        document.getElementsByClassName('contact')[0].classList.add('switch-contact-opacity');
    }
})