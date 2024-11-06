document.addEventListener("DOMContentLoaded", () => {
    let userName_profile_set_change = document.getElementById("userName-profile-set-change");
    let signout = document.querySelector(".signout");
    // خواندن نام کاربری از sessionStorage
    const storedUsername = sessionStorage.getItem("username");
    userName_profile_set_change.innerText = storedUsername;
    signout.addEventListener("click",aw=>{
        aw.preventDefault();
                // حذف وضعیت از SessionStorage
        sessionStorage.removeItem("isRegistered");
        sessionStorage.removeItem("username");
       window.location.href = "index.html";
    })
});
