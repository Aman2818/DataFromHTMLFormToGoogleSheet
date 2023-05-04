// let url = 'https://script.google.com/macros/s/AKfycbyNCn4le0aZw1RS1ftajdZiyTj66u-7URHiJ4nsAaHkOEaVxrIvet_7P5bXXgTnXCDM/exec';
let url = 'https://script.google.com/macros/s/AKfycbyNCn4le0aZw1RS1ftajdZiyTj66u-7URHiJ4nsAaHkOEaVxrIvet_7P5bXXgTnXCDM/exec';

let form = document.getElementById("form");
form.addEventListener("submit", function(e){
    e.target.btn.innerHTML = "Submitting....";
    let dataFromForm = new FormData(form);
    fetch(url,{
        method:"post",
        body:dataFromForm
    }).then(function(res){
        res.text()})
    .then(function(finalRes){
        e.target.btn.innerHTML = "Submit";
        document.getElementById("r").innerHTML="Data Saved Successfully";
        console.log(finalRes);
        form.reset();
        
        setTimeout(function(){
            document.getElementById("r").innerHTML="";
        },3000)
    });
    e.preventDefault(); // after submitting the form will reload but this function will stop the submit event of the form or we can say stop reloading 

})