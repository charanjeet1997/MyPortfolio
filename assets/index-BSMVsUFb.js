(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const s={"2D Games":[{name:"BBB",url:"/Videos/2D/BBB.mp4"},{name:"Bouncy Ball",url:"/Videos/2D/BouncyBall_013.mp4"},{name:"Color Match",url:"/Videos/2D/Color_Match.mov"},{name:"Flappy Bird",url:"/Videos/2D/Flappy_Bird.mp4"},{name:"Galaxy Shooter",url:"/Videos/2D/GalaxyShooter_.mp4"},{name:"Little Red",url:"/Videos/2D/LittleRed.webm"},{name:"Ringow",url:"/Videos/2D/Ringow.mp4"},{name:"Timberwood",url:"/Videos/2D/Timberwood.mp4"}],"3D Games":[{name:"Car Parking",url:"/Videos/3D/Carparking.mov"},{name:"COCO UP",url:"/Videos/3D/COCO_UP.mp4"},{name:"Cube IO",url:"/Videos/3D/CubeIO.mov"},{name:"Katcha Game",url:"/Videos/3D/Katcha_Game.mp4"},{name:"Unnamed Arcade",url:"/Videos/3D/UnnamedArcade.mov"}],"AR Projects":[{name:"AR Racing",url:"/Videos/AR/AR_Racing.mp4"}],"VR Projects":[{name:"Airplane VR Experience",url:"/Videos/VR/Airplane_VR_Experience.mp4"},{name:"Biotest",url:"/Videos/VR/Biotest.mp4"},{name:"Haptiq",url:"/Videos/VR/Haptiq.mp4"},{name:"Parachute VR Experience",url:"/Videos/VR/Parachute_VR_Experience.mp4"},{name:"Tales of March VR",url:"/Videos/VR/Tales_Of_march_VR.mp4"}]};document.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("portfolioContainer");for(const o in s)i.innerHTML+=`
            <div style="grid-column: 1/-1; text-align:center; margin:40px 0 20px;">
                <h1 style="font-size:32px; text-shadow:0 0 12px #00eaff;">${o}</h1>
                <div class="glow-bar"></div>
            </div>
        `,s[o].forEach(t=>{i.innerHTML+=`
                <div class="project">
                    <h2>${t.name}</h2>
                    <video controls preload="metadata" class="vid-player">
                        <source src="${t.url}" type="video/mp4">
                    </video>
                </div>
            `})});
