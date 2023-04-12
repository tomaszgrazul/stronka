var modalSzkice = document.querySelectorAll('#modal-img-szkice');

    for (var i = 0, j = modalSzkice.length; i < j; i++) {

        modalSzkice[i].addEventListener('click', function(){

            document.getElementById('my-modal-szkice').style.display = 'block';
            document.getElementById('img-szkice').src = this.src;
            document.getElementById('modal-img-szkice').style.removeProperty('height');
            // document.getElementById('modal-img-szkice').removeAttribute('height');
            // document.getElementById('modal-img-szkice').style.height = null;
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