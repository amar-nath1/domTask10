const myform=document.querySelector('#my-form')
const nameInput=document.querySelector('#name')
const emailInput=document.querySelector('#email')
const msg=document.querySelector('.msg')

myform.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault()
    if(nameInput.value==='' || emailInput.value===''){
        msg.classList.add('error')
        msg.innerHTML="Name and Email both are mandatory fields"
        setTimeout(()=>msg.remove(),3000)
    }
    else{
        localStorage.setItem(nameInput.value,emailInput.value)
    }
}

