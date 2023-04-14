    const modalSzkice = document.querySelectorAll('.modal-img-szkice');

    for (let i = 0, j = modalSzkice.length; i < j; i++) {

        modalSzkice[i].addEventListener('click', function(){

            document.getElementById('my-modal-szkice').style.display = 'block';

            const image = document.createElement('img');
            image.setAttribute('class', 'modal-content');
            image.setAttribute('id', 'img-szkice');
            document.querySelector('.scale-1').appendChild(image);
            document.getElementById('img-szkice').src = this.src;
        })
    };

    document.getElementsByClassName('close-szkice')[0].addEventListener('click', function() { 

        document.getElementById('my-modal-szkice').style.display = 'none';
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