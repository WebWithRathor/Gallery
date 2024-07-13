# Gallery

Gallery is a React application that integrates the Pexels API to allow users to search for and download images based on color, orientation, and size. This app uses Redux Toolkit for state management, React Router for navigation, Axios for API requests, and is fully responsive.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

## Features

- Search images by color, orientation, and size
- Download images directly from the app
- Responsive design
- State management with Redux Toolkit
- Navigation with React Router
- API requests with Axios

## Technologies Used

- React
- Redux Toolkit
- React Router
- Axios
- Pexels API
- CSS (Responsive Design)

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/WebWithRathor/Gallery.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd Gallery
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```


4. **Start the development server:**

    ```bash
    npm start
    ```

    The app will be available at `http://localhost:3000`.

## Usage

- Enter your search criteria (color, orientation, size) in the search bar.
- Browse the search results.
- Click on the download button to download an image.

## Project Structure

Here is a brief overview of the project's structure:

- **public/**: Contains static files like `index.html`.
- **src/**: Contains the main source code for the application.
  - **components/**: Contains reusable components like `ImageCard` and `SearchBar`.
  - **pages/**: Contains page components like `Home`.
  - **redux/**: Contains Redux slices and the store configuration.
  - **App.js**: The root component of the application.
  - **index.js**: The entry point of the application.

## Contributing

Contributions are welcome! If you have any ideas, feel free to fork the repository and submit a pull request. Please make sure to follow the code style and include tests for any new features or bug fixes.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new Pull Request

## Acknowledgements

- [Pexels API](https://www.pexels.com/api/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)



