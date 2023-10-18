const dropZone=document.querySelector(".drop-zone");
const fileInput=document.querySelector("#fileInput");
const browseBtn=document.querySelector(".browseBtn");
const host="https://innshare.herokuapp.com/";
const uploadURL= `${host}api/files`;

dropZone.addEventListener("dragover",(e)=>{
    // console.log("Dragging");
    e.preventDefault();

    if(!dropZone.classList.contains("dragged"))
        dropZone.classList.add("dragged");
});
dropZone.addEventListener("dragleave",(e)=>{
    if(dropZone.classList.contains("dragged"))
        dropZone.classList.remove('dragged');
})
dropZone.addEventListener("drop",(e)=>{
    e.preventDefault();
    if(dropZone.classList.contains("dragged"))
        dropZone.classList.remove('dragged');
    const files=e.dataTransfer.files
    console.log(files)
    fileInput.files=files
    console.log(fileInput.files)
    uploadFile()
})

browseBtn.addEventListener("click",(e)=>{
    fileInput.click();
})

const uploadFile=()=>{
    const file=fileInput.files[0];
    const formData= new FormData();
    formData.append("myFile",file); 

    const xhr= new XMLHttpRequest();
    xhr.onreadystatechange =()=>{
        if (xhr.readyState===XMLHttpRequest.DONE){
            console.log(xhr.response)
        }
    };

    xhr.open("POST",uploadURL)
    xhr.send(formData)
}