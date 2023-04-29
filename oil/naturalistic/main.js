    const modalOilnaturalistic = document.querySelectorAll('.modal-img-oil-naturalistic');

    for (let i = 0, j = modalOilnaturalistic.length; i < j; i++) {

        modalOilnaturalistic[i].addEventListener('click', function(){

            document.getElementById('my-modal-oil-naturalistic').style.display = 'block';
            const image = document.createElement('img');
            image.setAttribute('class', 'modal-content');
            image.setAttribute('id', 'img-oil-naturalistic');
            document.querySelector('.scale-1').appendChild(image);
            document.getElementById('img-oil-naturalistic').src = this.src;
        })
    };

    document.getElementsByClassName('close-oil-naturalistic')[0].addEventListener('click', function() { 

        document.getElementById('my-modal-oil-naturalistic').style.display = 'none';
        document.getElementById("img-oil-naturalistic").remove();
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