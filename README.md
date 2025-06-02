# rn-food-search-rn6

A mobile application built with React Native and Expo to search for restaurants using the Yelp API.

## Features

The app allows users to search for restaurants by food type. It initially shows results for "pasta" and organizes them by price range:

- 🥗 **Cost Effective** – Cheap eats  
- 🍝 **Bit Pricier** – Moderate prices  
- 🥩 **Big Spender** – High-end restaurants  

Users can also tap on any restaurant to view a detailed screen that includes:

- Photos of dishes
- Restaurant category
- Delivery options (pickup or delivery)

## Getting Started

### 1. Clone the repository or download it
- [Download](https://github.com/RolphFadini/rn-food-search-rn6/archive/refs/heads/main.zip)

### 2. Rename the env.example for `.env` and add your Yelp API key
- you can get an API key from [Yelp Fusion](https://business.yelp.com/data/products/fusion/)

### 3. Run the command `npm install` to install the required packages, including:
- `axios` – HTTP client used to connect with the Yelp API
- `@react-navigation/native` and `@react-navigation/stack` – for navigating between screens
- `dotenv` – loads environment variables from `.env` file
- `expo` and `react-native` – core frameworks for development
> All other required dependencies will also be installed automatically.

### 4. Start the project
- You can run the app using Expo:
``` bash
npm start        # Terminal 1: Run Expo Go
npm ios          # Terminal 2: Run on iOS
npm android      # Terminal 3: Run on Android
```

### 5. Test the app
- The default search term is "pasta" in San Jose.
- You can enter other food types in the search bar.
- Tap on any restaurant to view additional info.

### 6. Project structure
- `App.js` – Navigation setup using React Navigation
- `SearchScreen.js` – Main screen with search input and price-based restaurant lists
- `ResultsShowScreen.js` – Detailed screen showing restaurant photos and info
- `useResults.js` – Custom hook that fetches data from Yelp API
- `yelp.js` – Axios instance configured with Yelp API base URL and headers

## Troubleshooting
- ❗ "Something went wrong" – Make sure your `.env` file is created and contains a valid API key.
- 🔐 Ensure you’re using a library like `babel-plugin-dotenv` or `react-native-dotenv` to load environment variables in React Native with Expo.
