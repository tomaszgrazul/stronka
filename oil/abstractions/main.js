    const modaloilabstractions = document.querySelectorAll('.modal-img-oil-abstractions');

    for (let i = 0, j = modaloilabstractions.length; i < j; i++) {

        modaloilabstractions[i].addEventListener('click', function(){

            document.getElementById('my-modal-oil-abstractions').style.display = 'block';
            const image = document.createElement('img');
            image.setAttribute('class', 'modal-content');
            image.setAttribute('id', 'img-oil-abstractions');
            document.querySelector('.scale-1').appendChild(image);
            document.getElementById('img-oil-abstractions').src = this.src;
        })
    };

    document.getElementsByClassName('close-oil-abstractions')[0].addEventListener('click', function() { 

        document.getElementById('my-modal-oil-abstractions').style.display = 'none';
        document.getElementById("img-oil-abstractions").remove();
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