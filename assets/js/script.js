
document.addEventListener("DOMContentLoaded", () => {
    const isRegistered = sessionStorage.getItem("isRegistered");

    if (isRegistered === "true") {
        const sign_login = document.querySelector(".sign-login");
        const usersabtnam = document.getElementById("usersabtnam");
        if (sign_login) {
            sign_login.classList.add("d-none");
            usersabtnam.classList.add("d-block")
        }
        // // حذف وضعیت از SessionStorage
        // sessionStorage.removeItem("isRegistered");
    }
    let header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            header.classList.add("sticky-postion");
            header.classList.add("fade-in-menu");
        } else {
            header.classList.remove("sticky-postion");
            header.classList.remove("fade-in-menu");
        }
        if (window.innerWidth < 768) {
            header.classList.remove("sticky-postion");
            header.classList.remove("fade-in-menu");
        }
    });

    var border_basket_pluse = ()=>{
        let avoid = +red_border.innerText;
        avoid = avoid + 1;
        red_border.innerText = avoid;
    
        let prices = (price.innerText.replaceAll(".", ""));
        
        // محاسبه و به‌روز رسانی قیمت کل
        let calculate = Number(span_all_price.innerText.replaceAll(",", "")) + Number(prices);
        span_all_price.innerText = calculate.toLocaleString(); // فرمت‌سازی با کاما
        
    }
    var border_basket_negt = ()=>{
    let avoid = +red_border.innerText;
    avoid = avoid - 1;
    red_border.innerText = avoid;

    let prices = (price.innerText.replaceAll(".", ""));
    
    // محاسبه و به‌روز رسانی قیمت کل
    let calculate = Number(span_all_price.innerText.replaceAll(",", "")) - Number(prices);
    span_all_price.innerText = calculate.toLocaleString(); // فرمت‌سازی با کاما
    }
    //-----------phoneshopmain---------------

    let buy = document.querySelectorAll(".buy");
    let basket_list = document.querySelector(".basket-list");
    let alarm_no_produc = document.querySelector(".alarm-no-product");
    let price = document.querySelector(".price");
    let span_all_price = document.getElementById("span-all-price");
    let red_border = document.querySelector(".red-border");
    let sort = document.querySelector(".sort");


    // window.addEventListener("scroll",(jug)=>{
    //     if(window.scrollY>190){
    //         sort.classList.add("style-fixed");
    //         sort.classList.remove("style-fixedd");
    //     }else{
    //         sort.classList.remove("style-fixed");
    //         sort.classList.remove("style-fixedd");
    //     }
    //     if(window.scrollY>500){
    //         sort.classList.add("style-fixedd");
    //         sort.classList.remove("style-fixed");
    //     }
    // })

    
    buy.forEach(items => {
        items.addEventListener("click", (pa) => {
            pa.preventDefault();

            
            
            alarm_no_produc.remove();
            basket_list.classList.add("overflowY");
            let product = items.parentElement.parentElement.parentElement;
            let clone = product.cloneNode("true");
            // console.log(clone.id);
            clone.classList.add("sended");
            clone.classList.add("card");
            
            //-------spanparent------
            var span = document.createElement("input");
            span.innerText = "1";
            span.classList.add("quntity");
            span.value = 1;
            clone.append(span);
            //newspan-child
            let new_span = document.createElement("span");
            new_span.classList.add("new-span-child");
            new_span.innerHTML = "<i class='fas fa-plus'></i>";
            clone.append(new_span);
            //------newspan-child2-----
            let new_span_two = document.createElement("span")
            new_span_two.classList.add("new-span-two-child")
            new_span_two.innerHTML="<i class='fas fa-minus'></i>";
            clone.append(new_span_two);

            
            //process-----


            border_basket_pluse();
            

            //---------------------

            //تکراری بودن عنصر 

            var mojod = basket_list.querySelector(`#${clone.id}`)
            // console.log(mojod);
            
            if(mojod != null){
                var quntity = mojod.querySelector(".quntity")
                var quentity = parseInt(quntity.value);
                quentity = quentity+1;
                quntity.value = quentity;
                //----------calculate-------


            }else{
                // console.log("افزوده شد");
                basket_list.append(clone);   
            }
            
            var new_span_child = clone.querySelector(".new-span-child");
            new_span_child.addEventListener("click",aa=>{
                aa.stopPropagation();
                var quntity = clone.querySelector(".quntity");
                var quentity = parseInt(quntity.value);
                quentity = quentity+1;
                quntity.value = quentity;
                border_basket_pluse();
            });

            var new_span_negetive = clone.querySelector(".new-span-two-child");
            new_span_negetive.addEventListener("click",aw=>{
                var quntity = clone.querySelector(".quntity");
                var quentity = parseInt(quntity.value);
                aw.stopPropagation();
                if(parseInt(quntity.value)>=2){
                    quentity = quentity-1;
                    quntity.value = quentity;
                    border_basket_negt();
                }
            })
            
            // console.log(price.innerText);
            // console.log(span_all_price.innerText);
            // console.log(calculate);
            // span_all_price.innerText = calculate;

        });
    });

    //backtotop
    let scrollbacktop = function () {
        let back_scroll = document.querySelector(".back-scroll");
        window.addEventListener("scroll", srl => {
            srl.preventDefault();
            if (window.scrollY > 300) {
                back_scroll.classList.add("d-block");
                back_scroll.classList.remove("d-none");
                back_scroll.classList.add("animation-zm-scroll");
            } else {
                back_scroll.classList.remove("d-block");
                back_scroll.classList.add("d-none");
                back_scroll.classList.remove("animation-zm-scroll");
            }
        });
        back_scroll.addEventListener("click", ck => {
            ck.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        })
    }
    scrollbacktop();

    let back = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    //option-mobile
    let home_mobile = document.getElementById("home-mobile");
    home_mobile.addEventListener("click", e => {
        e.preventDefault();
        back();
    });

    //----------------------problem-----------------------
    let parent_mobile_sort = document.querySelector(".parent-mobile-sort");
    let child_mobile_sort = document.querySelector(".child-mobile-sort");
    let close_mobile = document.getElementById("close-mobile");
    let body = document.getElementById("body");
    parent_mobile_sort.addEventListener("click", (s) => {
        s.preventDefault();
        child_mobile_sort.classList.add("d-block");
        child_mobile_sort.classList.remove("d-none");
        child_mobile_sort.classList.add("classactivate");
        close_mobile.addEventListener("click", (adada) => {
            adada.preventDefault();
            child_mobile_sort.classList.remove("d-block");
            child_mobile_sort.classList.add("d-none");
            child_mobile_sort.classList.remove("classactivate");
        });

    });
    //----------------------------------------------------------
    let brands_tommy = document.querySelectorAll(".brands-tommy");
    brands_tommy.forEach(liten => {
        let child_tommy = liten.querySelector(".child-tommy");
        let hrr = liten.querySelector(".hrr");
        let spy_rotate = liten.querySelector(".spy-rotate");
        liten.addEventListener("click", es => {
            es.preventDefault();
            es.stopPropagation();
            child_tommy.classList.add("d-block");
            child_tommy.classList.remove("d-none");
            child_tommy.classList.add("zoomIn-in-menu");
        });
        hrr.addEventListener("click", es => {
            es.preventDefault();
            es.stopPropagation();
            spy_rotate.classList.toggle("activate");
            child_tommy.classList.toggle("d-none");
            child_tommy.classList.toggle("d-block");
            child_tommy.classList.toggle("zoomIn-in-menu");
        });
    });


    // brands_tommy.forEach(liten => {
    //     liten.addEventListener("click", a => {
    //         a.preventDefault();

    //         // پیدا کردن زیرمنوی مربوط به آیتم کلیک شده
    //         let child_tommy = liten.querySelector(".child-tommy");

    //         // تغییر کلاس‌ها برای باز کردن زیرمنوی مربوطه
    //         if (child_tommy.classList.contains("d-none")) {
    //             child_tommy.classList.remove("d-none");
    //             child_tommy.classList.add("d-block");
    //         } else {
    //             child_tommy.classList.remove("d-block");
    //             child_tommy.classList.add("d-none");
    //         }
    //     });
    // });


});

