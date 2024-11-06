const back_history = ()=>{
    window.history.back();
}
back_to = document.querySelector(".back-to");
back_to.addEventListener("click",aw=>{
    aw.preventDefault();
    back_history();
})

//=======> مشکلات  در import بالا
const visibleActionElement = document.getElementById("turevisible");
const passwordInput = document.querySelector("#password");
let isPasswordVisible = false;
visibleActionElement.addEventListener('click', (a) => {
    a.preventDefault();
    isPasswordVisible = !isPasswordVisible;
    if (isPasswordVisible) {
        // visibleActionElement.src = `${location.origin}/asset/icons/visible.png` خطا;
        visibleActionElement.src = "assets/images/visible.png";
        passwordInput.setAttribute("type", "text");
    } else {
        // visibleActionElement.src = `${location.origin}/asset/icons/invisible.png` خطا;
        visibleActionElement.src = "assets/images/invisible.png";
        passwordInput.setAttribute("type", "password");
    }
});
formsub.addEventListener('submit', (e) => {
    e.preventDefault();
    if (Username.value == "" || password.value == "") {
        Swal.fire({
            title: "خطا",
            text: "فیلد نام کاربری یا رمز عبور خالی است",
            icon: "error"
        });
    };
});