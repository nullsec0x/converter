# Binary/Hex/Text Converter

This is a simple web-based tool for converting text between various formats, including binary, hexadecimal, Base64, URL encoding, and ASCII. It features a terminal-like user interface inspired by hacker aesthetics.

## Features

- **Text to Binary/Hex/Base64/URL/ASCII** conversion
- **Binary/Hex/Base64 to Text** conversion
- Real-time conversion as you type
- Copy-to-clipboard functionality for all outputs
- Clean, terminal-inspired UI
- Responsive design for various screen sizes

## Technologies Used

- React.js
- Tailwind CSS
- JavaScript (for conversion logic)

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd binary-hex-converter
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or if you use pnpm
    pnpm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    # or if you use pnpm
    pnpm run dev
    ```

    The application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

## Deployment on GitHub Pages

To deploy this application to GitHub Pages, you can use `gh-pages` package. Follow these steps:

1.  **Install `gh-pages`:**
    ```bash
    npm install --save-dev gh-pages
    # or if you use pnpm
    pnpm install --save-dev gh-pages
    ```

2.  **Add deployment scripts to `package.json`:**
    Open your `package.json` file and add the following scripts:
    ```json
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist",
      "dev": "vite",
      "build": "vite build",
      "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
      "preview": "vite preview"
    },
    "homepage": "https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPOSITORY_NAME>/"
    ```
    Replace `<YOUR_GITHUB_USERNAME>` and `<YOUR_REPOSITORY_NAME>` with your actual GitHub username and repository name.

3.  **Deploy the application:**
    ```bash
    npm run deploy
    # or if you use pnpm
    pnpm run deploy
    ```

    This will build your React application and deploy it to the `gh-pages` branch of your repository. Your application will then be available at the `homepage` URL you specified.

## Contributing

Feel free to fork this repository, make improvements, and submit pull requests. Any contributions are welcome!

## License

This project is open source and available under the [MIT License](LICENSE).

