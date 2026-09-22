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
// Update when opening Shelf
// =================================

updateShelfGlass();
updateShelfFlower();
updateShelfPlate();
updateShelfBubble();
updateShelfPolaroid();


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
    shelfPolaroid
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