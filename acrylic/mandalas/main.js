var modalAkryloweMandale = document.querySelectorAll('.modal-img-akrylowe-mandale');

    for (var i = 0, j = modalAkryloweMandale.length; i < j; i++) {

        modalAkryloweMandale[i].addEventListener('click', function(){

            document.getElementById('my-modal-akrylowe-mandale').style.display = 'block';
            const image = document.createElement('img');
            image.setAttribute('class', 'modal-content');
            image.setAttribute('id', 'img-akrylowe-mandale');
            document.querySelector('.scale-1').appendChild(image);
            document.getElementById('img-akrylowe-mandale').src = this.src;
            document.getElementById('modal-img-akrylowe-mandale').style.removeProperty('height');
            // document.getElementById('modal-img-akrylowe-mandale').removeAttribute('height');
            // document.getElementById('modal-img-akrylowe-mandale').style.height = null;
        })
    };

    document.getElementsByClassName('close-akrylowe-mandale')[0].addEventListener('click', function() { 
        document.getElementById('my-modal-akrylowe-mandale').style.display = 'none';
    });

    document.getElementsByClassName('fa-bars')[0].addEventListener('click', function() {
    
        document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
    });
    
    document.getElementsByClassName('fa-times')[0].addEventListener('click', function() {
    
        document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
    });