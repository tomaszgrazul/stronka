var modalSzkice = document.querySelectorAll('#modal-img-szkice');

    for (var i = 0, j = modalSzkice.length; i < j; i++) {

        modalSzkice[i].addEventListener('click', function(){

            document.getElementById('my-modal-szkice').style.display = 'block';
            document.getElementById('img-szkice').src = this.src;
        })
    };

    document.getElementsByClassName('close-szkice')[0].addEventListener('click', function() { 
        document.getElementById('my-modal-szkice').style.display = 'none';
    });