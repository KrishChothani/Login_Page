const login_box = document.querySelector('.login_box');
const login_link = document.querySelector('.login-link');
const register_link = document.querySelector('.register-link');
const container = document.querySelector('.container');
const content = document.querySelector('.content');
const logo = document.querySelector('.logo');
const login_btn = document.querySelector('.login1');
const password = document.querySelector('.password');
const main = document.querySelector('.main');

register_link.addEventListener('click', ()=>{
    login_box.classList.add('active');
})

login_link.addEventListener('click', ()=>{
    login_box.classList.remove('active');
})


let login1add = false;
window.addEventListener('resize', screen1130px);
screen1130px();
function screen1130px() {

  if(window.innerWidth > 1012 && window.innerWidth < 1150){
    content.style.width ='100%-365px';
    login_box.style.width ='365px';
    var login1 = document.querySelector('.login1');
    if (login1) login1.remove();
    login1add=false;
    
  }
 
  if(window.innerWidth >= 1150){
    content.style.width ='58%';
    login_box.style.width ='42%';
    var login1 = document.querySelector('.login1');
    if (login1) login1.remove();
    login1add=false;
  }

   if (window.innerWidth <= 1012) {
    content.style.width ='100%';
    login_box.style.width ='0%';
    if(login1add==false){
        var login1 = document.createElement('button');
        login1.className = 'login1';
        login1.innerText = 'login';
        var paragraph = document.querySelector('p');
        // main.appendChild(login1);
        paragraph.parentNode.insertBefore(login1, paragraph.nextSibling);
        login1add=true;
        login1.addEventListener('click', ()=>{
            window.open('login_btn.html', '_blank');
        });
    }
  }
}

const signin_btn = document.querySelector('.btn');
const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
signin_btn.addEventListener('click', (event) => {
    const passwordInput = document.querySelector('.password');
    const invalidPassMessage = document.querySelector('.invalid_pass');

    if (passwordInput.value.length === 0 || passwordRegex.test(passwordInput.value)) {
        invalidPassMessage.style.display = 'none';
    } else {
        invalidPassMessage.style.display = 'block';
        event.preventDefault();
    }
    const rememberCheckbox = document.querySelector('.remember-checkbox');
    if(invalidPassMessage.style.display === 'none' && rememberCheckbox.checked)
    {
        window.open('home_page.html', '_parent');
    }
});











