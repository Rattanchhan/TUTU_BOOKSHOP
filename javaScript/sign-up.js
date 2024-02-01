let bool = 0;
function change(){
    document.getElementById('Female').style.backgroundColor="rgb(202, 145, 70)";
    document.getElementById('Male').style.backgroundColor="rgb(248, 189, 112)";
    bool=1;
}
function change1(){
    document.getElementById('Male').style.backgroundColor="rgb(202, 145, 70)";
    document.getElementById('Female').style.backgroundColor="rgb(248, 189, 112)"; 
    bool=2;
}
const singn1=document.getElementById('sign_in');
singn1.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href="../html/sign-in.html"
})

const email=document.getElementById('email');
let phone=document.getElementById('phone');
let password=document.getElementById('password');
const firstName=document.getElementById('first-name');
let lastName=document.getElementById('last-name');
let _address=document.getElementById('address');
const sign_up_button=document.getElementById('sign-up-button');
sign_up_button.addEventListener('click',(e)=>{
    e.preventDefault();
    
    if(bool==2){
        localStorage.setItem('gender','Male')
    }
    else if(bool==1){
        localStorage.setItem('gender','Female')
    }else localStorage.setItem('gender','Other')
    localStorage.setItem('email',email.value);
    localStorage.setItem('phone',phone.value);
    localStorage.setItem('password',password.value);
    localStorage.setItem('first-name',firstName.value);
    localStorage.setItem('last-name',lastName.value);
    localStorage.setItem('address',_address.value);
    window.location.href="../html/authentication.html"
})



