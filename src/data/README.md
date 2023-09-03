# Redux Data Store

The Redux Data Store directory contains the data that your Redux store will manage. This directory includes a JSON file named `data.json` that contains the initial state of your application. This data will be used by your reducers to manage the application's state.

## File Structure

- `data.json`: This JSON file contains the initial state of different sections of your application, such as header, navigation, hero, services, FAQ, about, and footer.

## Usage

### Accessing Data in Reducers

In your reducers, you can import the data from the `data.json` file to initialize the state for different sections of your application. For example, in the `reducers.js` file:

```javascript
import aboutData from '../data/data.json';

const aboutReducer = (state = aboutData, action) => {
  // Reducer logic
};
```

### Using Data in Components

You can use the useSelector hook from the react-redux library to access the data stored in your Redux store. For example, in your components:

```javascript
import { useSelector } from 'react-redux';

const MyComponent = () => {
  const headerData = useSelector(state => state.about.header);

  // Use headerData in your component
};

```