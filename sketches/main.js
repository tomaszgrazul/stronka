    const modalsketches = document.querySelectorAll('.modal-img-sketches');

    for (let i = 0, j = modalsketches.length; i < j; i++) {

        modalsketches[i].addEventListener('click', function(){

            document.getElementById('my-modal-sketches').style.display = 'block';

            const image = document.createElement('img');
            image.setAttribute('class', 'modal-content');
            image.setAttribute('id', 'img-sketches');
            document.querySelector('.scale-1').appendChild(image);
            document.getElementById('img-sketches').src = this.src;
        })
    };

    document.getElementsByClassName('close-sketches')[0].addEventListener('click', function() { 

        document.getElementById('my-modal-sketches').style.display = 'none';
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