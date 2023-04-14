    const modalOlejneNaturalistyczne = document.querySelectorAll('.modal-img-olejne-naturalistyczne');

    for (let i = 0, j = modalOlejneNaturalistyczne.length; i < j; i++) {

        modalOlejneNaturalistyczne[i].addEventListener('click', function(){

            document.getElementById('my-modal-olejne-naturalistyczne').style.display = 'block';
            const image = document.createElement('img');
            image.setAttribute('class', 'modal-content');
            image.setAttribute('id', 'img-olejne-naturalistyczne');
            document.querySelector('.scale-1').appendChild(image);
            document.getElementById('img-olejne-naturalistyczne').src = this.src;
        })
    };

    document.getElementsByClassName('close-olejne-naturalistyczne')[0].addEventListener('click', function() { 
    document.getElementById('my-modal-olejne-naturalistyczne').style.display = 'none';
    });


    
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