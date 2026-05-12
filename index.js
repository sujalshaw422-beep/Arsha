// Menu Button

const menuBtn = document.getElementById("toggleBtn");
const menu = document.querySelector(".menu");



menuBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    const isActive = menu.classList.contains("active")
    menu.classList.toggle("active");

    if(!isActive){
        menuBtn.innerHTML = `<i class="bi bi-x-lg"></i>`;
    }else{
        menuBtn.innerHTML = `<i class="bi bi-list"></i>`;
    }
});

document.addEventListener("click", (event) => {
    // Check if the click is outside the menu and the menu button
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
        menu.classList.remove("active");
        menuBtn.innerHTML = `<i class="bi bi-list"></i>`;
    }
});




// Faq Section

const faqHeads = document.querySelectorAll(".faq-head");


faqHeads.forEach((faqHead) => {
    faqHead.addEventListener("click", () => {
        faqbody = faqHead.nextElementSibling;
        const icon = faqHead.querySelector("i")
        const isActive = faqbody.classList.contains("active");


        faqbody.classList.toggle("active", !isActive);
        icon.classList.toggle("active", !isActive);
    })
});






// FAQ2 Section

const faq2Heads = document.querySelectorAll(".faq2-head");

faq2Heads.forEach((faq2Head) => {
    faq2Head.addEventListener("click", () => {
        const faq2Body = faq2Head.nextElementSibling;
        const icon = faq2Head.querySelector("span i");

        // Close all other FAQ items
        document.querySelectorAll(".faq2-body").forEach((body) => {
            if (body !== faq2Body) {
                body.classList.remove("active");
                body.previousElementSibling.classList.remove("active");
                body.previousElementSibling.querySelector("span i").classList.remove("active");
            }
        });

        // Toggle current FAQ
        faq2Head.classList.toggle("active");
        icon.classList.toggle("active");
        faq2Body.classList.toggle("active");
    });
});


// <!-- Back to Top Section -->

const backTop = document.querySelector(".backTop");

window.addEventListener("scroll", () => {
    backTop.classList.toggle("active", (window.scrollY > 300))
});

backTop.addEventListener("click", ()=> {
    window.scrollTo({top: 0, behavior: "smooth"})
})














// Animation Section

function animation(element) {

    const ob = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("animation", entry.isIntersecting);
    
            if(entry.isIntersecting){
                ob.unobserve(entry.target);
            }
        });
    });

    ob.observe(element)
}


// Hero animation

animation (document.querySelector(".hero-left"));
animation (document.querySelector(".hero-right"));

// Client Animation

animation (document.querySelector(".client-content"));

// Heading Animation

const headings = document.querySelectorAll(".heading");
headings.forEach((heading) => {
    animation(heading)
});

// About Animation 

animation (document.querySelector(".about-content"));

// FAQ Animation

animation (document.querySelector(".faq-content"));
animation (document.querySelector(".faq-right"));

// Skills Animation

animation (document.querySelector(".skills-content"));

// Service Animation

animation (document.querySelector(".service-content"));

// Work Process Animation

animation (document.querySelector(".workProcess-content"));

// CTA Animation

animation (document.querySelector(".cta-content"));

// TEAM Animation

animation (document.querySelector(".team-content"));

// Pricing Animation

animation (document.querySelector(".price-content"));

// TESTI Animation

animation (document.querySelector(".testi"));

// FAQ2 Animation

animation (document.querySelector(".faq2-content"));

// Newslatter Animation 

animation (document.querySelector(".newslatter-left"));
animation (document.querySelector(".newslatter-right"));

// Contact Animation

animation (document.querySelector(".contact-content"));



