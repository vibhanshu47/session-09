/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close mobile navigation */

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const themeToggle = document.getElementById("themeToggle");


/* Load saved theme */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

}


/* Toggle theme */

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");


    /* Save preference */

    localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
    );

});


/* =====================================================
   EDIT PROFILE MODAL
===================================================== */

const editBtn = document.getElementById("editBtn");

const editModal = document.getElementById("editModal");

const closeModal = document.getElementById("closeModal");

const profileForm = document.getElementById("profileForm");

const nameInput = document.getElementById("nameInput");

const roleInput = document.getElementById("roleInput");

const bioInput = document.getElementById("bioInput");


/* Open modal */

editBtn.addEventListener("click", () => {

    editModal.classList.add("active");

});


/* Close modal */

closeModal.addEventListener("click", () => {

    editModal.classList.remove("active");

});


/* Close when clicking outside */

editModal.addEventListener("click", (event) => {

    if (event.target === editModal) {

        editModal.classList.remove("active");

    }

});


/* =====================================================
   SAVE PROFILE
===================================================== */

profileForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const newName = nameInput.value.trim();

    const newRole = roleInput.value.trim();

    const newBio = bioInput.value.trim();


    if (newName) {

        document.querySelector(
            ".name-row h1"
        ).textContent = newName;

    }


    if (newRole) {

        const roleElement =
            document.querySelector(".role");

        roleElement.innerHTML =
            newRole.replace(
                " / ",
                " <span>/</span> "
            );

    }


    if (newBio) {

        document.querySelector(
            ".bio"
        ).textContent = newBio;

    }


    editModal.classList.remove("active");

});


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        editModal.classList.remove("active");

        navMenu.classList.remove("active");

    }

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const animatedElements = document.querySelectorAll(
    ".about-card, .project-card, .skill"
);


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});