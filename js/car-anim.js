const car = $("#car");
const endRoad = -200;
const startRoad = -50;

car.css("transform", getRoad(startRoad));

async function runCar() {
    car.css("transform", getRoad(endRoad));
    await sleep(1000);
    car.css("transform", getRoad(startRoad));
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRoad(width) {
    return `scaleX(-1) translate(${width}px, -5px)`;
}