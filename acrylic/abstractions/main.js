var modalacrylicabstractions = document.querySelectorAll('.modal-img-acrylic-abstractions');

    for (var i = 0, j = modalacrylicabstractions.length; i < j; i++) {

        modalacrylicabstractions[i].addEventListener('click', function(){

            document.getElementById('my-modal-acrylic-abstractions').style.display = 'block';
            const image = document.createElement('img');
            image.setAttribute('class', 'modal-content');
            image.setAttribute('id', 'img-acrylic-abstractions');
            document.querySelector('.scale-1').appendChild(image);
            document.getElementById('img-acrylic-abstractions').src = this.src;
        })
    };

    document.getElementsByClassName('close-acrylic-abstractions')[0].addEventListener('click', function() { 
        document.getElementById('my-modal-acrylic-abstractions').style.display = 'none';
    });

    document.getElementsByClassName('fa-bars')[0].addEventListener('click', function() {
    
        document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
    });
    
    document.getElementsByClassName('fa-times')[0].addEventListener('click', function() {
    
        document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
    });