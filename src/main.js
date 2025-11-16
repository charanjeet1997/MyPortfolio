// main.js
import portfolioVideos from "./VideoData.js";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("portfolioContainer");

    for (const category in portfolioVideos) {

        container.innerHTML += `
            <div style="grid-column: 1/-1; text-align:center; margin:40px 0 20px;">
                <h1 style="font-size:32px; text-shadow:0 0 12px #00eaff;">${category}</h1>
                <div class="glow-bar"></div>
            </div>
        `;

        portfolioVideos[category].forEach(item => {
            container.innerHTML += `
                <div class="project">
                    <h2>${item.name}</h2>
                    <video controls preload="metadata" class="vid-player">
                        <source src="${item.url}" type="video/mp4">
                    </video>
                </div>
            `;
        });
    }
});
