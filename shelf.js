const shelfGlass =
    document.getElementById("shelfGlass");

const shelfPlate =
    document.getElementById("shelfPlate");

const shelfFlower =
    document.getElementById("shelfFlower");

const shelfBubble =
    document.getElementById("shelfBubble");

const shelfPolaroid =
    document.getElementById("shelfPolaroid");

const shelfCan =
    document.getElementById("shelfCan");

const shelfPaper =
    document.getElementById("shelfPaper");

const shelfTeddy =
    document.getElementById("shelfTeddy");

const shelfTape =
    document.getElementById("shelfTape");

const shelfLego =
    document.getElementById("shelfLego");

const shelfClock =
    document.getElementById("shelfClock");

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
// Update shelf glass
// =================================

function updateShelfGlass() {

    const savedGlassStage =
        localStorage.getItem("glassStage");

    let glassStage = 0;

    if (savedGlassStage !== null) {

        glassStage =
            parseInt(savedGlassStage);

    }

    if (
        glassStage >= 0 &&
        glassStage < glassImages.length
    ) {
        shelfGlass.src =
            glassImages[glassStage];
    }

}


// =================================
// Update shelf flower
// =================================

function updateShelfFlower() {

    const savedFlowerStage =
        localStorage.getItem("flowerStage");

    let flowerStage = 0;

    if (savedFlowerStage !== null) {

        flowerStage =
            parseInt(savedFlowerStage);

    }

    if (
        flowerStage >= 0 &&
        flowerStage < flowerImages.length
    ) {
        shelfFlower.src =
            flowerImages[flowerStage];
    }

}

// =================================
// Update shelf plate
// =================================

function updateShelfPlate() {

    const savedPlateStage =
        localStorage.getItem("plateStage");

    let plateStage = 0;

    if (savedPlateStage !== null) {

        plateStage =
            parseInt(savedPlateStage);

    }

    if (
        plateStage >= 0 &&
        plateStage < plateImages.length
    ) {
        shelfPlate.src =
            plateImages[plateStage];
    }

}


// =================================
// Update shelf bubble
// =================================
function updateShelfBubble() {

    const savedBubbleState =
        localStorage.getItem("bubbleVisible");

    if (savedBubbleState === "false") {

        shelfBubble.style.visibility =
            "hidden";

    } else {

        shelfBubble.style.visibility =
            "visible";

    }

}


// =================================
// Update shelf polaroid
// =================================

function updateShelfPolaroid() {

    const savedPolaroidStage =
        localStorage.getItem("polaroidStage");

    let polaroidStage = 0;

    if (savedPolaroidStage !== null) {

        polaroidStage =
            parseInt(savedPolaroidStage);

    }

    if (
        polaroidStage >= 0 &&
        polaroidStage < polaroidImages.length
    ) {
        shelfPolaroid.src =
            polaroidImages[polaroidStage];
    }

}


// =================================
// Update shelf can
// =================================

function updateShelfCan() {

    const savedCanStage =
        localStorage.getItem("canStage");

    let canStage = 0;

    if (savedCanStage !== null) {

        canStage =
            parseInt(savedCanStage);

    }

    if (
        canStage >= 0 &&
        canStage < canImages.length
    ) {
        shelfCan.src =
            canImages[canStage];
    }

}


// =================================
// Update shelf paper
// =================================

function updateShelfPaper() {

    const savedPaperStage =
        localStorage.getItem("paperStage");

    let paperStage = 0;

    if (savedPaperStage !== null) {

        paperStage =
            parseInt(savedPaperStage);

    }

    if (
        paperStage >= 0 &&
        paperStage < paperImages.length
    ) {
        shelfPaper.src =
            paperImages[paperStage];
    }

}


// =================================
// Update shelf teddy
// =================================

function updateShelfTeddy() {

    const savedTeddyStage =
        localStorage.getItem("teddyStage");

    let teddyStage = 0;

    if (savedTeddyStage !== null) {

        teddyStage =
            parseInt(savedTeddyStage);

    }

    if (
        teddyStage >= 0 &&
        teddyStage < teddyImages.length
    ) {
        shelfTeddy.src =
            teddyImages[teddyStage];
    }

}


// =================================
// Update shelf tape
// =================================

function updateShelfTape() {

    const savedTapeStage =
        localStorage.getItem("tapeStage");

    let tapeStage = 0;

    if (savedTapeStage !== null) {

        tapeStage =
            parseInt(savedTapeStage);

    }

    if (
        tapeStage >= 0 &&
        tapeStage < tapeImages.length
    ) {
        shelfTape.src =
            tapeImages[tapeStage];
    }

}


// =================================
// Update shelf lego
// =================================

function updateShelfLego() {

    const savedLegoStage =
        localStorage.getItem("legoStage");

    let legoStage = 0;

    if (savedLegoStage !== null) {

        legoStage =
            parseInt(savedLegoStage);

    }

    if (
        legoStage >= 0 &&
        legoStage < legoImages.length
    ) {
        shelfLego.src =
            legoImages[legoStage];
    }

}


// =================================
// Update shelf clock
// =================================

function updateShelfClock() {

    const savedClockStage =
        localStorage.getItem("clockStage");

    let clockStage = 0;

    if (savedClockStage !== null) {

        clockStage =
            parseInt(savedClockStage);

    }

    if (
        clockStage >= 0 &&
        clockStage < clockImages.length
    ) {
        shelfClock.src =
            clockImages[clockStage];
    }

}



// =================================
// Update when opening Shelf
// =================================

updateShelfGlass();
updateShelfFlower();
updateShelfPlate();
updateShelfBubble();
updateShelfPolaroid();
updateShelfCan();
updateShelfPaper();
updateShelfTeddy();
updateShelfTape();
updateShelfLego();
updateShelfClock();


// =================================
// Update when returning to Shelf
// =================================

window.addEventListener(
    "pageshow",
    function () {

        updateShelfGlass();
        updateShelfFlower();
        updateShelfPlate();
        updateShelfBubble();
        updateShelfPolaroid();
        updateShelfCan();
        updateShelfPaper();
        updateShelfTeddy();
        updateShelfTape();
        updateShelfLego();
        updateShelfClock();

    }
);


// =================================
// Draggable objects
// =================================

const objects = [
    shelfGlass,
    shelfPlate,
    shelfFlower,
    shelfBubble,
    shelfPolaroid,
    shelfCan,
    shelfPaper,
    shelfTeddy,
    shelfTape,
    shelfLego,
    shelfClock
];


// =================================
// Load saved position
// =================================

function loadObjectPosition(
    object,
    name
) {

    const savedPosition =
        localStorage.getItem(
            "shelf-" + name
        );

    if (savedPosition) {

        const position =
            JSON.parse(savedPosition);

        object.style.left =
            position.left + "px";

        object.style.top =
            position.top + "px";

        object.style.bottom =
            "auto";

        object.style.right =
            "auto";

    }

}


// =================================
// Save position
// =================================

function saveObjectPosition(
    object,
    name
) {

    const position = {
        left: object.offsetLeft,
        top: object.offsetTop
    };

    localStorage.setItem(
        "shelf-" + name,
        JSON.stringify(position)
    );

}


// =================================
// Make object draggable
// =================================

function makeDraggable(
    object,
    name
) {

    let dragging = false;

    let offsetX = 0;
    let offsetY = 0;


    object.addEventListener(
        "pointerdown",
        function (event) {

            dragging = true;

            object.setPointerCapture(
                event.pointerId
            );

            const rect =
                object.getBoundingClientRect();

            offsetX =
                event.clientX - rect.left;

            offsetY =
                event.clientY - rect.top;

            object.style.cursor =
                "grabbing";

            object.style.bottom =
                "auto";

            object.style.right =
                "auto";

            object.style.left =
                rect.left + "px";

            object.style.top =
                rect.top + "px";

            object.style.zIndex =
                10;

        }
    );


    object.addEventListener(
        "pointermove",
        function (event) {

            if (!dragging) return;

            let newLeft =
                event.clientX - offsetX;

            let newTop =
                event.clientY - offsetY;

            const maxLeft =
                window.innerWidth -
                object.offsetWidth;

            const maxTop =
                window.innerHeight -
                object.offsetHeight;

            newLeft =
                Math.max(
                    0,
                    Math.min(
                        newLeft,
                        maxLeft
                    )
                );

            newTop =
                Math.max(
                    0,
                    Math.min(
                        newTop,
                        maxTop
                    )
                );

            object.style.left =
                newLeft + "px";

            object.style.top =
                newTop + "px";

        }
    );


    object.addEventListener(
        "pointerup",
        function (event) {

            if (!dragging) return;

            dragging = false;

            object.releasePointerCapture(
                event.pointerId
            );

            object.style.cursor =
                "grab";

            saveObjectPosition(
                object,
                name
            );

        }
    );


    loadObjectPosition(
        object,
        name
    );

}


// =================================
// Enable dragging
// =================================

makeDraggable(
    shelfGlass,
    "glass"
);

makeDraggable(
    shelfPlate,
    "plate"
);

makeDraggable(
    shelfFlower,
    "flower"
);

makeDraggable(
    shelfBubble,
    "bubble"
);

makeDraggable(
    shelfPolaroid,
    "polaroid"
);

makeDraggable(
    shelfCan,
    "can"
);

makeDraggable(
    shelfPaper,
    "paper"
);

makeDraggable(
    shelfTeddy,
    "teddy"
);

makeDraggable(
    shelfTape,
    "tape"
);

makeDraggable(
    shelfLego,
    "lego"
);

makeDraggable(
    shelfClock,
    "clock"
);

// =================================
// Final shelf ending
// =================================

const shelfBackground =
    document.getElementById(
        "shelfBackground"
    );

const shelfEnding =
    document.getElementById(
        "shelfEnding"
    );

const shelfHands =
    document.getElementById(
        "shelfHands"
    );

const shelfHammer =
    document.getElementById(
        "shelfHammer"
    );

const shelfSpaceHint =
    document.getElementById(
        "shelfSpaceHint"
    );

const shelfSmashSound =
    new Audio(
        "assets/audio/SHELF_536777__egomassive__smash.ogg"
    );

shelfSmashSound.volume =
    0.8;

const shelfEndingText =
    document.getElementById(
        "shelfEndingText"
    );

const shelfDialogue =
    document.getElementById(
        "shelfDialogue"
    );

const shelfArrow =
    document.getElementById(
        "shelfArrow"
    );


let shelfTextStarted = false;

const shelfEndingMessage =
    "looks like you weren't careful enough\n" +
    "but that's okay \n" +
    "not everything is meant to be complete forever";


// =================================
// Final stages of all objects
// =================================

const finalShelfStages = {

    glassStage: 4,
    plateStage: 2,
    flowerStage: 5,
    polaroidStage: 4,
    canStage: 2,
    paperStage: 3,
    teddyStage: 2,
    tapeStage: 3,
    legoStage: 1,
    clockStage: 2

};


// =================================
// Check whether all objects are broken
// =================================

function areAllShelfObjectsBroken() {

    const allObjectsBroken =
        Object.entries(
            finalShelfStages
        ).every(
            function ([key, finalStage]) {

                const savedStage =
                    localStorage.getItem(key);

                return (
                    savedStage !== null &&
                    parseInt(savedStage) >= finalStage
                );

            }
        );


    const bubbleBroken =
        localStorage.getItem(
            "bubbleVisible"
        ) === "false";


    return (
        allObjectsBroken &&
        bubbleBroken
    );

}


// =================================
// Show ending
// =================================

function checkShelfEnding() {

    if (
        areAllShelfObjectsBroken() &&
        localStorage.getItem(
            "shelfBroken"
        ) !== "true"
    ) {

        shelfEnding.classList.add(
            "show"
        );

        setTimeout(
            typeShelfEndingText,
            1500
        );
        
    }

}



// =================================
// Hammer click-to-pick interaction
// =================================

let hammerPicked = false;

let hammerFollowing =
    false;

let hammerOffsetX = 0;
let hammerOffsetY = 0;


// =================================
// Click hammer to pick up or put down
// =================================

shelfHammer.addEventListener(
    "pointerdown",
    function (event) {

        event.preventDefault();



        const rect =
            shelfHammer.getBoundingClientRect();


        // Click hammer to pick it up

        if (
            !hammerFollowing
        ) {

            hammerPicked = true;

            hammerFollowing = true;

            shelfHammer.classList.add(
                "picked"
            );

            shelfHammer.style.left =
                rect.left + "px";

            shelfHammer.style.top =
                rect.top + "px";

            shelfHammer.style.bottom =
                "auto";

            hammerOffsetX =
                event.clientX - rect.left;

            hammerOffsetY =
                event.clientY - rect.top;

            shelfHands.classList.add(
                "exit"
            );

            shelfSpaceHint.classList.add(
                "show"
            );

            return;

        }


        // Click hammer again to put it down

        hammerFollowing = false;

        shelfHammer.classList.remove(
            "picked"
        );

        shelfSpaceHint.classList.remove(
            "show"
        );

    }
);


// =================================
// Hammer follows mouse
// =================================

document.addEventListener(
    "mousemove",
    function (event) {

        if (
            !hammerPicked ||
            !hammerFollowing
        ) {
            return;
        }

        shelfHammer.style.left =
            event.clientX -
            hammerOffsetX +
            "px";

        shelfHammer.style.top =
            event.clientY -
            hammerOffsetY +
            "px";

        const hammerRect =
            shelfHammer.getBoundingClientRect();

        shelfSpaceHint.style.left =
            hammerRect.left +
            hammerRect.width / 2 +
            "px";

        shelfSpaceHint.style.top =
            hammerRect.top +
            40 +
            "px";


    }
);


// =================================
// Spacebar hits shelf
// =================================

let shelfHitCount = 0;

const requiredShelfHits = 3;


// =================================
// Check whether hammer is over shelf
// =================================

function isHammerOnShelf() {

    const hammerRect =
        shelfHammer.getBoundingClientRect();

    const hammerCenterX =
        hammerRect.left +
        hammerRect.width / 2;

    const hammerCenterY =
        hammerRect.top +
        hammerRect.height / 2;


    // Shelf hit area
    // Adjust these values if needed

    const shelfLeft =
        window.innerWidth * 0.20;

    const shelfRight =
        window.innerWidth * 0.80;

    const shelfTop =
        window.innerHeight * 0.25;

    const shelfBottom =
        window.innerHeight * 0.90;


    return (
        hammerCenterX >= shelfLeft &&
        hammerCenterX <= shelfRight &&
        hammerCenterY >= shelfTop &&
        hammerCenterY <= shelfBottom
    );

}


// =================================
// Spacebar hits shelf
// =================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.code !== "Space"
        ) {
            return;
        }

        if (
            event.repeat
        ) {
            return;
        }

        if (
            !hammerPicked
        ) {
            return;
        }

        if (
            !isHammerOnShelf()
        ) {
            return;
        }

        event.preventDefault();

        shelfSmashSound.currentTime =
            0;

        const playPromise =
            shelfSmashSound.play();

        if (
            playPromise !== undefined
        ) {

            playPromise.catch(
                function () {

                    console.log(
                        "shelf smash sound failed"
                    );

                }
            );

        }


        // Hammer motion

        shelfHammer.classList.remove(
            "hammer-hit"
        );

        void shelfHammer.offsetWidth;

        shelfHammer.classList.add(
            "hammer-hit"
        );


        // Shelf shakes

        shelfHitCount++;

        const shelf =
            document.querySelector(
                ".shelf"
            );

        shelf.classList.remove(
            "shake"
        );

        void shelf.offsetWidth;

        shelf.classList.add(
            "shake"
        );


        if (
            shelfHitCount >=
            requiredShelfHits
        ) {

            setTimeout(
                breakShelf,
                250
            );

        }

    }
);


// =================================
// Break shelf
// =================================

function breakShelf() {

    shelfEnding.classList.remove(
        "show"
    );

    shelfHammer.style.opacity =
        "0";

    shelfHammer.style.pointerEvents =
        "none";

    setTimeout(
        function () {

            window.location.href =
                "a-new-start.html";

        },
        800
    );

}


// =================================
// Check ending when opening Shelf
// =================================

setTimeout(
    function () {

        checkShelfEnding();

    },
    100
);




// =================================
// Check ending when returning to Shelf
// =================================

window.addEventListener(
    "pageshow",
    function () {

        setTimeout(
            function () {

                checkShelfEnding();

            },
            100
        );



    }
);

// =================================
// Typewriter effect for shelf dialogue
// =================================

function typeShelfEndingText() {

    if (shelfTextStarted) return;

    shelfTextStarted = true;

    shelfEndingText.textContent = "";

    let textIndex = 0;

    function typeNextCharacter() {

        if (
            textIndex >=
            shelfEndingMessage.length
        ) {
            return;
        }

        shelfEndingText.textContent +=
            shelfEndingMessage[textIndex];

        textIndex++;

        setTimeout(
            typeNextCharacter,
            55
        );

    }

    typeNextCharacter();

}

// =================================
// Arrow opens the hammer ending
// =================================

shelfArrow.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();

        if (
            shelfEnding.classList.contains(
                "tools-show"
            )
        ) {
            return;
        }

        shelfEnding.classList.add(
            "dialogue-exit"
        );

        setTimeout(
            function () {

                shelfEnding.classList.add(
                    "tools-show"
                );

            },
            10
        );

    }
);