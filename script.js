// ==============================
// MOBILE MENU
// ==============================

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


// Close menu after clicking a link

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

        });

    });



// ==============================
// ACTIVE NAVIGATION
// ==============================

const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(
        ".nav-links a:not(.hire-btn)"
    );


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            window.scrollY >= sectionTop
        ) {
            currentSection =
                section.getAttribute("id");
        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});



// ==============================
// PROJECT LIGHTBOX
// ==============================

const projectCards =
    document.querySelectorAll(".project-card");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const closeLightbox =
    document.getElementById("closeLightbox");

const previousButton =
    document.getElementById("prevProject");

const nextButton =
    document.getElementById("nextProject");


let currentProject = 0;


// Open project

projectCards.forEach((project, index) => {

    project.addEventListener("click", () => {

        currentProject = index;

        showProject();

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


// Display selected project

function showProject() {
    const project = projectCards[currentProject];
    const image = project.querySelector("img");

    if (!image) {
        console.error("Project image not found.");
        return;
    }

    // Use the exact image URL that is already working on the page
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt || "Project preview";
}



// Close

closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

});


// Previous

previousButton.addEventListener("click", () => {

    currentProject--;

    if (currentProject < 0) {

        currentProject =
            projectCards.length - 1;

    }

    showProject();

});


// Next

nextButton.addEventListener("click", () => {

    currentProject++;

    if (
        currentProject >=
        projectCards.length
    ) {

        currentProject = 0;

    }

    showProject();

});


// Close by clicking outside image

lightbox.addEventListener("click", event => {

    if (
        event.target === lightbox
    ) {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

});


// Keyboard controls

document.addEventListener(
    "keydown",
    event => {

        if (
            !lightbox.classList.contains("active")
        ) {
            return;
        }

        if (event.key === "Escape") {

            lightbox.classList.remove(
                "active"
            );

            document.body.style.overflow = "";

        }

        if (event.key === "ArrowLeft") {

            previousButton.click();

        }

        if (event.key === "ArrowRight") {

            nextButton.click();

        }

    }
);



// ==============================
// CONTACT FORM
// ==============================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        formMessage.textContent =
            "Thank you! Your message has been received.";

        contactForm.reset();

    }
);



// ==============================
// FOOTER YEAR
// ==============================

document.getElementById("year")
    .textContent =
    new Date().getFullYear();

    