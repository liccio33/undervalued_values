const slider = document.getElementById("slider");

const glass = document.getElementById("glass");
const flower = document.getElementById("flower");
const plate = document.getElementById("plate");
const bubble = document.getElementById("bubble");
const polaroid = document.getElementById("polaroid");


// =================================
// Infinite slider loop
// =================================

const originalPages =
    Array.from(slider.children);

const originalPageCount =
    originalPages.length;

const firstOriginalPage =
    originalPages[0];

const lastOriginalPage =
    originalPages[
        originalPages.length - 1
    ];

const firstPageClone =
    firstOriginalPage.cloneNode(true);

const lastPageClone =
    lastOriginalPage.cloneNode(true);


slider.insertBefore(
    lastPageClone,
    slider.firstChild
);

slider.appendChild(
    firstPageClone
);


// =================================
// Sync cloned page state
// =================================

function syncPageState(
    originalPage,
    clonedPage
) {

    const originalImages =
        originalPage.querySelectorAll(
            "img"
        );

    const clonedImages =
        clonedPage.querySelectorAll(
            "img"
        );


    originalImages.forEach(
        function (image, index) {

            if (
                clonedImages[index]
            ) {

                clonedImages[index].src =
                    image.src;

                clonedImages[index].style.cssText =
                    image.style.cssText;

                clonedImages[index].className =
                    image.className;

            }

        }
    );

}


// =================================
// Sync first and last clones
// =================================

function syncLoopClones() {

    syncPageState(
        firstOriginalPage,
        firstPageClone
    );

    syncPageState(
        lastOriginalPage,
        lastPageClone
    );

}


syncLoopClones();


// =================================
// Watch original object changes
// =================================

const loopObserver =
    new MutationObserver(
        function () {

            syncLoopClones();

        }
    );


originalPages.forEach(
    function (page) {

        loopObserver.observe(
            page,
            {
                attributes: true,
                subtree: true,
                attributeFilter: [
                    "src",
                    "style",
                    "class"
                ]
            }
        );

    }
);


// =================================
// Click cloned objects
// =================================

firstPageClone.addEventListener(
    "click",
    function () {

        const image =
            firstOriginalPage.querySelector(
                "img"
            );

        if (image) {

            image.click();

        }

    }
);


lastPageClone.addEventListener(
    "click",
    function () {

        const image =
            lastOriginalPage.querySelector(
                "img"
            );

        if (image) {

            image.click();

        }

    }
);


// =================================
// Glass images
// =================================

const glassImages = [
    "assets/images/glass1.png",
    "assets/images/glass2.png",
    "assets/images/glass3.png",
    "assets/images/glass4.png",
    "assets/images/glass5.png"
];


// =================================
// Flower images
// =================================

const flowerImages = [
    "assets/images/flower1.png",
    "assets/images/flower2.png",
    "assets/images/flower3.png",
    "assets/images/flower4.png",
    "assets/images/flower5.png",
    "assets/images/flower6.png"
];


// =================================
// Plate images
// =================================

const plateImages = [
    "assets/images/plate1.png",
    "assets/images/plate2.png",
    "assets/images/plate3.png"
];


// =================================
// Bubble image
// =================================

const bubbleImage =
    "assets/images/bubble1.png";


    // =================================
// Polaroid images
// =================================

const polaroidImages = [
    "assets/images/polaroid1.png",
    "assets/images/polaroid2.png",
    "assets/images/polaroid3.png",
    "assets/images/polaroid4.png",
    "assets/images/polaroid5.png"
];


// =================================
// Current stages
// =================================

let glassStage = 0;
let flowerStage = 0;
let plateStage = 0;
let bubbleVisible = true;
let polaroidStage = 0;


// =================================
// Load glass state
// =================================

const savedGlassStage =
    localStorage.getItem("glassStage");

if (savedGlassStage !== null) {

    glassStage =
        parseInt(savedGlassStage);

    if (
        glassStage >= 0 &&
        glassStage < glassImages.length
    ) {
        glass.src =
            glassImages[glassStage];
    }

}


// =================================
// Load flower state
// =================================

const savedFlowerStage =
    localStorage.getItem("flowerStage");

if (savedFlowerStage !== null) {

    flowerStage =
        parseInt(savedFlowerStage);

    if (
        flowerStage >= 0 &&
        flowerStage < flowerImages.length
    ) {
        flower.src =
            flowerImages[flowerStage];
    }

}


// =================================
// Load plate state
// =================================

const savedPlateStage =
    localStorage.getItem("plateStage");

if (savedPlateStage !== null) {

    plateStage =
        parseInt(savedPlateStage);

    if (
        plateStage >= 0 &&
        plateStage < plateImages.length
    ) {
        plate.src =
            plateImages[plateStage];
    }

}


// =================================
// Load bubble state
// =================================

const savedBubbleState =
    localStorage.getItem("bubbleVisible");

if (savedBubbleState === "false") {

    bubbleVisible = false;

    bubble.style.visibility =
        "hidden";

}


// =================================
// Load polaroid state
// =================================

const savedPolaroidStage =
    localStorage.getItem("polaroidStage");

if (savedPolaroidStage !== null) {

    polaroidStage =
        parseInt(savedPolaroidStage);

    if (
        polaroidStage >= 0 &&
        polaroidStage < polaroidImages.length
    ) {
        polaroid.src =
            polaroidImages[polaroidStage];
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
// Save flower state
// =================================

function saveFlowerState() {

    localStorage.setItem(
        "flowerStage",
        flowerStage
    );

}



// =================================
// Save plate state
// =================================

function savePlateState() {

    localStorage.setItem(
        "plateStage",
        plateStage
    );

}


// =================================
// Save bubble state
// =================================

function saveBubbleState() {

    localStorage.setItem(
        "bubbleVisible",
        bubbleVisible
    );

}

// =================================
// Save polaroid state
// =================================

function savePolaroidState() {

    localStorage.setItem(
        "polaroidStage",
        polaroidStage
    );

}


// =================================
// Glass sound
// =================================

const glassSound = new Audio(
    "assets/audio/GLASS_981__rhumphries__rbh-glass_break-05.wav"
);

glassSound.volume = 0.7;


// =================================
// Flower sound
// =================================

const flowerSound = new Audio(
    "assets/audio/FLOWER_420929__cigaro30__carrot-snap-1.wav"
);

flowerSound.volume = 0.7;


// =================================
// Plate sound
// =================================

const plateSound = new Audio(
    "assets/audio/PLATE_418194__deleted_user_3656686__hard-glass-impact.wav"
);

plateSound.volume = 0.7;


// =================================
// Bubble sound
// =================================

const bubbleSound = new Audio(
    "assets/audio/BUBBLE_506546__lilmati__pop-01.wav"
);

bubbleSound.volume = 0.7;


// =================================
// Polaroid sound
// =================================

const polaroidSound = new Audio(
    "assets/audio/POLAROID_461075__15gkovacovajulie__110_burning-paper.wav"
);

polaroidSound.volume = 0.7;


// =================================
// Click glass to break
// =================================

glass.addEventListener(
    "click",
    function () {

        if (
            glassStage <
            glassImages.length - 1
        ) {

            glassStage++;

            glass.src =
                glassImages[glassStage];

            saveGlassState();

            glassSound.currentTime = 0;
            glassSound.play();

        }

    }
);


// =================================
// Click flower to remove petals
// =================================

flower.addEventListener(
    "click",
    function () {

        if (
            flowerStage <
            flowerImages.length - 1
        ) {

            flowerStage++;

            flower.src =
                flowerImages[flowerStage];

            saveFlowerState();

            flowerSound.currentTime = 0;
            flowerSound.play();

        }

    }
);


// =================================
// Click plate to crack
// =================================

plate.addEventListener(
    "click",
    function () {

        if (
            plateStage <
            plateImages.length - 1
        ) {

            plateStage++;

            plate.src =
                plateImages[plateStage];

            savePlateState();

            plateSound.currentTime = 0;
            plateSound.play();

        }

    }
);


// =================================
// Click bubble to pop
// =================================

bubble.addEventListener(
    "click",
    function () {

        if (!bubbleVisible) return;

        bubbleVisible = false;

        bubble.style.visibility =
            "hidden";

        localStorage.setItem(
            "bubbleVisible",
            "false"
        );

        bubbleSound.currentTime = 0;
        bubbleSound.play();

    }
);


// =================================
// Click polaroid to burn
// =================================

polaroid.addEventListener(
    "click",
    function () {

        if (
            polaroidStage <
            polaroidImages.length - 1
        ) {

            polaroidStage++;

            polaroid.src =
                polaroidImages[polaroidStage];

            savePolaroidState();

            polaroidSound.currentTime = 0;
            polaroidSound.play();

        }

    }
);


// =================================
// Mouse dragging slider
// =================================

let isDragging = false;

let startX = 0;

let startScrollLeft = 0;


slider.addEventListener(
    "mousedown",
    function (event) {

        isDragging = true;

        slider.classList.add("dragging");

        startX =
            event.pageX;

        startScrollLeft =
            slider.scrollLeft;

    }
);


slider.addEventListener(
    "mousemove",
    function (event) {

        if (!isDragging) return;

        const distance =
            event.pageX - startX;

        slider.scrollLeft =
            startScrollLeft - distance;

    }
);


slider.addEventListener(
    "mouseup",
    function () {

        if (!isDragging) return;

        isDragging = false;

        slider.classList.remove("dragging");

        snapToObject();

    }
);


slider.addEventListener(
    "mouseleave",
    function () {

        if (!isDragging) return;

        isDragging = false;

        slider.classList.remove("dragging");

        snapToObject();

    }
);


// =================================
// Snap to object
// =================================

function snapToObject() {

    const pageWidth =
        window.innerWidth;

    const index =
        Math.round(
            slider.scrollLeft /
            pageWidth
        );

    slider.scrollTo({

        left:
            index * pageWidth,

        behavior: "smooth"

    });

    let realIndex =
        index - 1;

    if (realIndex < 0) {

        realIndex =
            originalPageCount - 1;

    }

    if (
        realIndex >=
        originalPageCount
    ) {

        realIndex = 0;

    }

    localStorage.setItem(
        "currentObject",
        realIndex
    );

}


// =================================
// Remember actual scroll position
// =================================

let scrollTimer;


slider.addEventListener(
    "scroll",
    function () {

        clearTimeout(scrollTimer);


        scrollTimer =
            setTimeout(
                function () {

                    const pageWidth =
                        window.innerWidth;

                    const currentIndex =
                        Math.round(
                            slider.scrollLeft /
                            pageWidth
                        );


                    // Jump after scrolling stops

                    if (
                        currentIndex ===
                        originalPageCount + 1
                    ) {

                        slider.style.scrollBehavior =
                            "auto";

                        slider.scrollLeft =
                            pageWidth;

                        slider.style.scrollBehavior =
                            "";

                    }


                    if (
                        currentIndex === 0
                    ) {

                        slider.style.scrollBehavior =
                            "auto";

                        slider.scrollLeft =
                            originalPageCount *
                            pageWidth;

                        slider.style.scrollBehavior =
                            "";

                    }


                    let realIndex =
                        currentIndex - 1;

                    if (realIndex < 0) {

                        realIndex =
                            originalPageCount - 1;

                    }

                    if (
                        realIndex >=
                        originalPageCount
                    ) {

                        realIndex = 0;

                    }

                    localStorage.setItem(
                        "currentObject",
                        realIndex
                    );

                },
                150
            );

    }
);


// =================================
// Return to last object
// =================================

window.addEventListener(
    "load",
    function () {

        const savedObject =
            localStorage.getItem(
                "currentObject"
            );

        let index = 0;

        if (savedObject !== null) {

            index =
                parseInt(savedObject);

        }

        slider.style.scrollBehavior =
            "auto";

        slider.scrollLeft =
            (index + 1) *
            window.innerWidth;

        slider.style.scrollBehavior =
            "";

    }
);