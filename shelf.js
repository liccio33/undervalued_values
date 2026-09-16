const shelfGlass =
    document.getElementById("shelfGlass");

const shelfPlate =
    document.getElementById("shelfPlate");

const shelfFlower =
    document.getElementById("shelfFlower");


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
// Update glass according to saved state
// =================================

function updateShelfGlass() {

    const savedGlassStage =
        localStorage.getItem("glassStage");

    let glassStage = 0;

    if (savedGlassStage !== null) {
        glassStage = parseInt(savedGlassStage);
    }

    if (
        glassStage >= 0 &&
        glassStage < glassImages.length
    ) {
        shelfGlass.src =
            glassImages[glassStage];
    }

}


// Update when opening Shelf
updateShelfGlass();


// Update when returning to Shelf
window.addEventListener(
    "pageshow",
    updateShelfGlass
);


// =================================
// Drag objects
// =================================

const objects = [
    shelfGlass,
    shelfPlate,
    shelfFlower
];


// ---------------------------------
// Load saved positions
// ---------------------------------

function loadObjectPosition(object, name) {

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

        object.style.bottom = "auto";
        object.style.right = "auto";

    }

}


// ---------------------------------
// Save position
// ---------------------------------

function saveObjectPosition(object, name) {

    const position = {
        left: object.offsetLeft,
        top: object.offsetTop
    };

    localStorage.setItem(
        "shelf-" + name,
        JSON.stringify(position)
    );

}


// ---------------------------------
// Make object draggable
// ---------------------------------

function makeDraggable(object, name) {

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

            object.style.zIndex = 10;

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


            // Keep object inside screen

            const maxLeft =
                window.innerWidth -
                object.offsetWidth;

            const maxTop =
                window.innerHeight -
                object.offsetHeight;


            newLeft =
                Math.max(
                    0,
                    Math.min(newLeft, maxLeft)
                );

            newTop =
                Math.max(
                    0,
                    Math.min(newTop, maxTop)
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


    // Load previous position

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