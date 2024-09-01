# django-fest-offical
Website built for the Django Fest KC event. 
Made by Liz Wait

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites
- Node.js (https://nodejs.org/)
- npm (Node Package Manager, comes with Node.js)

### Steps
1. Clone the repository:
    ```sh
    git clone git@github.com:KansasCityWomeninTechnology/django-fest-official.git
    ```
2. Change directories to project:
    ```sh
    cd django-fest-official
    ```

## Usage

### Running the Project
1. Start a local server:
    ```sh
    node server.js
    ```

2. Open your browser and navigate to:
    ```
    http://localhost:8080/
    ```

### File Structure
- `index.html`: The main HTML file.
- `styles.css`: The main CSS file.
- `script.js`: The main JavaScript file.
- `sections/`: Directory containing HTML files for each section.

### Adding New Sections
1. Create a new HTML file in the `sections` directory.
2. Add a new entry to the `getSections` function in `script.js` with the appropriate `id` and `file` path.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.
    - Your pull request will need to be approved by another contributor.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
