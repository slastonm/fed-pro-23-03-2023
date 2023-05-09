window.onload = function() {
    console.log(document.cookie);
    document.cookie = "userName=Tomato";
    let specialName = 'Last Name!&';
    let specialValue = "Value % & # Name";
    document.cookie = `${encodeURIComponent(specialName)}=${specialValue}`;
    console.log(document.cookie);
    document.cookie = "userAdmin=Orange; path=/users; expires=Tue, 31 Dec 2038 03:14:07 GMT";
};