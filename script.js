//  https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

const btn = document.querySelector(".btn")
const input = document.querySelector(".input")
const code = document.querySelector(".resim")
const container = document.querySelector(".container")

btn.addEventListener("click", olustur)

window.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        olustur()
        input.value = ""
    }
})

function olustur(){
    let inputValue = input.value;
    input.value = ""
    if(!inputValue) return;
    btn.textContent = "Oluşturuluyor..."
    code.src = `https://api.qrserver.com/v1/create-qr-code/?size=190x150&data=${inputValue}`;

    setTimeout(() => {
        container.classList.add("active")
        btn.textContent = "Oluştur"
    }, 500);
    
}

input.addEventListener("keyup", function(){
    if(!input.value){
        container.classList.remove("active")
    }
})