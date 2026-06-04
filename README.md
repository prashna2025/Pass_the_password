# Pass the Password 🔐

A simple, fast, and customizable **Random Password Generator** built with vanilla HTML, CSS, and JavaScript. Generate secure passwords with your preferred settings and copy them to clipboard with a single click.

---

## Features ✨

- **Customizable Password Length**: Generate passwords from 10 to 25 characters
- **Character Type Options**:
  - Uppercase letters (A-Z)
  - Lowercase letters (a-z)
  - Numbers (0-9)
  - Symbols (!@#$%^&*(){}[]=<>/,.+)
- **Copy to Clipboard**: One-click button to copy generated password
- **Real-time Generation**: Instantly generate new passwords with custom settings
- **Responsive Design**: Dark theme with clean, modern UI
- **No Dependencies**: Pure vanilla JavaScript, no libraries required

---

## Demo

Simply open `index.html` in your web browser to start using the password generator.

---

## How to Use 📖

1. **Open the Application**:
   - Open `index.html` in any modern web browser

2. **Configure Your Password**:
   - Set the desired **Password Length** (10-25 characters)
   - Check/uncheck character types you want to include:
     - ☐ Uppercase letters
     - ☐ Lowercase letters
     - ☐ Numbers
     - ☐ Symbols

3. **Generate Password**:
   - Click the **"Generate Password"** button
   - Your new password will appear in the result box

4. **Copy to Clipboard**:
   - Click the **clipboard icon** to copy the password instantly

---

## Installation 💻

No installation required! This is a standalone web application.

### Steps:
1. Clone or download this repository
2. Navigate to the project folder
3. Open `index.html` in your browser

```bash
# If you want to serve it locally with Python 3:
python -m http.server 8000

# Then open: http://localhost:8000
```

---

## Project Structure 📁

```
Pass-the-password/
├── index.html       # HTML structure and form
├── style.css        # Styling and layout
├── script.js        # Password generation logic
└── README.md        # Documentation
```

---

## Technologies Used 🛠️

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox
- **JavaScript (ES6)**: Password generation logic
- **Font Awesome 7.0.1**: Icons for clipboard button

---

## Customization 🎨

### Change Password Length Range
Edit in `index.html`:
```html
<input type="number" id="length" min="10" max="25" value="25" />
```

### Add More Symbols
Edit in `script.js`:
```javascript
function getRandomSymbols() {
    const symbols = "!@#$%^&*(){}[]=<>/,.+";  // Add your symbols here
    return symbols[Math.floor(Math.random() * symbols.length)]
}
```

### Change Color Theme
Edit in `style.css`:
```css
.container {
    background-color: rgb(20, 121, 118);  /* Change this color */
}
```

---

## Browser Support ✅

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Any modern browser with JavaScript enabled

---

## Features Explained 🔍

### Password Generation Algorithm
The generator ensures balanced distribution of character types by cycling through each enabled character type as it builds the password, then truncating to the exact length requested.

### Clipboard Integration
Uses the browser's Clipboard API to safely copy passwords without relying on deprecated methods.

---

## License 📜

This project is open source and available for personal and commercial use.

---

## Contributing 🤝

Feel free to fork, modify, and improve this project. Contributions are welcome!

---

**Happy Random Password Generating! 🎉**
