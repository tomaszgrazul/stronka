var modalacrylicmandalas = document.querySelectorAll('.modal-img-acrylic-mandalas');

    for (var i = 0, j = modalacrylicmandalas.length; i < j; i++) {

        modalacrylicmandalas[i].addEventListener('click', function(){

            document.getElementById('my-modal-acrylic-mandalas').style.display = 'block';
            const image = document.createElement('img');
            image.setAttribute('class', 'modal-content');
            image.setAttribute('id', 'img-acrylic-mandalas');
            document.querySelector('.scale-1').appendChild(image);
            document.getElementById('img-acrylic-mandalas').src = this.src;
        })
    };

    document.getElementsByClassName('close-acrylic-mandalas')[0].addEventListener('click', function() { 

        document.getElementById('my-modal-acrylic-mandalas').style.display = 'none';
        document.getElementById("img-acrylic-mandalas").remove();
    });

    document.getElementsByClassName('fa-bars')[0].addEventListener('click', function() {
    
        document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
    });
    
    document.getElementsByClassName('fa-times')[0].addEventListener('click', function() {
    
        document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
    });