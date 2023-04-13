var modalOlejneAbstrakcje = document.querySelectorAll('.modal-img-olejne-abstrakcje');

    for (var i = 0, j = modalOlejneAbstrakcje.length; i < j; i++) {

        modalOlejneAbstrakcje[i].addEventListener('click', function(){

            document.getElementById('my-modal-olejne-abstrakcje').style.display = 'block';
            const image = document.createElement('img');
            image.setAttribute('class', 'modal-content');
            image.setAttribute('id', 'img-olejne-abstrakcje');
            document.querySelector('.scale-1').appendChild(image);
            document.getElementById('img-olejne-abstrakcje').src = this.src;
        })
    };

    document.getElementsByClassName('close-olejne-abstrakcje')[0].addEventListener('click', function() { 
    document.getElementById('my-modal-olejne-abstrakcje').style.display = 'none';
    });


    
    document.getElementsByClassName('fa-bars')[0].addEventListener('click', function() {
    
        document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
    });
    
    document.getElementsByClassName('fa-times')[0].addEventListener('click', function() {
    
        document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
    });