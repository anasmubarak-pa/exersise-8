let image_uploader = <HTMLInputElement> document.querySelector('#imageuploader')
let imagegallery = <HTMLDivElement> document.querySelector('.image_gallery')
let upload_text = <HTMLDivElement> document.querySelector('.uploadtext')
let delete_img = <HTMLDivElement> document.querySelector('.hidden')
console.log(imagegallery)

function deleteSelected()
{
    document.querySelectorAll('.delete').forEach((e)=>{
        imagegallery.removeChild(e)
    })
    isEmpty()
}

function isEmpty()
{
    if(imagegallery.innerHTML=='')
    {
        upload_text.style.display = 'initial'
        delete_img.style.display = 'none'
    }
    else
    {
        upload_text.style.display = 'none'
        delete_img.style.display = 'initial'
    }   
}

isEmpty()

function updateGallery()
{
    if(image_uploader.files&&image_uploader.files[0])
    {
        console.log(image_uploader.files)
        console.log(URL.createObjectURL(image_uploader.files[0]))
        let imagect = document.createElement('div')
        imagect.classList.add('imagecontainer')
        let image = document.createElement('img')
        let closebutton = document.createElement('div')
        closebutton.classList.add('closebutton')
        closebutton.innerText = 'X'
        imagect.addEventListener('click',function(e:PointerEvent){
            if(e.target instanceof Element)
            {
                e.target.classList.toggle('delete')
            }
        })
        closebutton.addEventListener('click',function(e){
            if(e.target instanceof Element&&e.target.parentElement)
            {
                e.target.parentElement.classList.add('delete')
            }
            deleteSelected()
        })
        image.src = `${URL.createObjectURL(image_uploader.files[0])}`
        imagect.appendChild(image)
        imagect.appendChild(closebutton)
        imagegallery.appendChild(imagect)
        console.log(image_uploader.files)
    }
    isEmpty()
}