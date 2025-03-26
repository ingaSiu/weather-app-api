# Weather Tracker API

This is an api created specifically for weather-app task. 

This API provides weather forecasts for various cities in Lithuania. 
It logs user actions performed in UI for selected city: 
- Actions are logged in console and saved to MongoDB as an object:
  Example:
```
    {
      method: 'GET',
      url: '/forecast/vilnius',
      params: { city: 'vilnius' },
      date: 2025-03-26T09:22:55.410Z
    }
```

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
      ```bash
   git clone https://github.com/ingaSiu/weather-app-api.git
   ```
2.**Navigate to the project directory:**
  ```bash
   cd weather-app-api
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4.**Create a .env file in the root directory and provide the following environment variables:**
  - PORT=<your-desired-port-number>
  - MONGO_URI=<your-mongodb-connection-string>
  
5.  **Start the application:**:
   ```bash
   npm run dev
   ```

# API Endpoints

## GET /api/weather/cities

Get a list of available cities in Lithuania.

    URL: /api/weather/cities

    Method: GET

    Response: Returns a list of cities.
    
## GET /api/weather/forecast/:city

Fetch the long-term weather forecast for a specific city.

    URL: /api/weather/forecast/:city

    Method: GET

    Response: Returns weather forecast data for the specified city.

