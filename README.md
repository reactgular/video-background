# Video Background

![gameplay](images/sample.gif)

## What is it?

This is a sample project intended to demonstrate how to 
overlay a YouTube video as a background cover.

## Why build it?

Wanted to show that achieving this video effect isn't hard, and anyone can do it by following a simple example.

## How does it work?

The following CSS styles position the YouTube video frame as a background overlay.

```css
:root {
    --video-width: 100vw;
    --video-height: 100vh;
}
@media (min-aspect-ratio: 16/9) {
    :root { --video-height: 56.25vw; }
}
@media (max-aspect-ratio: 16/9) {
    :root { --video-width: 177.78vh; }
}

.video-background {
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
}

.video-background iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    width: var(--video-width);
    height: var(--video-height);
    transform: translate(-50%, -50%);
}
```

## How to get it?

Clone and run it locally.

```bash
git clone https://github.com/reactgular/video-background
cd video-background
yarn install
yarn start
```
