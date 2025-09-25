# Digital Fashion Sketchbook

A web-based fashion sketchbook application for viewing and cycling through fashion outfit images.

## Features

- Clean, modern interface for viewing fashion outfits
- "Next Outfit" button to cycle through available images
- Responsive design that works on desktop and mobile
- Elegant styling with smooth transitions

## Setup

1. Place your fashion outfit images in the `images/` folder
2. Name them sequentially (e.g., `outfit1.jpg`, `outfit2.jpg`, etc.)
3. Update the `outfits` array in `script.js` to include all your image files
4. Open `index.html` in a web browser or serve it from a web server

## Adding More Images

To add more fashion outfit images:

1. Place additional images in the `images/` folder
2. Edit `script.js` and add the new image paths to the `outfits` array:

```javascript
const outfits = [
    'images/outfit1.jpg',
    'images/outfit2.jpg',
    'images/outfit3.jpg',
    // Add more images here...
];
```

## Usage

- Click the "Next Outfit" button to cycle through different fashion outfits
- The application will loop back to the first image after the last one

## File Structure

```
/
├── index.html          # Main HTML file
├── script.js          # JavaScript functionality
├── images/            # Folder for fashion outfit images
│   └── outfit1.jpg    # Sample fashion outfit image
└── README.md          # This file
```

## Browser Compatibility

This application works in all modern web browsers that support:
- ES6 JavaScript
- CSS Flexbox
- CSS Transitions