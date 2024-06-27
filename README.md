
# React Website Translation with Google Cloud Translation API

This project demonstrates how to integrate Google Cloud Translation API with a React application to translate the entire website content dynamically.

**I will later convert this into a reusable npm package**

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Contributing](#contributing)
- [License](#license)

## Features

- Dynamically translates text content within React components.
- Uses Google Cloud Translation API for accurate translations.
- Context API and hooks for managing and applying translations.
- Language switcher to change the language of the website content.

## Installation

1. Clone the repository:
   ```
   sh
   git clone https://github.com/bonifacemwanza/multiple-lang-react.git
   cd react-website-translation
   ```

2. Install dependencies:
   ```
   sh
   npm install
   ```

3. Set up Google Cloud Translation API:
   - Enable the Google Cloud Translation API in your Google Cloud project.
   - Obtain your API key from the Google Cloud Console.
   - Create a `.env` file in the root of the project and add your API key:
     ```
     env
     REACT_APP_API_KEY=your-google-cloud-translation-api-key
     ```

## Usage

1. Start the development server:
   ```
   sh
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Components

### 1. TranslationContext.js

Provides the translation context and functions for translating text using the Google Cloud Translation API.

### 2. useTranslate.js

A custom hook that translates text based on the selected language.

### 3. withTranslation.js

A higher-order component that wraps a component to translate its content dynamically.

### 4. CodingForBread.js

An example component that demonstrates how to use the `withTranslation` HOC.

### 5. LanguageSwitcher.js

A component for switching between different languages.

### Example

```jsx
// App.js
import './App.css';
import { LanguageSwitcher} from './components/index'
import CodingForBread from './components/CodingForBread'
import {TranslationProvider} from './providers/TranslationProvider'
const App = () => {

  return (
    <TranslationProvider>
      <LanguageSwitcher />
       <CodingForBread />
    </TranslationProvider>

  );
}

export default App;;
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

