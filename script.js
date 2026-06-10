const photoInput = document.getElementById("photo");

photoInput.addEventListener("change", function(e){

const reader = new FileReader();

reader.onload = function(){

document.getElementById("previewPhoto").src =
reader.result;

};

reader.readAsDataURL(e.target.files[0]);

});

function generateCard(){

document.getElementById("cName").innerText =
document.getElementById("name").value;

document.getElementById("cId").innerText =
document.getElementById("id").value;

document.getElementById("cDept").innerText =
document.getElementById("dept").value;

document.getElementById("cSession").innerText =
document.getElementById("session").value;

document.getElementById("cBlood").innerText =
document.getElementById("blood").value;

document.getElementById("cDob").innerText =
document.getElementById("dob").value;
}

function downloadCard(){

html2canvas(document.getElementById("card"))
.then(canvas=>{

const link = document.createElement("a");

link.download = "demo-card.png";

link.href = canvas.toDataURL();

link.click();

});

}
