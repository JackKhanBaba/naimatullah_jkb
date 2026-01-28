$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Shopify Developer","Front-End Developer","Business Manager", "Shopify Expert", "Shopify Trainer", "Freelancer","Problem Solver"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-3", {
        strings: ["Connect with me on :)"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Shopify Developer","Front-End Developer","Business Manager", "Shopify Expert", "Shopify Trainer", "Freelancer","Problem Solver"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


// EmailJS initialization - Simple version
function initEmailJS() {
    if (window.emailjs) {
        emailjs.init("m7jwtGy_runU1FDG1");
        return Promise.resolve();
    }
    
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.onload = () => {
            emailjs.init("m7jwtGy_runU1FDG1");
            resolve();
        };
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Form handling
const form = document.getElementById("contact-form");
const btn = document.getElementById("send-btn");

if (form && btn) {
    form.addEventListener("submit", async function(e) {
        e.preventDefault();
        
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;
        
        try {
            await initEmailJS();
            
            const params = {
                user_name: form.user_name.value,
                user_email: form.user_email.value,
                user_phone: form.user_phone.value || "Not provided",
                subject: form.subject.value,
                message: form.message.value,
                timestamp: new Date().toLocaleString()
            };
            
            await emailjs.send("service_3r528gj", "template_nix17h6", params);
            
            btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
            btn.style.background = "#4CAF50";
            form.reset();
            
            setTimeout(() => {
                btn.disabled = false;
                btn.innerHTML = originalText;
                btn.style.background = "";
            }, 3000);
            
        } catch (error) {
            console.error("Error:", error);
            btn.innerHTML = '<i class="fas fa-times"></i> Failed';
            btn.style.background = "#f44336";
            
            setTimeout(() => {
                btn.disabled = false;
                btn.innerHTML = originalText;
                btn.style.background = "";
            }, 3000);
        }
    });
}

// pre loader js
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
});

// scroll bar js
var preogressbar = document.getElementById("preogressbar")
var percent = document.getElementById("percent")

var totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    var progress = (window.pageYOffset / totalHeight) * 100;
    if(preogressbar) {
        preogressbar.style.height = progress + "%";
    }
    if(percent) {
        percent.innerHTML = "Page Scrolled " + Math.round(progress) + "%"
    }
}
