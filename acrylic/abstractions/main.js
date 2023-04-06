var modalAkryloweAbstrakcje = document.querySelectorAll('#modal-img-akrylowe-abstrakcje');
console.log(modalAkryloweAbstrakcje);
    for (var i = 0, j = modalAkryloweAbstrakcje.length; i < j; i++) {

        modalAkryloweAbstrakcje[i].addEventListener('click', function(){

            document.getElementById('my-modal-akrylowe-abstrakcje').style.display = 'block';
            document.getElementById('img-akrylowe-abstrakcje').src = this.src;
        })
    };

    document.getElementsByClassName('close-akrylowe-abstrakcje')[0].addEventListener('click', function() { 
        document.getElementById('my-modal-akrylowe-abstrakcje').style.display = 'none';
    });