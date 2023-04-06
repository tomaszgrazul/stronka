var modalOlejneAbstrakcje = document.querySelectorAll('#modal-img-olejne-abstrakcje');

    for (var i = 0, j = modalOlejneAbstrakcje.length; i < j; i++) {

        modalOlejneAbstrakcje[i].addEventListener('click', function(){

            document.getElementById('my-modal-olejne-abstrakcje').style.display = 'block';
            document.getElementById('img-olejne-abstrakcje').src = this.src;
        })
    };

    document.getElementsByClassName('close-olejne-abstrakcje')[0].addEventListener('click', function() { 
    document.getElementById('my-modal-olejne-abstrakcje').style.display = 'none';
    });