// Implement a simple caching mechanism using JavaScript and the Web Storage API.

// Function to fetch data with caching
function fetchDataWithCache(url) {
    // Check if data exists in localStorage
    const cachedData = localStorage.getItem(url);

    if (cachedData) {
        console.log('Using cached data');
        // If cached, parse the JSON and return it
        return Promise.resolve(JSON.parse(cachedData));
    } else {
        // If not cached, fetch data from the API
        return fetch(url)
            .then(response => response.json())
            .then(data => {
                // Storing the fetched data in localStorage for future use
                localStorage.setItem(url, JSON.stringify(data));
                console.log('Fetching new data');
                return data;
            });
    }
}

// Example usage of fetchDataWithCache function
const apiUrl = 'https://api.example.com/data'; // Replace with your API URL

fetchDataWithCache(apiUrl)
    .then(data => {
        console.log('Data:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
