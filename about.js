// =================================
// Crayon drawing
// =================================

const drawingCanvas =
    document.getElementById(
        "drawingCanvas"
    );

const drawingContext =
    drawingCanvas.getContext(
        "2d"
    );

const crayonButtons =
    document.querySelectorAll(
        ".crayon-button"
    );

let selectedCrayonColor =
    "#3155d8";

let isDrawing =
    false;

let lastX =
    0;

let lastY =
    0;


// =================================
// Resize drawing canvas
// =================================

function resizeDrawingCanvas() {

    const pixelRatio =
        Math.min(
            window.devicePixelRatio || 1,
            2
        );

    drawingCanvas.width =
        window.innerWidth *
        pixelRatio;

    drawingCanvas.height =
        window.innerHeight *
        pixelRatio;

    drawingContext.setTransform(
        pixelRatio,
        0,
        0,
        pixelRatio,
        0,
        0
    );

}

resizeDrawingCanvas();

window.addEventListener(
    "resize",
    resizeDrawingCanvas
);


// =================================
// Choose crayon color
// =================================

crayonButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                selectedCrayonColor =
                    button.dataset.color;

                crayonButtons.forEach(
                    function (otherButton) {

                        otherButton.classList.remove(
                            "active"
                        );

                    }
                );

                button.classList.add(
                    "active"
                );

            }
        );

    }
);


// =================================
// Draw crayon texture
// =================================

function drawCrayonStroke(
    startX,
    startY,
    endX,
    endY
) {

    const distance =
        Math.hypot(
            endX - startX,
            endY - startY
        );

    const angle =
        Math.atan2(
            endY - startY,
            endX - startX
        );

    const normalX =
        Math.sin(angle);

    const normalY =
        -Math.cos(angle);


    for (
        let pass = 0;
        pass < 5;
        pass++
    ) {

        const offset =
            (Math.random() - 0.5) *
            8;

        drawingContext.beginPath();

        drawingContext.moveTo(
            startX +
            normalX * offset,
            startY +
            normalY * offset
        );

        drawingContext.lineTo(
            endX +
            normalX * offset,
            endY +
            normalY * offset
        );

        drawingContext.strokeStyle =
            selectedCrayonColor;

        drawingContext.globalAlpha =
            0.12;

        drawingContext.lineWidth =
            5 +
            Math.random() * 4;

        drawingContext.lineCap =
            "round";

        drawingContext.stroke();

    }


    // Add small grainy marks
    const grainCount =
        Math.floor(
            distance / 3
        );

    for (
        let index = 0;
        index < grainCount;
        index++
    ) {

        const progress =
            Math.random();

        const grainX =
            startX +
            (endX - startX) *
            progress +
            (Math.random() - 0.5) *
            10;

        const grainY =
            startY +
            (endY - startY) *
            progress +
            (Math.random() - 0.5) *
            10;

        drawingContext.beginPath();

        drawingContext.arc(
            grainX,
            grainY,
            Math.random() * 1.5,
            0,
            Math.PI * 2
        );

        drawingContext.fillStyle =
            selectedCrayonColor;

        drawingContext.globalAlpha =
            0.18;

        drawingContext.fill();

    }

    drawingContext.globalAlpha =
        1;

}


// =================================
// Start drawing
// =================================

document.addEventListener(
    "pointerdown",
    function (event) {

        const blockedElement =
            event.target.closest(
                "a, button, .crayon-tools"
            );

        if (
            blockedElement
        ) {
            return;
        }

        event.preventDefault();



        isDrawing =
            true;

        lastX =
            event.clientX;

        lastY =
            event.clientY;

    }
);


// =================================
// Continue drawing
// =================================

document.addEventListener(
    "pointermove",
    function (event) {

        if (
            !isDrawing
        ) {
            return;
        }

        drawCrayonStroke(
            lastX,
            lastY,
            event.clientX,
            event.clientY
        );

        lastX =
            event.clientX;

        lastY =
            event.clientY;

    }
);


// =================================
// Stop drawing
// =================================

window.addEventListener(
    "pointerup",
    function () {

        isDrawing =
            false;

    }
);