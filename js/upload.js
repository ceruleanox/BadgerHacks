const uploadFile = document.getElementById("input-img");
const uploadBtn = document.getElementById("btn-upload");
const uploadText = document.getElementById("text-upload");

uploadBtn.addEventListener("click", function() {
    uploadFile.click();
});

uploadFile.addEventListener("change", function() {
    if(uploadFile.value) {
        uploadText.innerHTML = uploadFile.value;
    } else {
        uploadText.innerHTML = "No file chosen yet."
    }
});