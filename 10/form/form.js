window.onload = function(){
    let formEl = document.querySelector('form');
    console.log(formEl);
    let [...inputs] = formEl.elements;
    console.log(inputs);
    let [name, sName, password] = inputs;
    console.log(name, sName, password);
    name.value = 'My name';
    sName.value = 'My S name';
    password.value = '12345';
    formEl.onsubmit = ()=>{
        alert('submit');
    }
}