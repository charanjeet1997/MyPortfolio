import { defineConfig } from "vite";

export default defineConfig({
    // Required for GitHub Pages (repo name)
    base: "/MyPortfolio/",

    // Ensure video files (.mp4, .mov, .webm) are included correctly
    assetsInclude: ["**/*.mp4", "**/*.mov", "**/*.webm"],

    // Optional but recommended (clean builds)
    build: {
        outDir: "dist",
        emptyOutDir: true
    }
});
