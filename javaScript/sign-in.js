const singn1=document.getElementById('sign-up');
singn1.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href="sign-up.html"
})

const sign_in= document.getElementById('sign-in');
let email=document.getElementById('email');
let password=document.getElementById('password');
sign_in.addEventListener('click',(e)=>{
    if(email.value!=null && password.value!=null){
        onsole.log("\tHello");
        if((email.value==localStorage.getItem('email') && password.value==localStorage.getItem('password'))){
            e.preventDefault();
            window.location.href="sign-up.html";
        }
        
    }
    else{
        console.log("\tHello");
    }
})