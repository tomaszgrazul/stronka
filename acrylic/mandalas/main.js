var modalAkryloweMandale = document.querySelectorAll('#modal-img-akrylowe-mandale');
console.log(modalAkryloweMandale);
    for (var i = 0, j = modalAkryloweMandale.length; i < j; i++) {

        modalAkryloweMandale[i].addEventListener('click', function(){

            document.getElementById('my-modal-akrylowe-mandale').style.display = 'block';
            document.getElementById('img-akrylowe-mandale').src = this.src;
        })
    };

    document.getElementsByClassName('close-akrylowe-mandale')[0].addEventListener('click', function() { 
        document.getElementById('my-modal-akrylowe-mandale').style.display = 'none';
    });