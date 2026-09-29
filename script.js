const slider = document.getElementById("slider");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const glass = document.getElementById("glass");
const flower = document.getElementById("flower");
const plate = document.getElementById("plate");
const bubble = document.getElementById("bubble");
const polaroid = document.getElementById("polaroid");
const can = document.getElementById("can");
const paper = document.getElementById("paper");
const teddy = document.getElementById("teddy");
const tape = document.getElementById("tape");
const lego = document.getElementById("lego");
const clock = document.getElementById("clock");

const plateNarrative =
    document.getElementById(
        "plateNarrative"
    );

const glassNarrative =
    document.getElementById(
        "glassNarrative"
    );

const flowerNarrative =
    document.getElementById(
        "flowerNarrative"
    );

const bubbleNarrative =
    document.getElementById(
        "bubbleNarrative"
    );

const polaroidNarrative =
    document.getElementById(
        "polaroidNarrative"
    );

const canNarrative =
    document.getElementById(
        "canNarrative"
    );

const paperNarrative =
    document.getElementById(
        "paperNarrative"
    );

const teddyNarrative =
    document.getElementById(
        "teddyNarrative"
    );

const tapeNarrative =
    document.getElementById(
        "tapeNarrative"
    );

const legoNarrative =
    document.getElementById(
        "legoNarrative"
    );

const clockNarrative =
    document.getElementById(
        "clockNarrative"
    );


// =================================
// Narrative slides down after click
// =================================

const dismissedNarratives =
    new Set();

document.querySelectorAll(
    ".narrative-image"
).forEach(
    function (image) {

        const savedDismissed =
            localStorage.getItem(
                image.id + "Dismissed"
            );

        if (
            savedDismissed ===
            "true"
        ) {

            dismissedNarratives.add(
                image.id
            );

            image.classList.add(
                "slide-down"
            );

        }

        image.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                if (
                    dismissedNarratives.has(
                        image.id
                    )
                ) {
                    return;
                }

                dismissedNarratives.add(
                    image.id
                );

                image.classList.remove(
                    "show"
                );

                image.classList.add(
                    "slide-down"
                );

                localStorage.setItem(
                    image.id + "Dismissed",
                    "true"
                );

            }
        );

    }
);


// =================================
// Infinite slider loop
// =================================

const originalPages =
    Array.from(
        slider.querySelectorAll(
            ":scope > .object-page"
        )
    );

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


// =================================
// Remove IDs from cloned pages
// =================================

function removeCloneIds(page) {

    const elements =
        page.querySelectorAll("[id]");

    elements.forEach(
        function (element) {

            element.removeAttribute("id");

        }
    );

}


removeCloneIds(firstPageClone);
removeCloneIds(lastPageClone);


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
// Can images
// =================================

const canImages = [
    "assets/images/can1.png",
    "assets/images/can2.png",
    "assets/images/can3.png"
];


// =================================
// Paper images
// =================================

const paperImages = [
    "assets/images/paper1.png",
    "assets/images/paper2.png",
    "assets/images/paper3.png",
    "assets/images/paper4.png"
];


// =================================
// Teddy images
// =================================

const teddyImages = [
    "assets/images/teddy1.png",
    "assets/images/teddy2.png",
    "assets/images/teddy3.png"
];


// =================================
// Tape images
// =================================

const tapeImages = [
    "assets/images/tape1.png",
    "assets/images/tape2.png",
    "assets/images/tape3.png",
    "assets/images/tape4.png"
];


// =================================
// Lego images
// =================================

const legoImages = [
    "assets/images/lego1.png",
    "assets/images/lego2.png"
];


// =================================
// Clock images
// =================================

const clockImages = [
    "assets/images/clock1.png",
    "assets/images/clock2.png",
    "assets/images/clock3.png"
];


// =================================
// Current stages
// =================================

let glassStage = 0;
let flowerStage = 0;
let plateStage = 0;
let bubbleVisible = true;
let polaroidStage = 0;
let canStage = 0;
let paperStage = 0;
let teddyStage = 0;
let tapeStage = 0;
let legoStage = 0;
let clockStage = 0;


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

updateGlassNarrative();

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

updateFlowerNarrative();

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

updatePlateNarrative();

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

updateBubbleNarrative();

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

updatePolaroidNarrative();

// =================================
// Load can state
// =================================

const savedCanStage =
    localStorage.getItem("canStage");

if (savedCanStage !== null) {

    canStage =
        parseInt(savedCanStage);

    if (
        canStage >= 0 &&
        canStage < canImages.length
    ) {
        can.src =
            canImages[canStage];
    }

}

updateCanNarrative();

// =================================
// Load paper state
// =================================

const savedPaperStage =
    localStorage.getItem("paperStage");

if (savedPaperStage !== null) {

    paperStage =
        parseInt(savedPaperStage);

    if (
        paperStage >= 0 &&
        paperStage < paperImages.length
    ) {
        paper.src =
            paperImages[paperStage];
    }

}

updatePaperNarrative();

// =================================
// Load teddy state
// =================================

const savedTeddyStage =
    localStorage.getItem("teddyStage");

if (savedTeddyStage !== null) {

    teddyStage =
        parseInt(savedTeddyStage);

    if (
        teddyStage >= 0 &&
        teddyStage < teddyImages.length
    ) {
        teddy.src =
            teddyImages[teddyStage];
    }

}

updateTeddyNarrative();

// =================================
// Load tape state
// =================================

const savedTapeStage =
    localStorage.getItem("tapeStage");

if (savedTapeStage !== null) {

    tapeStage =
        parseInt(savedTapeStage);

    if (
        tapeStage >= 0 &&
        tapeStage < tapeImages.length
    ) {
        tape.src =
            tapeImages[tapeStage];
    }

}

updateTapeNarrative();

// =================================
// Load lego state
// =================================

const savedLegoStage =
    localStorage.getItem("legoStage");

if (savedLegoStage !== null) {

    legoStage =
        parseInt(savedLegoStage);

    if (
        legoStage >= 0 &&
        legoStage < legoImages.length
    ) {
        lego.src =
            legoImages[legoStage];
    }

}

updateLegoNarrative();

// =================================
// Load clock state
// =================================

const savedClockStage =
    localStorage.getItem("clockStage");

if (savedClockStage !== null) {

    clockStage =
        parseInt(savedClockStage);

    if (
        clockStage >= 0 &&
        clockStage < clockImages.length
    ) {
        clock.src =
            clockImages[clockStage];
    }

}

updateClockNarrative();

// =================================
// Update teddy narrative
// =================================

function updateTeddyNarrative() {

    if (
        teddyStage ===
        teddyImages.length - 1
    ) {

        setTimeout(() => {

            teddyNarrative.classList.add(
                "show"
            );

        }, 300);

    } else {

        teddyNarrative.classList.remove(
            "show"
        );

    }

}


// =================================
// Update plate narrative
// =================================

function updatePlateNarrative() {

    if (
        plateStage ===
        plateImages.length - 1
    ) {

        setTimeout(() => {

            plateNarrative.classList.add(
                "show"
            );

        }, 300);

    } else {

        plateNarrative.classList.remove(
            "show"
        );

    }

}


// =================================
// Update glass narrative
// =================================

function updateGlassNarrative() {

    if (
        glassStage ===
        glassImages.length - 1
    ) {

        setTimeout(() => {

            glassNarrative.classList.add(
                "show"
            );

        }, 300);

    } else {

        glassNarrative.classList.remove(
            "show"
        );

    }

}


// =================================
// Update flower narrative
// =================================

function updateFlowerNarrative() {

    if (
        flowerStage ===
        flowerImages.length - 1
    ) {

        setTimeout(() => {

            flowerNarrative.classList.add(
                "show"
            );

        }, 300);

    } else {

        flowerNarrative.classList.remove(
            "show"
        );

    }

}


// =================================
// Update bubble narrative
// =================================

function updateBubbleNarrative() {

    if (!bubbleVisible) {

        setTimeout(() => {

            bubbleNarrative.classList.add(
                "show"
            );

        }, 300);

    } else {

        bubbleNarrative.classList.remove(
            "show"
        );

    }

}


// =================================
// Update polaroid narrative
// =================================

function updatePolaroidNarrative() {

    if (
        polaroidStage ===
        polaroidImages.length - 1
    ) {

        setTimeout(() => {

            polaroidNarrative.classList.add(
                "show"
            );

        }, 300);

    } else {

        polaroidNarrative.classList.remove(
            "show"
        );

    }

}


// =================================
// Update can narrative
// =================================

function updateCanNarrative() {

    if (
        canStage ===
        canImages.length - 1
    ) {

        setTimeout(() => {

            canNarrative.classList.add(
                "show"
            );

        }, 300);

    } else {

        canNarrative.classList.remove(
            "show"
        );

    }

}


// =================================
// Update paper narrative
// =================================

function updatePaperNarrative() {

    if (
        paperStage ===
        paperImages.length - 1
    ) {

        setTimeout(() => {

            paperNarrative.classList.add(
                "show"
            );

        }, 300);

    } else {

        paperNarrative.classList.remove(
            "show"
        );

    }

}


// =================================
// Update tape narrative
// =================================

function updateTapeNarrative() {

    if (
        tapeStage ===
        tapeImages.length - 1
    ) {

        setTimeout(() => {

            tapeNarrative.classList.add(
                "show"
            );

        }, 300);

    } else {

        tapeNarrative.classList.remove(
            "show"
        );

    }

}


// =================================
// Update lego narrative
// =================================

function updateLegoNarrative() {

    if (
        legoStage ===
        legoImages.length - 1
    ) {

        setTimeout(() => {

            legoNarrative.classList.add(
                "show"
            );

        }, 300);

    } else {

        legoNarrative.classList.remove(
            "show"
        );

    }

}


// =================================
// Update clock narrative
// =================================

function updateClockNarrative() {

    if (
        clockStage ===
        clockImages.length - 1
    ) {

        setTimeout(() => {

            clockNarrative.classList.add(
                "show"
            );

        }, 300);

    } else {

        clockNarrative.classList.remove(
            "show"
        );

    }

}

updatePlateNarrative();
updateGlassNarrative();
updateFlowerNarrative();
updateBubbleNarrative();
updatePolaroidNarrative();
updateCanNarrative();
updatePaperNarrative();
updateTapeNarrative();
updateLegoNarrative();
updateClockNarrative();

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
// Save can state
// =================================

function saveCanState() {

    localStorage.setItem(
        "canStage",
        canStage
    );

}


// =================================
// Save paper state
// =================================

function savePaperState() {

    localStorage.setItem(
        "paperStage",
        paperStage
    );

}


// =================================
// Save teddy state
// =================================

function saveTeddyState() {

    localStorage.setItem(
        "teddyStage",
        teddyStage
    );

}


// =================================
// Save tape state
// =================================

function saveTapeState() {

    localStorage.setItem(
        "tapeStage",
        tapeStage
    );

}


// =================================
// Save lego state
// =================================

function saveLegoState() {

    localStorage.setItem(
        "legoStage",
        legoStage
    );

}


// =================================
// Save clock state
// =================================

function saveClockState() {

    localStorage.setItem(
        "clockStage",
        clockStage
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
// Can sound
// =================================

const canSound = new Audio(
    "assets/audio/CAN_405648__apinasaundi__found-can-crush-1.wav"
);

canSound.volume = 0.7;


// =================================
// Paper sound
// =================================

const paperSound = new Audio(
    "assets/audio/PAPER_197179__razrox__paper-crumpled-001.wav"
);

paperSound.volume = 0.7;


// =================================
// Teddy sound
// =================================

const teddySound = new Audio(
    "assets/audio/TEDDY_263541__dpoggioli__cloth-rip.wav"
);

teddySound.volume = 0.7;


// =================================
// Tape sound
// =================================

const tapeSound = new Audio(
    "assets/audio/TAPE_863205__alexarje__loading-dvd-soundaction-227.wav"
);

tapeSound.volume = 0.7;


// =================================
// Lego sound
// =================================

const legoSound = new Audio(
    "assets/audio/LEGO_423783__someonecool15__lego-bricks-1.mp3"
);

legoSound.volume = 0.7;


// =================================
// Clock sound
// =================================

const clockSound = new Audio(
    "assets/audio/CLOCK_620077__ryankingart__metal-impact.mp3"
);

clockSound.volume = 0.7;



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

            updateGlassNarrative();
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

            updateFlowerNarrative();
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

            updatePlateNarrative();
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
        updateBubbleNarrative();

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

            updatePolaroidNarrative();
            savePolaroidState();

            polaroidSound.currentTime = 0;
            polaroidSound.play();

        }

    }
);


// =================================
// Click can to crush
// =================================

can.addEventListener(
    "click",
    function () {

        if (
            canStage <
            canImages.length - 1
        ) {

            canStage++;

            can.src =
                canImages[canStage];

            updateCanNarrative();
            saveCanState();

            canSound.currentTime = 0;
            canSound.play();

        }

    }
);


// =================================
// Click teddy to tear
// =================================

teddy.addEventListener(
    "click",
    function () {

        if (
            teddyStage <
            teddyImages.length - 1
        ) {

            teddyStage++;

            teddy.src =
                teddyImages[teddyStage];

            updateTeddyNarrative();
            saveTeddyState();

            teddySound.currentTime = 0;
            teddySound.play();

        }

    }
);



// =================================
// Click paper to crumple
// =================================

paper.addEventListener(
    "click",
    function () {

        if (
            paperStage <
            paperImages.length - 1
        ) {

            paperStage++;

            paper.src =
                paperImages[paperStage];

            updatePaperNarrative();
            savePaperState();

            paperSound.currentTime = 0;
            paperSound.play();

        }

    }
);


// =================================
// Click tape to break
// =================================

tape.addEventListener(
    "click",
    function () {

        if (
            tapeStage <
            tapeImages.length - 1
        ) {

            tapeStage++;

            tape.src =
                tapeImages[tapeStage];

            updateTapeNarrative();
            saveTapeState();

            tapeSound.currentTime = 0;
            tapeSound.play();

        }

    }
);


// =================================
// Click lego to break
// =================================

lego.addEventListener(
    "click",
    function () {

        if (
            legoStage <
            legoImages.length - 1
        ) {

            legoStage++;

            lego.src =
                legoImages[legoStage];

            updateLegoNarrative();
            saveLegoState();

            legoSound.currentTime = 0;
            legoSound.play();

        }

    }
);


// =================================
// Click clock to break
// =================================

clock.addEventListener(
    "click",
    function () {

        if (
            clockStage <
            clockImages.length - 1
        ) {

            clockStage++;

            clock.src =
                clockImages[clockStage];

            updateClockNarrative();
            saveClockState();

            clockSound.currentTime = 0;
            clockSound.play();

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
            (event.pageX - startX) ;

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
// Click slider arrows
// =================================

function moveToAdjacentPage(
    direction
) {

    const pageWidth =
        window.innerWidth;

    const currentIndex =
        Math.round(
            slider.scrollLeft /
            pageWidth
        );

    const nextIndex =
        currentIndex + direction;

    slider.scrollTo({

        left:
            nextIndex * pageWidth,

        behavior: "smooth"

    });

}


// =================================
// Click left arrow
// =================================

leftArrow.addEventListener(
    "mousedown",
    function (event) {

        event.stopPropagation();

    }
);


leftArrow.addEventListener(
    "click",
    function () {

        moveToAdjacentPage(-1);

    }
);


// =================================
// Click right arrow
// =================================

rightArrow.addEventListener(
    "mousedown",
    function (event) {

        event.stopPropagation();

    }
);


rightArrow.addEventListener(
    "click",
    function () {

        moveToAdjacentPage(1);

    }
);



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

        slider.classList.add("ready");

    }
);