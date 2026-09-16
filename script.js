const slider = document.getElementById("slider");
const glass = document.getElementById("glass");


// =================================
// Glass breaking images
// =================================

const glassImages = [
    "assets/images/glass1.png",
    "assets/images/glass2.png",
    "assets/images/glass3.png",
    "assets/images/glass4.png"
];


// =================================
// Current glass stage
// =================================

let glassStage = 0;


// =================================
// Load saved glass state
// =================================

const savedGlassStage = localStorage.getItem("glassStage");

if (savedGlassStage !== null) {

    glassStage = parseInt(savedGlassStage);

    if (
        glassStage >= 0 &&
        glassStage < glassImages.length
    ) {
        glass.src = glassImages[glassStage];
    }

}


// =================================
// Save glass state
// =================================

function saveGlassState() {

    localStorage.setItem(
        "glassStage",
        glassStage
    );

}


// =================================
// Glass breaking sound
// =================================

const glassSound = new Audio(
    "assets/sounds/glass-break.mp3"
);

glassSound.volume = 0.7;


// =================================
// Click glass to break
// =================================

glass.addEventListener("click", function () {

    if (glassStage < glassImages.length - 1) {

        glassStage++;

        glass.src = glassImages[glassStage];

        saveGlassState();

        glassSound.currentTime = 0;

        glassSound.play();

    }

});


// =================================
// Mouse dragging
// =================================

let isDragging = false;

let startX = 0;

let startScrollLeft = 0;


slider.addEventListener("mousedown", function (event) {

    isDragging = true;

    slider.classList.add("dragging");

    startX = event.pageX;

    startScrollLeft = slider.scrollLeft;

});


slider.addEventListener("mousemove", function (event) {

    if (!isDragging) return;

    const distance =
        event.pageX - startX;

    slider.scrollLeft =
        startScrollLeft - distance;

});


slider.addEventListener("mouseup", function () {

    if (!isDragging) return;

    isDragging = false;

    slider.classList.remove("dragging");

    snapToObject();

});


slider.addEventListener("mouseleave", function () {

    if (!isDragging) return;

    isDragging = false;

    slider.classList.remove("dragging");

    snapToObject();

});


// =================================
// Snap to object
// =================================

function snapToObject() {

    const pageWidth = window.innerWidth;

    const index = Math.round(
        slider.scrollLeft / pageWidth
    );

    slider.scrollTo({
        left: index * pageWidth,
        behavior: "smooth"
    });

    // Save the object that the user stopped on
    localStorage.setItem(
        "currentObject",
        index
    );
}


// =================================
// Remember actual scroll position
// =================================

let scrollTimer;

slider.addEventListener("scroll", function () {

    clearTimeout(scrollTimer);

    scrollTimer = setTimeout(function () {

        const pageWidth = window.innerWidth;

        const index = Math.round(
            slider.scrollLeft / pageWidth
        );

        localStorage.setItem(
            "currentObject",
            index
        );

    }, 100);

});


// =================================
// Return directly to last object
// =================================

window.addEventListener("load", function () {

    const savedObject =
        localStorage.getItem("currentObject");

    if (savedObject !== null) {

        const index =
            parseInt(savedObject);

        // Disable animation temporarily
        slider.style.scrollBehavior = "auto";

        slider.scrollLeft =
            index * window.innerWidth;

        slider.style.scrollBehavior = "";

    }

});