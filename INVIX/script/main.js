
const reqestURL = "http://26.190.19.174:8000/auth/sign-in/";
var token;
function sendRequestPostLog() {

    var body = 'username=' + document.querySelector("#enter_mail").value +
        '&password=' + document.querySelector("#enter_password").value;
        console.log(body)
    return new Promise((resolse, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('POST', reqestURL);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                token = xhr.response;
                console.log(xhr.response)
                window.location.href = 'main.html';
            }
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }
        xhr.send(body);
    })
}
function sendRequestPostReg() {
    
    // var body = '{email:' + document.querySelector("#mail").value + ',username:' + document.querySelector("#enter_login_reg").value +
    //     ',password:' + document.querySelector("#password_reg").value + '}';
    let body = {
        email : document.querySelector("#mail").value,
        username: document.querySelector("#enter_login_reg").value,
        password: document.querySelector("#password_reg").value
    }
    console.log(body)
    console.log(JSON.stringify(body))
    return new Promise((resolse, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('POST', "http://26.190.19.174:8000/auth/sign-up/");
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                token = xhr.response;
                console.log(xhr.response)
                window.location.href = 'main.html';
            }
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }
        xhr.send(JSON.stringify(body));
    })
}
function sendRequestGet() {

    var body = 'email=' + document.querySelector('#email') + '&username=' + document.querySelector("#enter_mail_reg").value +
        '&password=' + document.querySelector("#password_reg").value;

    return new Promise((resolse, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', "http://26.190.19.174:8000/auth/user/");
        xhr.responseType = 'json';
        xhr.setRequestHeader('Authorization', 'Bearer ' + token.access_token);
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                console.log(xhr.response)
            }
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }
        xhr.send();
    })
}
function sendRequestReg() {

    var body = 'email=' + document.querySelector('#email') + '&username=' + document.querySelector("#enter_mail_reg").value +
        '&password=' + document.querySelector("#password_reg").value;

    return new Promise((resolse, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', "http://26.190.19.174:8000/auth/sing-up/");
        xhr.responseType = 'json';
        xhr.setRequestHeader('Authorization', 'Bearer ' + token.access_token);
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                console.log(xhr.response)
            }
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }
        xhr.send();
    })
}         