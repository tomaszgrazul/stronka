var modalOlejneNaturalistyczne = document.querySelectorAll('#modal-img-olejne-naturalistyczne');

    for (var i = 0, j = modalOlejneNaturalistyczne.length; i < j; i++) {

        modalOlejneNaturalistyczne[i].addEventListener('click', function(){

            document.getElementById('my-modal-olejne-naturalistyczne').style.display = 'block';
            document.getElementById('img-olejne-naturalistyczne').src = this.src;
        })
    };

    document.getElementsByClassName('close-olejne-naturalistyczne')[0].addEventListener('click', function() { 
    document.getElementById('my-modal-olejne-naturalistyczne').style.display = 'none';
    });