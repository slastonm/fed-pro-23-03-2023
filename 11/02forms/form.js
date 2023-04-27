window.onload = ()=>{
    let formEl = document.querySelector('form');
    formEl.onsubmit = function(e){
        let isValid = true;
        let loginName = document.querySelector("[name='login-name']");
        let loginPassord = document.querySelector("[name='login-passord']");
        console.log(loginName, loginPassord);
        if(loginName.value.length === 0){
            isValid = false;
        }
        if(loginPassord.value.length === 0){
            isValid = false;
        }

        if(!isValid){
            e.preventDefault();
            alert('Всі поля треба заповнити');
        }
    }
}