let info_btn = document.getElementsByClassName("info-btn");
for(let i = 0; i < info_btn.length; i++) {
    info_btn[i].onclick =function() {
        document.querySelector(".container").classList.toggle("log-in");
    }
}

function login(){
    let usernameInput = document.getElementById("usernameLogin");
    let passwordInput = document.getElementById("usernamePassword");

    console.log(usernameInput);
    console.log(passwordInput);

    let username = usernameInput.value;
    let password = passwordInput.value;

    if(username === ""||password === ""){
        alert("用户名或密码不能为空");
    }
    else if(username === "aaa"&&password === "111"){
        alert("登陆成功");
        window.open("book.html");
    }
    else{
        alert("用户名或密码错误");
    }

}