back_to = document.querySelector(".back-to");
back_to.addEventListener("click",aw=>{
    aw.preventDefault();
    back_history();
})
let password = document.getElementById("password");
let password_again = document.getElementById("passwordRepeat"); 
let userName = document.getElementById("userName");
let sign_login = document.querySelector(".sign-login");

formsub.addEventListener("submit",(e)=>{
    e.preventDefault();    
    const englishRegex = /^[A-Za-z0-9\s]*$/;
    if(userName.value == "" || password.value == "" || password_again.value == ""){
        Swal.fire({
            title: "خطا",
            text: "فیلد نام کاربری یا رمزعبور خالی است",
            icon: "error"
        });
    }else if(!englishRegex.test(userName.value)){
        Swal.fire({
            title: "خطا",
            text: "نام کاربری حتما باید انگلیسی باشد",
            icon: "error"
        });
    }else if (userName.value.length<5){
        Swal.fire({
            title: "خطا",
            text: "نام کاربری کوتاه است",
            icon: "error"
        });
    }else if(password.value != password_again.value){
        Swal.fire({
            title: "خطا",
            text: "رمزعبور مطابقت ندارد",
            icon: "error"
        });
    }else if(password.value.length<6 || password_again.value.length<6){
        Swal.fire({
            title: "خطا",
            text: "رمزعبور حداقل باید 6 کاراکتر باشد ! ",
            icon: "error"
        });
    }else{
        Swal.fire({
            title: "آیا از صحت اطلاعات وارد شده اطمینان دارید؟",
            text: "توجه : نام کاربری غیرقابل تغییر است !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Continue"
          }).then((result) => {
            let nameSign = userName.value ;
            if(result.isConfirmed){
                sessionStorage.setItem("isRegistered", "true");
                sessionStorage.setItem("username", userName.value);
                window.location.href = "index.html";
            }
          });
    }
});
