
!(function () {
    console.log("Estructura principal del nuetro magic board");
    const canvas = document.getElementById("pizarra");
    const board = canvas.getContext("2d");

    board.fillStyle = 'green';
    board.fillRect(10, 10, 150, 100);
})();