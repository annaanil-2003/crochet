# Cozy Loops — Static Crochet Business Website

A responsive, pastel-themed HTML/CSS/JavaScript website with product filtering and WhatsApp ordering. No backend required.

## Run in VS Code
1. Extract the ZIP.
2. Open the `cozy-loops` folder in Visual Studio Code (`File > Open Folder`).
3. Open `index.html` in a browser, or install the **Live Server** VS Code extension and click **Go Live**.
4. Browse the homepage, collection filters, and contact section.

## Customize before publishing
- **Business name:** Replace all instances of `Cozy Loops` in `index.html` (and optionally the README).
- **WhatsApp:** In `script.js`, set `WHATSAPP_NUMBER` to your own number with country code, digits only, e.g. `919876543210`. The example number is a placeholder; ordering will not reach your business until you change it.
- **Products:** Edit the `products` array in `script.js` to update names, categories, descriptions, prices, tags, and image URLs.
- **Photos:** Current externally hosted images are illustrative placeholders (some are not crochet). Replace them with your own crochet product photos before launch. For local photos, create an `images` folder and set `image: "images/my-product.jpg"`.
- **Hero photo:** Replace the image URL in the `.hero-image-wrap` `<img>` in `index.html` with your own product photo.
- **Colors:** Change CSS variables at the top of `style.css`.
- **About section:** Personalize the sample story in `index.html`.

## Publish
Upload the files to GitHub Pages, Netlify, or any static web host. Keep `index.html`, `style.css`, and `script.js` in the same folder, and upload your `images` folder if using local photos.

## Notes
- WhatsApp buttons open a pre-filled chat. They do not collect payments or track orders.
- Google Fonts and placeholder photos require internet access.
- All product information and prices are demonstration content, not verified inventory.
