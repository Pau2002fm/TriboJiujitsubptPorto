const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");

const videos = [
    "imagenes/videofondo3.mp4",
    "imagenes/videofondo2.mp4",
    "imagenes/videofondo1.mp4",
];

let currentVideoIndex = 0;
let activeVideo = video1; // Video activo al inicio

const changeVideo = (direction) => {
    const nextVideoIndex = (currentVideoIndex + direction + videos.length) % videos.length;
    const inactiveVideo = activeVideo === video1 ? video2 : video1;

    // Configura el nuevo video en el inactivo
    inactiveVideo.src = videos[nextVideoIndex];
    inactiveVideo.play();

    // Desvanece el video activo y muestra el inactivo
    activeVideo.classList.add("hidden");
    inactiveVideo.classList.remove("hidden");

    // Actualiza el índice y el video activo
    currentVideoIndex = nextVideoIndex;
    activeVideo = inactiveVideo;
};

// Botones para cambiar videos
document.getElementById("prev-video").addEventListener("click", () => changeVideo(-1));
document.getElementById("next-video").addEventListener("click", () => changeVideo(1));

// Cambio automático cada 10 segundos
setInterval(() => changeVideo(1), 10000);

