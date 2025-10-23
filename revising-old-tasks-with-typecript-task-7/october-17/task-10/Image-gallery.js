var image_uploader = document.querySelector('#imageuploader');
var imagegallery = document.querySelector('.image_gallery');
var upload_text = document.querySelector('.uploadtext');
var delete_img = document.querySelector('.hidden');
console.log(imagegallery);
function deleteSelected() {
    document.querySelectorAll('.delete').forEach(function (e) {
        imagegallery.removeChild(e);
    });
    isEmpty();
}
function isEmpty() {
    if (imagegallery.innerHTML == '') {
        upload_text.style.display = 'initial';
        delete_img.style.display = 'none';
    }
    else {
        upload_text.style.display = 'none';
        delete_img.style.display = 'initial';
    }
}
isEmpty();
function updateGallery() {
    if (image_uploader.files && image_uploader.files[0]) {
        console.log(image_uploader.files);
        console.log(URL.createObjectURL(image_uploader.files[0]));
        var imagect = document.createElement('div');
        imagect.classList.add('imagecontainer');
        var image = document.createElement('img');
        var closebutton = document.createElement('div');
        closebutton.classList.add('closebutton');
        closebutton.innerText = 'X';
        imagect.addEventListener('click', function (e) {
            if (e.target instanceof Element) {
                e.target.classList.toggle('delete');
            }
        });
        closebutton.addEventListener('click', function (e) {
            if (e.target instanceof Element && e.target.parentElement) {
                e.target.parentElement.classList.add('delete');
            }
            deleteSelected();
        });
        image.src = "".concat(URL.createObjectURL(image_uploader.files[0]));
        imagect.appendChild(image);
        imagect.appendChild(closebutton);
        imagegallery.appendChild(imagect);
        console.log(image_uploader.files);
    }
    isEmpty();
}
